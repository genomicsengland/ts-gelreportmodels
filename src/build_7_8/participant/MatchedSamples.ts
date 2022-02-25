import { JsonObject, JsonProperty } from "json2typescript";

/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
@JsonObject
export class MatchedSamples {
  /**
   * Sample identifier (e.g, LP00012645_5GH)) for the germline
   */
  @JsonProperty("germlineSampleId", String, true)
  germlineSampleId?: string = undefined;

  /**
   * Sample identifier (e.g, LP00012643_7JS)) for the tumor
   */
  @JsonProperty("tumourSampleId", String, true)
  tumourSampleId?: string = undefined;
}
