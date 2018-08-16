import { VariantCoordinates } from './VariantCoordinates';
import { VariantCall } from './VariantCall';
import { ReportEvent } from './ReportEvent';
import { VariantAttributes } from './VariantAttributes';
/**
 * A reported variant
 */
export declare class SmallVariant {
    /**
     * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
     * other contif in the reference genome, no "chr" prefix is expected.
     * Position is 1- based. Reference and alternate should never be empty or
     * any character representing emptiness (e.g.: . or -), a VCF-like indel
     * representation is expected.
     */
    variantCoordinates: VariantCoordinates;
    /**
     * List of variant calls across all samples under analysis for this variant
     */
    variantCalls: Array<VariantCall>;
    /**
     * The list of report events for this variant across multiple modes of
     * inheritance and panels
     */
    reportEvents: Array<ReportEvent>;
    variantAttributes?: VariantAttributes;
}
