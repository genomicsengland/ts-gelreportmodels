import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ConfidenceInterval {
  @JsonProperty("left", Number)
  left: number = 0; // type:int

  @JsonProperty("right", Number)
  right: number = 0; // type:int
}
