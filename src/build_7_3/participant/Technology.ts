import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Technology {
  @JsonProperty("testTechnologyId", String)
  testTechnologyId: string = "";

  @JsonProperty("testTechnologyDescription", String)
  testTechnologyDescription: string = "";
}
