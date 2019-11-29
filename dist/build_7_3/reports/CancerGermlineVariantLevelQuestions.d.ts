import { VariantCoordinates } from "./VariantCoordinates";
/**
 * The questions for the cancer program exit questionnaire for germline variants
 */
export declare class CancerGermlineVariantLevelQuestions {
    /**
     * Variant coordinates
     */
    variantCoordinates: VariantCoordinates;
    /**
     * Type of potential actionability
     */
    variantActionability: Array<string>;
    otherVariantActionability?: string;
    /**
     * How has/will this potentially actionable variant been/be used?
     */
    variantUsability: string;
    /**
     * Has this variant been tested by another method (either prior to or
     * following receipt of this WGA)?
     */
    variantTested: string;
    /**
     * Please enter validation assay type e.g Pyrosequencing, NGS panel, COBAS
     * Sanger sequencing. If not applicable enter NA;
     */
    validationAssayType: string;
}
