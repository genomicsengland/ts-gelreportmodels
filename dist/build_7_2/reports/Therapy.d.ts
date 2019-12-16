import { DrugResponse } from "./DrugResponse";
import { Intervention } from "./Intervention";
export declare class Therapy {
  /**
   * URL where reference information for this therapy association can be found
   * */
  referenceUrl: string;
  /** Source */
  source?: string;
  /** References */
  references?: Array<string>;
  /** Drug responses */
  drugResponse?: Array<DrugResponse>;
  /** Any other clinical intervention */
  otherInterventions?: Array<Intervention>;
  /**
   * If true, the association was made at the variant level, if not the
   * association was made at Genomic Entity level
   */
  variantActionable: boolean;
}
