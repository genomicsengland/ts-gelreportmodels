import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Sample {
  /** Sample Id (e.g, LP00012645_5GH)) */
  @JsonProperty("sampleId", String)
  sampleId: string = "";

  /** Lab Sample Id */
  @JsonProperty("labSampleId")
  labSampleId: any = 0;

  /** Source */
  @JsonProperty("source", String, true)
  source?: string = undefined; // SampleSource

  /** Product */
  @JsonProperty("product", String, true)
  product?: string = undefined; // Product

  /** preparationMethod */
  @JsonProperty("preparationMethod", String, true)
  preparationMethod?: string = undefined; // PreparationMethod
}
