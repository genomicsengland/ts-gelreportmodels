import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class AgeRange {
  @JsonProperty("minimumAge", Number)
  minimumAge: number = 0;

  @JsonProperty("maximumAge", Number)
  maximumAge: number = 0;

  @JsonProperty("timeunit", String)
  timeunit: string = ""; // TimeUnit
}
