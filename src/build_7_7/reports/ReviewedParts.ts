/**
 * An enumeration for Which parts of the WGA were reviewed?
 */
export enum ReviewedParts {
  /** Domain 1 only */
  domain_1 = "domain_1",

  /** Domains 1 and 2 */
  domain_1_and_2 = "domain_1_and_2",

  /** Domains 1, 2 and supplementary analysis */
  domain_1_2_and_suplementary = "domain_1_2_and_suplementary",

  /** Somatic WGA results to be reviewed when/if clinically relevant */
  somatic_if_relevant = "somatic_if_relevant"
}
