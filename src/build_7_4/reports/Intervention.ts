import { JsonObject, JsonProperty } from "json2typescript";

/**
 * A process or action that is the focus of a clinical study.
 * Ref. https://prsinfo.clinicaltrials.gov/definitions.html
 */
@JsonObject
export class Intervention {
  /** Intervention type, i.e drug */
  @JsonProperty("interventionType", String)
  interventionType: string = ""; // InterventionType

  /** Intervention name: Placebo */
  @JsonProperty("interventionName", String)
  interventionName: string = "";
}
