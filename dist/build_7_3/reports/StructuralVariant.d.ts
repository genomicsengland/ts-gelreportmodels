import { Coordinates } from "./Coordinates";
import { ReportEvent } from "./ReportEvent";
import { VariantCall } from "./VariantCall";
import { VariantAttributes } from "./VariantAttributes";
import JSONHelper from "../../utils/JSONHelper";
export declare class StructuralVariant extends JSONHelper {
  variantType: string;
  coordinates: Coordinates;
  leftInsSeq?: string;
  rightInsSeq?: string;
  reportEvents: Array<ReportEvent>;
  /** array of genotypes for the samples */
  variantCalls: Array<VariantCall>;
  variantAttributes?: VariantAttributes;
}
