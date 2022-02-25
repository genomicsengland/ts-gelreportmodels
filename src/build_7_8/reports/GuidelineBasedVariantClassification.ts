import { JsonObject, JsonProperty } from "json2typescript";
import { AcmgVariantClassification } from "./AcmgVariantClassification";
import { AmpVariantClassification } from "./AmpVariantClassification";

/**
 * Variant classification based on guidlines, AMP and ACMG are supported
 */
@JsonObject
export class GuidelineBasedVariantClassification {
  /**
   * Variant classification using ACMG framework
   */
  @JsonProperty("acmgVariantClassification", AcmgVariantClassification, true)
  acmgVariantClassification?: AcmgVariantClassification = undefined;

  /**
   * Variant classification using AMP framework
   */
  @JsonProperty("ampVariantClassification", AmpVariantClassification, true)
  ampVariantClassification?: AmpVariantClassification = undefined;
}
