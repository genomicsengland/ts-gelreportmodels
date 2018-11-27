import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * The questions for the cancer program exit questionnaire at case level
 */
@JsonObject
export class CancerCaseLevelQuestions {
    /**
     * Total time taken to review/collate evidence for variants (hours).
     * Include all literature review time, consultation with relevant experts
     * etc.
     */
    @JsonProperty('total_review_time', Number)
    total_review_time: number = 0; // double

    /**
     * Time taken to discuss case at MDT (hours).
     */
    @JsonProperty('mdt1_time', Number)
    mdt1_time: number = 0; // double

    /**
     * If the case is discussed at a 2nd MDT please enter time here (hours).
     */
    @JsonProperty('mdt2_time', Number, true)
    mdt2_time?: number = undefined; // double

    /**
     * Total time to design ALL validation assay(s) for case (hours). Only
     * applicable if it is necessary to design a new assay to validate the
     * variant.
     */
    @JsonProperty('validation_assay_time', Number, true)
    validation_assay_time?: number = undefined; // double

    /**
     * Technical Laboratory Validation. Total time for validation test wet work
     * for all variants (hours).
     */
    @JsonProperty('wet_validation_time', Number, true)
    wet_validation_time?: number = undefined; // double

    /**
     * Analytical Laboratory Validation. Total time for analysis of validation
     * results for all variants (hours).
     */
    @JsonProperty('analytical_validation_time', Number, true)
    analytical_validation_time?: number = undefined; // double

    /**
     * Primary Reporting. Time taken to complete primary reporting stage (hours).
     */
    @JsonProperty('primary_reporting_time', Number)
    primary_reporting_time: number = 0; // double

    /**
     * Report Authorisation. Time taken to check and authorise report (hours).
     */
    @JsonProperty('primary_authorisation_time', Number)
    primary_authorisation_time: number = 0; // double

    /**
     * Report Distribution. Please enter, where possible/accessible how long it
     * takes for the result to be conveyed to the patient. E.g. via letter from
     * the clinician (days).
     */
    @JsonProperty('report_distribution_time', Number)
    report_distribution_time: number = 0; // double

    /** Total time from result to report. The total time taken from when the
     * analysis of the WGS results started  to a report being received by the
     * patient include any 'waiting' time (days).
     */
    @JsonProperty('total_time', Number)
    total_time: number = 0; // double

    /** Which parts of the WGA were reviewed? */
    @JsonProperty('reviewedInMdtWga', String)
    reviewedInMdtWga: string = '';  // ReviewedParts

    /** Were potentially actionable variants detected? */
    @JsonProperty('actionableVariants', String)
    actionableVariants: string = '';  // CancerActionableVariants
};
