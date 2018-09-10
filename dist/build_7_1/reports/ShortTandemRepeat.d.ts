import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { ShortTandemRepeatReferenceData } from './ShortTandemRepeatReferenceData';
export declare class ShortTandemRepeat {
    coordinates: Coordinates;
    reportEvents: Array<ReportEvent>;
    /** array of genotypes for the samples */
    variantCalls: Array<VariantCall>;
    variantAttributes?: VariantAttributes;
    shortTandemRepeatReferenceData?: ShortTandemRepeatReferenceData;
}
