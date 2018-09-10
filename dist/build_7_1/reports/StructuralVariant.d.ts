import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
export declare class StructuralVariant {
    variantType: string;
    coordinates: Coordinates;
    leftInsSeq?: string;
    rightInsSeq?: string;
    reportEvents: Array<ReportEvent>;
    /** array of genotypes for the samples */
    variantCalls: Array<VariantCall>;
    variantAttributes?: VariantAttributes;
}
