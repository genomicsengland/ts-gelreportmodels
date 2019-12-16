import { VariantCoordinates } from "./VariantCoordinates";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class AdditionalVariantsQuestions {
  /** Variant coordinates */
  @JsonProperty("variantCoordinates", VariantCoordinates)
  variantCoordinates: VariantCoordinates = new VariantCoordinates();

  /**
   * Type of potential actionability:
   */
  @JsonProperty("variantActionability", [String])
  variantActionability: Array<string> = []; // CancerActionability

  @JsonProperty("otherVariantActionability", String, true)
  otherVariantActionability?: string = undefined;

  /**
   * How has/will this potentially actionable variant been/be used?
   */
  @JsonProperty("variantUsability", String)
  variantUsability: string = ""; // CancerUsabilitySomatic

  /**
   * Has this variant been tested by another method (either prior to or
   * following receipt of this WGA)?
   */
  @JsonProperty("variantTested", String)
  variantTested: string = ""; // CancerTestedAdditional

  /**
   * Please enter validation assay type e.g Pyrosequencing, NGS panel, COBAS,
   * Sanger sequencing. If not applicable enter NA;
   */
  @JsonProperty("validationAssayType", String)
  validationAssayType: string = "";
}
