import { Trial } from "./Trial";
import { Prognosis } from "./Prognosis";
import { Therapy } from "./Therapy";
import { JsonObject, JsonProperty } from "json2typescript";

/** Clinical actions */
@JsonObject
export class Actions {
  @JsonProperty("trials", [Trial], true)
  trials?: Array<Trial> = undefined;

  @JsonProperty("prognosis", [Prognosis], true)
  prognosis?: Array<Prognosis> = undefined;

  @JsonProperty("therapies", [Therapy], true)
  therapies?: Array<Therapy> = undefined;
}
