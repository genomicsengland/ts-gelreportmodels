import { VariantCoordinates } from './VariantCoordinates';
import { ConfirmationDecision } from './ConfirmationDecision';
import { ConfirmationOutcome } from './ConfirmationOutcome';
import { ReportingQuestion } from './ReportingQuestion';
import { ACMGClassification } from './ACMGClassification';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * The variant level questions
 */
@JsonObject
export class VariantLevelQuestions {
    /**
     * Variant coordinates
     */
    @JsonProperty('variantCoordinates', VariantCoordinates)
    variantCoordinates: VariantCoordinates = new VariantCoordinates;

    /**
     * Did you carry out technical confirmation of this variant via an
     * alternative test?
     */
    @JsonProperty('confirmationDecision', String)
    confirmationDecision: string = '';  // ConfirmationDecision

    /**
     * Did the test confirm that the variant is present?
     */
    @JsonProperty('confirmationOutcome', String)
    confirmationOutcome: string = '';  // ConfirmationOutcome

    /**
     * Did you include the variant in your report to the clinician?
     */
    @JsonProperty('reportingQuestion', String)
    reportingQuestion: string = '';  // ReportingQuestion 

    /**
     * What ACMG pathogenicity score (1-5) did you assign to this variant?
     */
    @JsonProperty('acmgClassification', String)
    acmgClassification: string = '';  // ACMGClassification

    /**
     * Please provide PMIDs for papers which you have used to inform your
     * assessment for this variant, separated by a `;` for multiple papers
     */
    @JsonProperty('publications', String)
    publications: string = '';
};
