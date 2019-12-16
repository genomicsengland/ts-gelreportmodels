/**
 * The variant actionabilities
 */
export enum CancerActionabilitySomatic {
  /** Predicts therapeutic response */
  predicts_therapeutic_response = "predicts_therapeutic_response",

  /** Prognostic */
  prognostic = "prognostic",

  /** Defines diagnosis group */
  defines_diagnosis_group = "defines_diagnosis_group",

  /** Eligibility for trial */
  eligibility_for_trial = "eligibility_for_trial",

  /** Other (please specify) */
  other = "other"
}
