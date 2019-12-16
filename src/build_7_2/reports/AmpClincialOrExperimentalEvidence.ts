import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class AmpClincialOrExperimentalEvidence {
  @JsonProperty("category", String)
  category: string = ""; // AmpClinicalOrExperimentalEvidenceCategory

  @JsonProperty("level", String)
  level: string = ""; // AmpClinicalOrExperimentalEvidenceLevel

  @JsonProperty("description", String, true)
  description?: string = "";
}
