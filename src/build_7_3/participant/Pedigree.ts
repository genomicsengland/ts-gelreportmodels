import { VersionControl } from './VersionControl';
import { DiseasePenetrance } from './DiseasePenetrance';
import { AnalysisPanel } from './AnalysisPanel';
import { PedigreeMember } from './PedigreeMember';
import { Sex } from './Sex';
import { TernaryOption } from './TernaryOption';
import { FamiliarRelationship } from './FamiliarRelationship';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';
import { combination } from 'js-combinatorics';
import { intersectionBy } from 'lodash';
import Deque from 'double-ended-queue';

/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
@JsonObject
export class Pedigree extends JSONHelper {
    /**
     * Model version number
     */
    @JsonProperty('versionControl', VersionControl, true)
    versionControl?: VersionControl = undefined;

    /**
     * LDP Code (Local Delivery Partner)
     */
    @JsonProperty('LDPCode', String, true)
    LDPCode?: string;

    /**
     * Family identifier which internally translate to a sample set
     */
    @JsonProperty('familyId', String)
    familyId: string = '';

    /**
     * List of members of a pedigree
     */
    @JsonProperty('members', [PedigreeMember])
    members: Array<PedigreeMember> = [];
    
    /**
     * List of panels
     */
    @JsonProperty('analysisPanels', [AnalysisPanel], true)
    analysisPanels?: Array<AnalysisPanel> = undefined;

    /**
     * List of disease penetrances
     */
    @JsonProperty('diseasePenetrances', [DiseasePenetrance], true)
    diseasePenetrances?: Array<DiseasePenetrance> = undefined;

    /**
     * Flag indicating if a pedigree is ready for analysis
     */
    @JsonProperty('readyForAnalysis', Boolean)
    readyForAnalysis: boolean = false;

    /**
     * The famili quality control status
     */
    @JsonProperty('familyQCState', String, true)
    familyQCState?: string = undefined;  // FamilyQCState

    /**
     * Calculate relation to proband values once object has been initialized
     */
    postConstruct() {
        this.calculateRelationToProband();
    }

    /**
     * Go through each member and assign relation to proband for that member.
     * 
     * Only calculate following relationships:
     * 
     * - child
     * - parent
     * - uncle/aunt
     * - grand parent
     * - sibling
     * - first cousin
     * - spouse
     * - unrelated
     * 
     * Same logic as in pythoncommonlibs (GelRDParticipant.get_relationship)
     */
    calculateRelationToProband() {
        const [proband] = this.members.filter(member => member.isProband);

        if (!proband) {
            return;
        }

        proband.relationToProband = 'Proband';

        if (this.members.length === 1) {
            return;
        }

        // get all combinations, but remove any pair where one of the member isn't proband
        const pairs = combination(this.members, 2).filter(pair => pair[0].isProband || pair[1].isProband ? true : false);
        pairs.forEach(pair => {
            let [m1, m2] = pair;

            if (m1 === m2) {
                return;
            }

            // make sure proband is always on the left
            if (m1 !== proband) {
                [m1, m2] = [m2, m1];
            }

            const checks = [
                this.isParent,
                this.isChild,
                this.isUncleOrAunt,
                this.isGrandParent,
                this.isSibling,
                this.isFirstCousing,
                this.isSpouse,
                this.isUnrelated,
            ];

            checks.some(check => {
                let res = check(m2, m1);
                if (res) {
                    m2.relationToProband = res;
                    return true;
                }
                return false;
            });
        });
    }

    private _pedigreeMap: {[pedigreeId: number]: PedigreeMember} = {};

    /**
     * Get pedigree member by id
     * 
     * @param pedigreeId string Pedigree ID
     */
    getPedigreeById = (pedigreeId: number) => {
        if (Object.keys(this._pedigreeMap).length === 0) {
            this.members.forEach(member => {
                if (member.pedigreeId) {
                    this._pedigreeMap[member.pedigreeId] = member;
                }
            });
        }

        return this._pedigreeMap[pedigreeId];
    }

    /**
     * Check if a member is a parent of the provided family member
     * 
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    isParent = (m1: PedigreeMember, m2: PedigreeMember) => {
        if (m1.sex === Sex.FEMALE) {
            if (m2.motherId && m1.pedigreeId && m1.pedigreeId === m2.motherId) {
                return FamiliarRelationship.Mother;
            }
        }

        if (m1.sex === Sex.MALE) {
            if (m2.fatherId && m1.pedigreeId && m1.pedigreeId === m2.fatherId) {
                return FamiliarRelationship.Father;
            }
        }
    }

    /**
     * Check if a member is a child of the provided family member
     * 
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    isChild = (m1: PedigreeMember, m2: PedigreeMember) => {
        // get pedigree ID
        const parentPedigreeId = m2.sex === Sex.MALE ?
            m1.fatherId : m2.sex === Sex.FEMALE ?
                m1.motherId : undefined;

        if (parentPedigreeId && m2.pedigreeId && m2.pedigreeId === parentPedigreeId)  {
            switch(m1.sex) {
                case Sex.MALE:
                    return FamiliarRelationship.Son;
                case Sex.FEMALE:
                    return FamiliarRelationship.Daughter;
                default:
                    return FamiliarRelationship.ChildOfUnknownSex;
            }
        }
    }

    /**
     * Check if a member is a sibling of the provided family member
     * 
     * @param m1 member to check
     * @param m2 family member to check
     * @return string FamiliarRelationship's value | null
     */
    isSibling = (m1: PedigreeMember, m2: PedigreeMember) => {
        if (m1.fatherId && m2.fatherId && m1.motherId && m1.fatherId && m1.fatherId === m2.fatherId && m1.motherId === m2.motherId) {
            if (m1.twinGroup && m2.twinGroup && m1.twinGroup === m2.twinGroup) {
                if (m1.monozygotic === TernaryOption.yes) {
                    return FamiliarRelationship.TwinsMonozygous;
                } else if (m2.monozygotic === TernaryOption.no) {
                    return FamiliarRelationship.TwinsDizygous;
                } else {
                    return FamiliarRelationship.TwinsUnknown;
                }
            } else {
                return FamiliarRelationship.FullSibling;
            }
        } else if (m1.fatherId && m2.fatherId && m1.fatherId === m2.fatherId && m1.motherId !== m2.motherId) {
            return FamiliarRelationship.FullSiblingF;
        } else if (m1.motherId && m2.motherId && m1.motherId === m2.motherId && m1.fatherId !== m2.fatherId) {
            return FamiliarRelationship.FullSiblingM;
        }
    }

    /**
     * Check if member (m1) is uncle or aunt of the second member (m2)
     * 
     * @param m1 member to check
     * @param m2 family member
     * @returns relationship or null
     */
    isUncleOrAunt = (m1: PedigreeMember, m2: PedigreeMember) => {
        if (m2.motherId) {
            const m2Mother = this.getPedigreeById(m2.motherId);
            if (m2Mother && this.isSibling(m1, m2Mother) && m2Mother !== m1) {
                switch(m1.sex) {
                    case Sex.MALE:
                        return FamiliarRelationship.MaternalUncle;
                    case Sex.FEMALE:
                        return FamiliarRelationship.MaternalAunt;
                    default:
                        return FamiliarRelationship.MaternalUncleOrAunt;
                }
            }
        }

        if (m2.fatherId) {
            const m2Father = this.getPedigreeById(m2.fatherId);
            if (m2Father && this.isSibling(m1, m2Father) && m2Father !== m1) {
                switch (m1.sex) {
                    case Sex.MALE:
                        return FamiliarRelationship.PaternalUncle;
                    case Sex.FEMALE:
                        return FamiliarRelationship.PaternalAunt;
                    default:
                        return FamiliarRelationship.PaternalUncleOrAunt;
                }
            }
        }
    }

    isFirstCousing = (m1: PedigreeMember, m2: PedigreeMember) => {
        const m1Mother = m1.motherId ? this.getPedigreeById(m1.motherId) : undefined;
        const m1Father = m1.fatherId ? this.getPedigreeById(m1.fatherId) : undefined;
        const maternalRelation = m1Mother ? this.isUncleOrAunt(m1Mother, m2) : undefined;
        const paternalRelation = m1Father ? this.isUncleOrAunt(m1Father, m2) : undefined;

        if (m1Mother && m1Father && maternalRelation && paternalRelation) {
            return FamiliarRelationship.DoubleFirstCousin;
        }

        if (m1Mother && maternalRelation) {
            switch (maternalRelation) {
                case FamiliarRelationship.MaternalAunt:
                    return FamiliarRelationship.MaternalCousinSister;
                case FamiliarRelationship.PaternalAunt:
                    return FamiliarRelationship.PaternalCousinSister;
                default:
                    return FamiliarRelationship.Cousin;
            }
        }

        if (m1Father && paternalRelation) {
            switch (paternalRelation) {
                case FamiliarRelationship.PaternalUncle:
                    return FamiliarRelationship.PaternalCousinBrother;
                case FamiliarRelationship.MaternalUncle:
                    return FamiliarRelationship.MaternalCousinBrother;
                default:
                    return FamiliarRelationship.Cousin;
            }
        }
    }

    /**
     * Check if member (m1) is a grand parent of another member (m2)
     * 
     * @param m1 member
     * @param m2 member to check
     * @returns relationship or null
     */
    isGrandParent = (m1: PedigreeMember, m2: PedigreeMember) => {
        const m2Mother = m2.motherId ? this.getPedigreeById(m2.motherId) : undefined;
        const m2Father = m2.fatherId ? this.getPedigreeById(m2.fatherId) : undefined;

        if (m2Mother && m2Mother.motherId && m2Mother.motherId === m1.pedigreeId) {
            return FamiliarRelationship.MaternalGrandmother;
        }
        if (m2Mother && m2Mother.fatherId && m2Mother.fatherId === m1.pedigreeId) {
            return FamiliarRelationship.MaternalGrandfather;
        }
        if (m2Father && m2Father.motherId && m2Father.motherId === m1.pedigreeId) {
            return FamiliarRelationship.PaternalGrandmother;
        }
        if (m2Father && m2Father.fatherId && m2Father.fatherId === m1.pedigreeId) {
            return FamiliarRelationship.PaternalGrandfather;
        }
    }

    /**
     * Check if members are spouses
     * 
     * @param m1 
     * @param m2 
     * 
     * return "Spouse" | null
     */
    isSpouse = (m1: PedigreeMember, m2: PedigreeMember) => {
        let m1Offsprings = new Set();
        let m2Offsprings = new Set();

        if (!m1.pedigreeId || !m2.pedigreeId) {
            return;
        }

        this.members.filter(o => {
            if (o.fatherId && o.fatherId === m1.pedigreeId || o.motherId && o.motherId === m1.pedigreeId) {
                m1Offsprings.add(o);
            }
            if (o.fatherId && o.fatherId === m2.pedigreeId || o.motherId && o.motherId === m2.pedigreeId) {
                m2Offsprings.add(o);
            }
        });

        if (intersectionBy(Array.from(m1Offsprings), Array.from(m2Offsprings), 'pedigreeId').length > 0) {
            return FamiliarRelationship.Spouse;
        }
    }

    /**
     * Check if members are unrelated
     * 
     * @param m1 
     * @param m2 
     * 
     * return "Unrelated" | null
     */
    isUnrelated = (m1: PedigreeMember, m2: PedigreeMember) => {
        // get ancestors for both members and see if there are any overlaping
        const m1Ancestors = this.getAncestors(m1);
        const m2Ancestors = this.getAncestors(m2);

        if (!intersectionBy(m1Ancestors, m2Ancestors, 'pedigreeId').length) {
            return FamiliarRelationship.Unrelated;
        }
    }

    /**
     * Get all ancestors for the provided member
     * 
     * @param member family member
     */
    getAncestors = (member: PedigreeMember) => {
        let q = new Deque([member]);
        let ancestors = new Set();

        while (!q.isEmpty()) {
            let ancestor = q.pop();
            if (ancestor) {
                let mother = ancestor.motherId ? this.getPedigreeById(ancestor.motherId) : undefined;
                if (mother) {
                    q.push(mother);
                    ancestors.add(mother);
                }
                let father = ancestor.fatherId ? this.getPedigreeById(ancestor.fatherId) : undefined;
                if (father) {
                    q.push(father);
                    ancestors.add(father);
                }
            }
        }

        return Array.from(ancestors);
    }

    getProband = () => {
        const [proband] = this.members.filter(member => member.isProband === true);
        return proband
    }
};
