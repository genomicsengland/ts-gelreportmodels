import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class User {
  /**
   *Azure Active Directory immutable user OID
   */
  @JsonProperty("userid", String, true)
  userid?: string = undefined;

  /**
   * User email address
   */
  @JsonProperty("email", String)
  email: string = "";

  /**
   * Username
   */
  @JsonProperty("username", String)
  username: string = "";

  @JsonProperty("role", String, true)
  role?: string = undefined;

  @JsonProperty("groups", [String], true)
  groups?: Array<string> = undefined;
}
