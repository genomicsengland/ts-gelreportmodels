/**
 * Each ACMG criterion is weighted using the following terms
 */
export enum AcmgEvidenceWeight {
  /**
   * `stand_alone`: `A`, stand-alone applied for benign variant critieria
   * `(BA1)`
   */
  stand_alone = "stand_alone",

  /**
   * `supporting`: `P`, supporting applied for benign variant critieria
   * `(BP1-6)` and pathogenic variant criteria `(PP1-5)`
   */
  supporting = "supporting",

  /**
   * `moderate`: `M`, moderate applied for pathogenic variant critieria
   * (PM1-6)
   */
  moderate = "moderate",

  /**
   * `strong`: `S`, strong applied for pathogenic variant critieria (PS1-4)
   */
  strong = "strong",

  /**
   * `very_strong`: `S`, Very Stong applied for pathogenic variant critieria
   * (PVS1)
   */
  very_strong = "very_strong"
}
