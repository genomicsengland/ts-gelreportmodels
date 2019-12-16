/**
 * Consent Status
 */
export declare class ConsentStatus {
  /**
   * Is this individual consented to the programme? It could simply be a
   * family member that is not consented but for whom affection status is
   * known
   */
  programmeConsent: boolean;
  /**
   * Consent for feedback of primary findings?
   */
  primaryFindingConsent: boolean;
  /**
   * Consent for secondary finding lookup
   */
  secondaryFindingConsent: boolean;
  /**
   * Consent for carrier status check?
   */
  carrierStatusConsent: boolean;
}
