import { GenePanel } from "./GenePanel";
import { JsonObject, JsonProperty } from "json2typescript";

/** A panel of genes and the specific disease that it assesses */
@JsonObject
export class AdditionalAnalysisPanel {
  /** The specific disease */
  @JsonProperty("specificDisease", String)
  specificDisease: string = "";

  /** The panel of genes */
  @JsonProperty("panel", GenePanel)
  panel: GenePanel = new GenePanel();
}
