import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class VersionControl {
  @JsonProperty("GitVersionControl", String)
  GitVersionControl: string = "1.1.0"; // value:"1.1.0
}
