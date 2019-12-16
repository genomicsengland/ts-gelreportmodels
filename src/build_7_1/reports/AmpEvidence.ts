import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Evidences as defined in AMP guidelines, they are composed by a evidence type
 * (first column in the evidence table of the guidlines) and a assessment of
 * the evicence, this last one will define the streght of the evidence,
 * supporting the variant to be classified as TierI-IV
 */
@JsonObject
export class AmpEvidence {
  /**
   * AMP evidence type according to Guidlines, i.e germline_database_presence
   */
  @JsonProperty("type", String)
  type: string = ""; // AmpEvidenceType

  /**
   * Assessment for AMP evidence, i.e Present in ClinVar
   */
  @JsonProperty("evidenceAssessment", String)
  evidenceAssessment: string = "";
}
