/**
 * Ref. https://prsinfo.clinicaltrials.gov/definitions.htm
 */
export enum PrimaryPurpose {
  /**
   * Treatment: One or more interventions are being evaluated for treating a
   * disease, syndrome, or condition.
   */
  treatment = "treatment",

  /**
   * Prevention: One or more interventions are being assessed for preventing
   * the development of a specific disease or health condition.
   */
  prevention = "prevention",

  /**
   * Diagnostic: One or more interventions are being evaluated for
   * identifying a disease or health condition.
   */
  diagnostic = "diagnostic",

  /**
   * Supportive Care: One or more interventions are evaluated for maximizing
   * comfort, minimizing side effects, or mitigating against a decline in the
   * participant's health or function.
   */
  supportive_care = "supportive_care",

  /**
   * Screening: One or more interventions are assessed or examined for
   * identifying a condition, or risk factors for a condition, in people who
   * are not yet known to have the condition or risk factor.
   */
  screening = "screening",

  /**
   * Health Services Research: One or more interventions for evaluating the
   * delivery, processes, management, organization, or financing of
   * healthcare.
   */
  health_services_research = "health_services_research",

  /**
   * Basic Science: One or more interventions for examining the basic
   * mechanism of action (for example, physiology or biomechanics of an
   * intervention).
   */
  basic_science = "basic_science",

  /**
   * Device Feasibility: An intervention of a device product is being
   * evaluated in a small clinical trial (generally fewer than 10
   * participants) to determine the feasibility of the product; or a clinical
   * trial to test a prototype device for feasibility and not health
   * outcomes. Such studies are conducted to confirm the design and operating
   * specifications of a device before beginning a full clinical trial.
   */
  device_feasibility = "device_feasibility",

  /** Other: None of the other options applies. */
  other = "other"
}
