import { AgeRange } from "./AgeRange";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class DemographicElegibilityCriteria {
  @JsonProperty("sex", String)
  sex: string = ""; // Sex

  @JsonProperty("ageRange", AgeRange, true)
  ageRange?: AgeRange = undefined;
}
