import { JsonObject, JsonProperty } from "json2typescript";
import { AcmgVariantClassification } from "./AcmgVariantClassification";
import { AmpVariantClassification } from "./AmpVariantClassification";

/**
 * Variant classification based on guidlines, AMP and ACMG are supported
 */
@JsonObject
export class GuidelineBasedVariantClassification {
  @JsonProperty("acmgVariantClassification", AcmgVariantClassification, true)
  acmgVariantClassification?: AcmgVariantClassification = undefined;

  @JsonProperty("ampVariantClassification", AmpVariantClassification, true)
  ampVariantClassification?: AmpVariantClassification = undefined;
}
