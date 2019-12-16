import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Consent Status
 */
@JsonObject
export class ConsentStatus {
  /**
   * Is this individual consented to the programme? It could simply be a
   * family member that is not consented but for whom affection status is
   * known
   */
  @JsonProperty("programmeConsent", Boolean)
  programmeConsent: boolean = false; // defaul false

  /**
   * Consent for feedback of primary findings?
   */
  @JsonProperty("primaryFindingConsent", Boolean)
  primaryFindingConsent: boolean = false; // default false

  /**
   * Consent for secondary finding lookup
   */
  @JsonProperty("secondaryFindingConsent", Boolean)
  secondaryFindingConsent: boolean = false; // default false

  /**
   * Consent for carrier status check?
   */
  @JsonProperty("carrierStatusConsent", Boolean)
  carrierStatusConsent: boolean = false; // default false
}
