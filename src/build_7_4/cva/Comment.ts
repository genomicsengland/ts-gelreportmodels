import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Comment {
  @JsonProperty("text", String)
  text: string = "";

  @JsonProperty("date", String)
  date: string = "";

  @JsonProperty("userid", String)
  userid: string = "";
}
