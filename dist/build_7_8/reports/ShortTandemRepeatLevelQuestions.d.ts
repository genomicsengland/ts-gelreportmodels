import { Coordinates } from "./Coordinates";
/**
 * The variant level questions
 */
export declare class ShortTandemRepeatLevelQuestions {
    /**
     * Variant coordinates
     */
    coordinates: Coordinates;
    /**
     * Did you carry out technical confirmation of this variant via an
     * alternative test?
     */
    confirmationDecision: string;
    /**
     * Did the test confirm that the variant is present?
     */
    confirmationOutcome: string;
    /**
     * Did you include the variant in your report to the clinician?
     */
    reportingQuestion: string;
    /**
     * What ACMG pathogenicity score (1-5) did you assign to this variant?
     */
    acmgClassification: string;
    /**
     * Please provide PMIDs for papers which you have used to inform your
     * assessment for this variant, separated by a `;` for multiple papers
     */
    publications: string;
}
