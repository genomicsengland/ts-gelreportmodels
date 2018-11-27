import { InbreedingCoefficient } from './InbreedingCoefficient';
import { Sample } from './Sample';
import { ConsentStatus } from './ConsentStatus';
import { Ancestries } from './Ancestries';
import { HpoTerm } from './HpoTerm';
import { Disorder } from './Disorder';
/**
 * This defines a RD Participant (demographics and pedigree information)
 */
export declare class PedigreeMember {
    /**
     * Numbering used to refer to each member of the pedigree
     */
    pedigreeId?: number;
    /**
     * If this field is true, the member should be considered the proband of
     * this family
     */
    isProband?: boolean;
    /**
     * participantId
     */
    participantId?: string;
    /**
     * participantQCState
     */
    participantQCState?: string;
    /**
     * superFamily id, this id is built as a concatenation of all families id
     * in this superfamily i.e, fam10024_fam100457
     */
    gelSuperFamilyId?: string;
    /**
     * Sex of the Participant
     */
    sex: string;
    /**
     * Karyotypic sex of the participant as previously established or by
     * looking at the GEL genome
     */
    personKaryotypicSex?: string;
    /** Year of Birth */
    yearOfBirth?: number;
    /** refers to the pedigreeId of the father Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    fatherId?: number;
    /**
     * refers to the pedigreeId of the mother Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    motherId?: number;
    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the father
     */
    superFatherId?: number;
    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the mother
     */
    superMotherId?: number;
    /**
     * Each twin group is numbered, i.e. all members of a group of multiparous
     * births receive the same number
     */
    twinGroup?: number;
    /**
     * A property of the twinning group but should be entered for all members
     */
    monozygotic?: string;
    /**
     * Adopted Status
     */
    adoptedStatus?: string;
    /**
     * Life Status
     */
    lifeStatus?: string;
    /**
     * The parents of this participant has a consanguineous relationship
     */
    consanguineousParents?: string;
    /**
     * Affection Status
     */
    affectionStatus?: string;
    /**
     * Clinical Data (disorders). If the family member is unaffected as per
     * affectionStatus then this list is empty
     */
    disorderList?: Array<Disorder>;
    /**
     * Clinical Data (HPO terms)
     */
    hpoTermList?: Array<HpoTerm>;
    /**
     * Participant's ancestries, defined as Mother's/Father's Ethnic Origin and
     * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase
     * 3 populations
     */
    ancestries?: Ancestries;
    /**
     * What has this participant consented to? A participant that has been
     * consented to the programme should also have sequence data associated
     * with them; however this needs to be programmatically checked
     */
    consentStatus?: ConsentStatus;
    /**
     * This is an array containing all the samples that belong to this
     * individual, e.g ["LP00002255_GA4"]
     */
    samples?: Array<Sample>;
    /** Inbreeding Coefficient Estimation */
    inbreedingCoefficient?: InbreedingCoefficient;
    /**
     * We could add a map here to store additional information for example
     * URIs to images, ECGs, etc Null by default
     */
    additionalInformation?: {
        [name: string]: string;
    };
    relationToProband?: string;
}
