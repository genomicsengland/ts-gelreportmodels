export enum StudyType {
  /**
   * `Interventional (clinical trial)`: Participants are assigned
   * prospectively to an intervention or interventions according to a
   * protocol to evaluate the effect of the intervention(s) on biomedical or
   * other health related outcomes.
   */
  interventional = "interventional",

  /**
   * `Observational`: Studies in human beings in which biomedical and/or
   * health outcomes are assessed in pre-defined groups of individuals.
   * Participants in the study may receive diagnostic, therapeutic, or other
   * interventions, but the investigator does not assign specific
   * interventions to the study participants. This includes when participants
   * receive interventions as part of routine medical care, and a researcher
   * studies the effect of the intervention.
   */
  observational = "observational",

  /**
   * `Expanded Access`: An investigational drug product (including biological
   * product) available through expanded access for patients who do not
   * qualify for enrollment in a clinical trial. Expanded Access includes all
   * expanded access types under section 561 of the Federal Food, Drug, and
   * Cosmetic Act: (1) for individual patients, including emergency use; (2)
   * for intermediate-size patient populations; and (3) under a treatment IND
   * or treatment protocol. (For more information on data requirements for
   * this Study Type, see Expanded Access Data Element Definitions).
   */
  expanded_access = "expanded_access",

  patient_registry = "patient_registry"
}
