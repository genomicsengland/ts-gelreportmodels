import { Zygosity } from './Zygosity';
import { PhaseGenotype } from './PhaseGenotype';
import { NumberOfCopies } from './NumberOfCopies';
import { AlleleOrigin } from './AlleleOrigin';
import { SupportingReadType } from './SupportingReadType';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * This is intended to hold the genotypes for the family members. This assumes
 * that varinats have been split before. In principle it is a phased zygosity
 * as in VCF spec and called by the analysis provider if further phasing is
 * conducted
 */
@JsonObject
export class VariantCall {
    /** Participant id of the family member */
    @JsonProperty('participantId', String)
    participantId: string = '';

    /**
     * LP Number of the family member
     */
    @JsonProperty('sampleId', String)
    sampleId: string = '';

    /** Zygosity. For somatic variants, or variants without zygosity use `na` */
    @JsonProperty('zygosity', String)
    zygosity: string = '';  // Zygosity

    /** phase alleles for those in phase */
    @JsonProperty('phaseGenotype', PhaseGenotype, true)
    phaseGenotype?: PhaseGenotype = undefined;

    /** Sample Variant Allele Frequency */
    @JsonProperty('sampleVariantAlleleFrequency', Number, true)
    sampleVariantAlleleFrequency?: number = undefined; // double

    /** Depth for Reference Allele */
    @JsonProperty('depthReference', Number, true)
    depthReference?: number = undefined; // int

    /** Depth for Alternate Allele */
    @JsonProperty('depthAlternate', Number, true)
    depthAlternate?: number = undefined; // int

    /** Alleles for copy number variation - add doc */
    @JsonProperty('numberOfCopies', [NumberOfCopies], true)
    numberOfCopies?: Array<NumberOfCopies> = undefined;

    /** Describe whether this is a somatic or Germline variant */
    @JsonProperty('alleleOrigins', [String], true)
    alleleOrigins?: Array<string> = undefined;  // AlleleOrigin

    @JsonProperty('supportingReadTypes', [String], true)
    supportingReadTypes?: Array<string> = undefined; // SupportingReadType
};
