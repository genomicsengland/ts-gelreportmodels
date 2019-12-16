import { BreakPoint } from "./BreakPoint";
import { Rearrangement } from "./Rearrangement";
import { ReportEvent } from "./ReportEvent";
import { VariantCall } from "./VariantCall";
import { VariantAttributes } from "./VariantAttributes";
export declare class ChromosomalRearrangement {
  breakPoints?: Array<BreakPoint>;
  rearrangements: Array<Rearrangement>;
  reportEvents: Array<ReportEvent>;
  /** array of genotypes for the samples */
  variantCalls: Array<VariantCall>;
  variantAttributes?: VariantAttributes;
}
