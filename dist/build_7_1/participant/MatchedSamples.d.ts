/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
export declare class MatchedSamples {
  /**
   * Sample identifier (e.g, LP00012645_5GH)) for the germline
   */
  germlineSampleId?: string;
  /**
   * Sample identifier (e.g, LP00012643_7JS)) for the tumor
   */
  tumourSampleId?: string;
}
