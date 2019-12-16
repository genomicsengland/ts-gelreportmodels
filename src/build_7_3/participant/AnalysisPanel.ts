import { JsonObject, JsonProperty } from "json2typescript";

/**
 * An analysis panel
 */
@JsonObject
export class AnalysisPanel {
  /** The specific disease that a panel tests */
  @JsonProperty("specificDisease", String)
  specificDisease: string = "";

  /** The name of the panel */
  @JsonProperty("panelName", String)
  panelName: string = "";

  /** The version of the panel */
  @JsonProperty("panelVersion", String, true)
  panelVersion?: string = undefined;

  /** The outcome of the review */
  @JsonProperty("reviewOutcome", String)
  reviewOutcome: string = "";

  /** TODO */
  @JsonProperty("multipleGeneticOrigins", String)
  multipleGeneticOrigins: string = "";
}
