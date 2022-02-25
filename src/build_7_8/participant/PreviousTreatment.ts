import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";
import { Date } from "./Date";

@JsonObject
export class PreviousTreatment extends JSONHelper {
  @JsonProperty("previousTreatmentType", String, true)
  previousTreatmentType?: string = undefined;

  @JsonProperty("previousTreatmentName", String, true)
  previousTreatmentName?: string = undefined;

  @JsonProperty("previousTreatmentDate", Date, true)
  previousTreatmentDate?: Date = undefined;
}
