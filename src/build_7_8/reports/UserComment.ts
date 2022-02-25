import { User } from "./User";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class UserComment {
  /**
   * Comment text
   */
  @JsonProperty("comment", String)
  comment?: string = "";

  /**
   * User who created comment
   */
  @JsonProperty("user", User, true)
  user?: User = undefined;

  /**
   * Date and time comment was created (ISO 8601 datetime with seconds and timezone e.g. 2020-11-23T15:52:36+00:00)
   */
   @JsonProperty("timestamp", String, true)
   timestamp?: string = undefined;
 }
