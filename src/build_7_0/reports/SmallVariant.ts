import { VariantCoordinates } from './VariantCoordinates';
import { VariantCall } from './VariantCall';
import { ReportEvent } from './ReportEvent';
import { VariantAttributes } from './VariantAttributes';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * A reported variant
 */
@JsonObject
export class SmallVariant {
    /**
     * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
     * other contif in the reference genome, no "chr" prefix is expected.
     * Position is 1- based. Reference and alternate should never be empty or
     * any character representing emptiness (e.g.: . or -), a VCF-like indel
     * representation is expected.
     */
    @JsonProperty('variantCoordinates', VariantCoordinates)
    variantCoordinates: VariantCoordinates = new VariantCoordinates;

    /**
     * List of variant calls across all samples under analysis for this variant
     */
    @JsonProperty('variantCalls', [VariantCall])
    variantCalls: Array<VariantCall> = [];

    /**
     * The list of report events for this variant across multiple modes of
     * inheritance and panels
     */
    @JsonProperty('reportEvents', [ReportEvent])
    reportEvents: Array<ReportEvent> = [];

    @JsonProperty('variantAttributes', VariantAttributes, true)
    variantAttributes?: VariantAttributes = undefined;
};
