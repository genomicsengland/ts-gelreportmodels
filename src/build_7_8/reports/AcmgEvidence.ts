import { UserComment } from "./UserComment";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * AcmgEvidence. This should be buit for each one of the evidences assing to a
 * variants following the ACMG guidelines. An AcmgEvidence, should map with
 * one of the criteria defined, i.e, PVS1, BA1, PM1...
 */
@JsonObject
export class AcmgEvidence {
  /**
   * Evidence category as defined in ACMG guidelines
   */
  @JsonProperty("category", String)
  category: string = ""; // AcmgEvidenceCategory

  /**
   * Evidence type: benign or pathogenic
   */
  @JsonProperty("type", String)
  type: string = ""; // AcmgEvidenceType

  /**
   * Default strength for criterion as defined in Table 3 of ACMG guidelines (Richards et al 2015). e.g. PM2 would be "moderate"
   */
  @JsonProperty("weight", String)
  weight: string = ""; // AcmgEvidenceWeight

  /**
   * The number suffix at the end of the ACMG criteria code e.g PM2 would be 2
   */
  @JsonProperty("modifier", Number)
  modifier: number = 0;

  /**
   * The strength this criterion has been used at in this interpretation. e.g. if PM2 was only used at "supporting" rather than "moderate", the activation strength would be "supporting"
   */
   @JsonProperty("activationStrength", String)
   activationStrength: string = ""; // ActivationStrength

  /**
   * Description of the evidence
   */
  @JsonProperty("description", String, true)
  description?: string = undefined;

  /**
   * User comments attached to this ACMG criteria in this case
   */
  @JsonProperty("comments", [UserComment], true)
  comments?: Array<UserComment> = undefined;
}
