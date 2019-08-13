import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Morphology {
  @JsonProperty("id", String, true)
  id?: string = undefined;

  @JsonProperty("name", String, true)
  name?: string = undefined;

  @JsonProperty("value", String, true)
  value?: string = undefined;

  @JsonProperty("version", String, true)
  version?: string = undefined;
}
