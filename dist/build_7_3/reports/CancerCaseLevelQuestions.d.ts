/**
 * The questions for the cancer program exit questionnaire at case level
 */
export declare class CancerCaseLevelQuestions {
  /**
   * Total time taken to review/collate evidence for variants (hours).
   * Include all literature review time, consultation with relevant experts
   * etc.
   */
  total_review_time: number;
  /**
   * Time taken to discuss case at MDT (hours).
   */
  mdt1_time: number;
  /**
   * If the case is discussed at a 2nd MDT please enter time here (hours).
   */
  mdt2_time?: number;
  /**
   * Total time to design ALL validation assay(s) for case (hours). Only
   * applicable if it is necessary to design a new assay to validate the
   * variant.
   */
  validation_assay_time?: number;
  /**
   * Technical Laboratory Validation. Total time for validation test wet work
   * for all variants (hours).
   */
  wet_validation_time?: number;
  /**
   * Analytical Laboratory Validation. Total time for analysis of validation
   * results for all variants (hours).
   */
  analytical_validation_time?: number;
  /**
   * Primary Reporting. Time taken to complete primary reporting stage (hours).
   */
  primary_reporting_time: number;
  /**
   * Report Authorisation. Time taken to check and authorise report (hours).
   */
  primary_authorisation_time: number;
  /**
   * Report Distribution. Please enter, where possible/accessible how long it
   * takes for the result to be conveyed to the patient. E.g. via letter from
   * the clinician (days).
   */
  report_distribution_time: number;
  /** Total time from result to report. The total time taken from when the
   * analysis of the WGS results started  to a report being received by the
   * patient include any 'waiting' time (days).
   */
  total_time: number;
  /** Which parts of the WGA were reviewed? */
  reviewedInMdtWga: string;
  /** Were potentially actionable variants detected? */
  actionableVariants: string;
}
