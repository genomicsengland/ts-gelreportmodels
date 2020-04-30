import { VariantCoordinates } from "./VariantCoordinates";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The questions for the cancer program exit questionnaire for germline variants
 */
@JsonObject
export class CancerPharmacogenomicsVariantLevelQuestion {
  /**
   * Variant coordinates
   */
  @JsonProperty("variantCoordinates", VariantCoordinates)
  variantCoordinates: VariantCoordinates = new VariantCoordinates();

  /**
   * Type of potential actionability
   */
  @JsonProperty("variantActionability", [String])
  variantActionability: Array<string> = []; // CancerActionabilityPharmacogenomics

  /**
   * How has/will this potentially actionable variant been/be used?
   */
  @JsonProperty("variantUsability", String)
  variantUsability: string = ""; // CancerUsabilityPharmacogenomics

  /**
   * Has this variant been tested by another method (either prior to or
   * following receipt of this WGA)?
   */
  @JsonProperty("variantTested", String)
  variantTested: string = ""; // CancerTested

  /**
   * Please enter validation assay type e.g Pyrosequencing, NGS panel, COBAS
   * Sanger sequencing. If not applicable enter NA;
   */
  @JsonProperty("validationAssayType", String)
  validationAssayType: string = "";
}
