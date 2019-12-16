import { JsonObject, JsonProperty } from "json2typescript";
import { Technology } from "./Technology";
import JSONHelper from "../../utils/JSONHelper";

@JsonObject
export class ClinicalIndicationTest extends JSONHelper {
  @JsonProperty("clinicalIndicationTestTypeId", String)
  clinicalIndicationTestTypeId: string = "";

  @JsonProperty("clinicalIndicationTestTypeCode", String)
  clinicalIndicationTestTypeCode: string = "";

  @JsonProperty("testTypeId", String)
  testTypeId: string = "";

  @JsonProperty("testTypeName", String)
  testTypeName: string = "";

  @JsonProperty("technology", Technology)
  technology: Technology = new Technology();
}
