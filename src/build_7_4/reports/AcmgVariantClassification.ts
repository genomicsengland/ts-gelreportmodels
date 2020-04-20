import { AcmgEvidence } from "./AcmgEvidence";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Full record for the ACMG variant clasiffication, including all selectedd
 * evidences and the final classification.
 */
@JsonObject
export class AcmgVariantClassification {
  @JsonProperty("acmgEvidences", [AcmgEvidence])
  acmgEvidences: Array<AcmgEvidence> = [];

  @JsonProperty("clinicalSignificance", String)
  clinicalSignificance: string = ""; // ClinicalSignificance

  @JsonProperty("assesment", String, true)
  assesment?: string = undefined;
}
