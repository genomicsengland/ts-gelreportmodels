import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Family history for secondary findings. Arrays of strings describing
 * discrete family history phenotypes. Usually: `EndocrineTumours`,
 * `colorectal`, `BreastOvarian` and `HDOrStroke` but can be others
 */
@JsonObject
export class OtherFamilyHistory {
  /**
   * Relevant Maternal family history
   */
  @JsonProperty("maternalFamilyHistory", [String], true)
  maternalFamilyHistory?: Array<string> = undefined;

  /**
   * Relevant Paternal family history
   */
  @JsonProperty("paternalFamilyHistory", [String], true)
  paternalFamilyHistory?: Array<string> = undefined;
}
