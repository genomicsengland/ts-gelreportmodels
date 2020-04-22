import { PhaseGenotype } from "./PhaseGenotype";
import { NumberOfCopies } from "./NumberOfCopies";
/**
 * This is intended to hold the genotypes for the family members. This assumes
 * that varinats have been split before. In principle it is a phased zygosity
 * as in VCF spec and called by the analysis provider if further phasing is
 * conducted
 */
export declare class VariantCall {
    /** Participant id of the family member */
    participantId: string;
    /**
     * LP Number of the family member
     */
    sampleId: string;
    /** Zygosity. For somatic variants, or variants without zygosity use `na` */
    zygosity: string;
    /** phase alleles for those in phase */
    phaseGenotype?: PhaseGenotype;
    /** Sample Variant Allele Frequency */
    sampleVariantAlleleFrequency?: number;
    /** Depth for Reference Allele */
    depthReference?: number;
    /** Depth for Alternate Allele */
    depthAlternate?: number;
    /** Alleles for copy number variation - add doc */
    numberOfCopies?: Array<NumberOfCopies>;
    /** Describe whether this is a somatic or Germline variant */
    alleleOrigins?: Array<string>;
    supportingReadTypes?: Array<string>;
}
