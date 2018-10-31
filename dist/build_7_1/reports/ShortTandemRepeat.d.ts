import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { ShortTandemRepeatReferenceData } from './ShortTandemRepeatReferenceData';
import JSONHelper from '../../utils/JSONHelper';
import { GenePanel } from './GenePanel';
export declare class ShortTandemRepeat extends JSONHelper {
    coordinates: Coordinates;
    reportEvents: Array<ReportEvent>;
    /** array of genotypes for the samples */
    variantCalls: Array<VariantCall>;
    variantAttributes?: VariantAttributes;
    shortTandemRepeatReferenceData?: ShortTandemRepeatReferenceData;
    getTiers(): string[];
    getSTRs(): any[];
    getGenes(): any[];
    getPanels(): GenePanel[];
}
