import { JsonObject, JsonProperty } from "json2typescript";

/**
 * This is the version for the entire set of data models as referred to
 * the Git release tag
 */
@JsonObject
export class ReportVersionControl {
  @JsonProperty("gitVersionControl", String)
  gitVersionControl: string = "6.0.0"; // value:"6.0.0"
}
