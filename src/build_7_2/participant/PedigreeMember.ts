import { InbreedingCoefficient } from './InbreedingCoefficient';
import { Sample } from './Sample';
import { ConsentStatus } from './ConsentStatus';
import { Ancestries } from './Ancestries';
import { HpoTerm } from './HpoTerm';
import { Disorder } from './Disorder';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * This defines a RD Participant (demographics and pedigree information)
 */
@JsonObject
export class PedigreeMember {
    /**
     * Numbering used to refer to each member of the pedigree
     */
    @JsonProperty('pedigreeId', Number, true)
    pedigreeId?: number = undefined; // type:int

    /**
     * If this field is true, the member should be considered the proband of
     * this family
     */
    @JsonProperty('isProband', Boolean, true)
    isProband?: boolean = undefined;

    /**
     * participantId
     */
    @JsonProperty('participantId', String, true)
    participantId?: string = undefined;

    /**
     * participantQCState
     */
    @JsonProperty('participantQCState', String, true)
    participantQCState?: string = undefined;  // ParticipantQCState

    /**
     * superFamily id, this id is built as a concatenation of all families id
     * in this superfamily i.e, fam10024_fam100457
     */
    @JsonProperty('gelSuperFamilyId', String, true)
    gelSuperFamilyId?: string = undefined;

    /**
     * Sex of the Participant
     */
    @JsonProperty('sex', String)
    sex: string = '';

    /**
     * Karyotypic sex of the participant as previously established or by
     * looking at the GEL genome
     */
    @JsonProperty('personKaryotypicSex', String, true)
    personKaryotypicSex?: string = undefined;  // PersonKaryotipicSex

    /** Year of Birth */
    @JsonProperty('yearOfBirth', Number, true)
    yearOfBirth?: number = undefined; // type:int

    /** refers to the pedigreeId of the father Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    @JsonProperty('fatherId', Number, true)
    fatherId?: number = undefined; // type:int

    /**
     * refers to the pedigreeId of the mother Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    @JsonProperty('motherId', Number, true)
    motherId?: number = undefined; // type:int

    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the father
     */
    @JsonProperty('superFatherId', Number, true)
    superFatherId?: number = undefined; // type:int

    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the mother
     */
    @JsonProperty('superMotherId', Number, true)
    superMotherId?: number = undefined; // type:int

    /**
     * Each twin group is numbered, i.e. all members of a group of multiparous
     * births receive the same number
     */
    @JsonProperty('twinGroup', Number, true)
    twinGroup?: number = undefined; // type:int

    /**
     * A property of the twinning group but should be entered for all members
     */
    @JsonProperty('monozygotic', String, true)
    monozygotic?: string = undefined;  // TernaryOption

    /**
     * Adopted Status
     */
    @JsonProperty('adoptedStatus', String, true)
    adoptedStatus?: string = undefined;  // AdoptedStatus

    /**
     * Life Status
     */
    @JsonProperty('lifeStatus', String, true)
    lifeStatus?: string = undefined;  // LifeStatus

    /**
     * The parents of this participant has a consanguineous relationship
     */
    @JsonProperty('consanguineousParents', String, true)
    consanguineousParents?: string = undefined;  // TernaryOption

    /**
     * Affection Status
     */
    @JsonProperty('affectionStatus', String, true)
    affectionStatus?: string = undefined;  // AffectionStatus

    /**
     * Clinical Data (disorders). If the family member is unaffected as per
     * affectionStatus then this list is empty
     */
    @JsonProperty('disorderList', [Disorder], true)
    disorderList?: Array<Disorder> = undefined;

    /**
     * Clinical Data (HPO terms)
     */
    @JsonProperty('hpoTermList', [HpoTerm], true)
    hpoTermList?: Array<HpoTerm> = undefined;

    /**
     * Participant's ancestries, defined as Mother's/Father's Ethnic Origin and
     * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase
     * 3 populations
     */
    @JsonProperty('ancestries', Ancestries, true)
    ancestries?: Ancestries = undefined;

    /**
     * What has this participant consented to? A participant that has been
     * consented to the programme should also have sequence data associated
     * with them; however this needs to be programmatically checked
     */
    @JsonProperty('consentStatus', ConsentStatus, true)
    consentStatus?: ConsentStatus = undefined;

    /**
     * This is an array containing all the samples that belong to this
     * individual, e.g ["LP00002255_GA4"]
     */
    @JsonProperty('samples', [Sample], true)
    samples?: Array<Sample> = undefined;

    /** Inbreeding Coefficient Estimation */
    @JsonProperty('inbreedingCoefficient', InbreedingCoefficient, true)
    inbreedingCoefficient?: InbreedingCoefficient = undefined;

    /**
     * We could add a map here to store additional information for example
     * URIs to images, ECGs, etc Null by default
     */
    @JsonProperty('additionalInformation', Object, true)
    additionalInformation?: { // default:null
        [name: string]: string;
    } = undefined;

    // custom fields
    relationToProband?: string;
};
