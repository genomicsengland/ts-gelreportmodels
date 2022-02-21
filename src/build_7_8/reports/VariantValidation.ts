import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class VariantValidation {
  /**
   * Technology used to perform secondary confirmation of this variant (e.g. Sanger)
   */
  @JsonProperty("validationTechnology", String)
  validationTechnology: string = "";

  /**
   * Status/outcome of validation
   */
   @JsonProperty("validationResult", String)
   validationResult: string = ""; // Validation Result
 }