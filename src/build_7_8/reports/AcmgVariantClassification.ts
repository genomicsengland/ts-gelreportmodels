import { AcmgEvidence } from "./AcmgEvidence";
import { AcmgEvidenceCategory } from "./AcmgEvidenceCategory";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Full record for the ACMG variant classification, including all selected
 * evidences and the final classification.
 */
@JsonObject
export class AcmgVariantClassification {
  /**
   * Details of ACMG criteria used to score this variant
   */
  @JsonProperty("acmgEvidences", [AcmgEvidence])
  acmgEvidences: Array<AcmgEvidence> = [];

  /**
   * Final classification selected by user
   */
  @JsonProperty("clinicalSignificance", String)
  clinicalSignificance: string = ""; // ClinicalSignificance

  /**
   * Classification computed from ACMG scores
   */
  @JsonProperty("assesment", String, true)
  assesment?: string = undefined;

  /**
   * ACMG evidence categories for which the user has indicated there is no evidence available
   */
   @JsonProperty("noAcmgEvidence", Array, true)
   noAcmgEvidence?: Array<AcmgEvidenceCategory> = undefined;
}
