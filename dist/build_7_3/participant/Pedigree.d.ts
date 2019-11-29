import { VersionControl } from './VersionControl';
import { DiseasePenetrance } from './DiseasePenetrance';
import { AnalysisPanel } from './AnalysisPanel';
import { PedigreeMember } from './PedigreeMember';
import { FamiliarRelationship } from './FamiliarRelationship';
import JSONHelper from '../../utils/JSONHelper';
/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
export declare class Pedigree extends JSONHelper {
    /**
     * Model version number
     */
    versionControl?: VersionControl;
    /**
     * LDP Code (Local Delivery Partner)
     */
    LDPCode?: string;
    /**
     * Family identifier which internally translate to a sample set
     */
    familyId: string;
    /**
     * List of members of a pedigree
     */
    members: Array<PedigreeMember>;
    /**
     * List of panels
     */
    analysisPanels?: Array<AnalysisPanel>;
    /**
     * List of disease penetrances
     */
    diseasePenetrances?: Array<DiseasePenetrance>;
    /**
     * Flag indicating if a pedigree is ready for analysis
     */
    readyForAnalysis: boolean;
    /**
     * The famili quality control status
     */
    familyQCState?: string;
    /**
     * Calculate relation to proband values once object has been initialized
     */
    postConstruct(): void;
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
    calculateRelationToProband(): void;
    private _pedigreeMap;
    /**
     * Get pedigree member by id
     *
     * @param pedigreeId string Pedigree ID
     */
    getPedigreeById: (pedigreeId: number) => PedigreeMember;
    /**
     * Check if a member is a parent of the provided family member
     *
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    isParent: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.Mother | FamiliarRelationship.Father | undefined;
    /**
     * Check if a member is a child of the provided family member
     *
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    isChild: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.Son | FamiliarRelationship.Daughter | FamiliarRelationship.ChildOfUnknownSex | undefined;
    /**
     * Check if a member is a sibling of the provided family member
     *
     * @param m1 member to check
     * @param m2 family member to check
     * @return string FamiliarRelationship's value | null
     */
    isSibling: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.TwinsMonozygous | FamiliarRelationship.TwinsDizygous | FamiliarRelationship.TwinsUnknown | FamiliarRelationship.FullSibling | FamiliarRelationship.FullSiblingF | FamiliarRelationship.FullSiblingM | undefined;
    /**
     * Check if member (m1) is uncle or aunt of the second member (m2)
     *
     * @param m1 member to check
     * @param m2 family member
     * @returns relationship or null
     */
    isUncleOrAunt: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.MaternalAunt | FamiliarRelationship.MaternalUncle | FamiliarRelationship.MaternalUncleOrAunt | FamiliarRelationship.PaternalAunt | FamiliarRelationship.PaternalUncle | FamiliarRelationship.PaternalUncleOrAunt | undefined;
    isFirstCousing: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.DoubleFirstCousin | FamiliarRelationship.MaternalCousinSister | FamiliarRelationship.PaternalCousinSister | FamiliarRelationship.MaternalCousinBrother | FamiliarRelationship.PaternalCousinBrother | FamiliarRelationship.Cousin | undefined;
    /**
     * Check if member (m1) is a grand parent of another member (m2)
     *
     * @param m1 member
     * @param m2 member to check
     * @returns relationship or null
     */
    isGrandParent: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.MaternalGrandmother | FamiliarRelationship.PaternalGrandmother | FamiliarRelationship.MaternalGrandfather | FamiliarRelationship.PaternalGrandfather | undefined;
    /**
     * Check if members are spouses
     *
     * @param m1
     * @param m2
     *
     * return "Spouse" | null
     */
    isSpouse: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.Spouse | undefined;
    /**
     * Check if members are unrelated
     *
     * @param m1
     * @param m2
     *
     * return "Unrelated" | null
     */
    isUnrelated: (m1: PedigreeMember, m2: PedigreeMember) => FamiliarRelationship.Unrelated | undefined;
    /**
     * Get all ancestors for the provided member
     *
     * @param member family member
     */
    getAncestors: (member: PedigreeMember) => any[];
    getProband: () => PedigreeMember;
}
