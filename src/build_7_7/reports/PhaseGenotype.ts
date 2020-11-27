import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class PhaseGenotype {
  @JsonProperty("sortedAlleles", [String])
  sortedAlleles: Array<string> = [];

  @JsonProperty("phaseSet", Number)
  phaseSet: number = 0;
}
