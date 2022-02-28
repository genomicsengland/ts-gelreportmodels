import { AcmgVariantClassification } from "./AcmgVariantClassification";
import { AmpVariantClassification } from "./AmpVariantClassification";
/**
 * Variant classification based on guidlines, AMP and ACMG are supported
 */
export declare class GuidelineBasedVariantClassification {
    /**
     * Variant classification using ACMG framework
     */
    acmgVariantClassification?: AcmgVariantClassification;
    /**
     * Variant classification using AMP framework
     */
    ampVariantClassification?: AmpVariantClassification;
}
