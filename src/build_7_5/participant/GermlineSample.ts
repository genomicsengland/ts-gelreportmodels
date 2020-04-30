import { JsonObject, JsonProperty } from "json2typescript";

/** A germline sample */
@JsonObject
export class GermlineSample {
  /** Sample identifier (e.g, LP00012645_5GH)) */
  @JsonProperty("sampleId", String)
  sampleId: string = "";

  /** Lab sample identifier */
  @JsonProperty("labSampleId", Number)
  labSampleId: number = 0;

  /** LDP Code (Local Delivery Partner) */
  @JsonProperty("LDPCode", String, true)
  LDPCode?: string = undefined;

  /** Source of the sample */
  @JsonProperty("source", String, true)
  source?: string = undefined; // SampleSource

  /** Product of the sample */
  @JsonProperty("product", String, true)
  product?: string = undefined; // Product

  /** Preparation method */
  @JsonProperty("preparationMethod", String, true)
  preparationMethod?: string; // PreparationMethod

  /** Genomics England programme phase */
  @JsonProperty("programmePhase", String, true)
  programmePhase?: string = undefined; // ProgrammePhase

  /** The time when the sample was received. In the format
   * YYYY-MM-DDTHH:MM:SS+0000 */
  @JsonProperty("clinicalSampleDateTime", String, true)
  clinicalSampleDateTime?: string = undefined;

  @JsonProperty("participantId", String, true)
  participantId?: string = undefined;

  @JsonProperty("sampleUid", String, true)
  sampleUid?: string = undefined;

  @JsonProperty("maskedPid", String, true)
  maskedPid?: string = undefined;

  @JsonProperty("method", String, true)
  method?: string = undefined; // Method

  @JsonProperty("storageMedium", String, true)
  storageMedium?: string = undefined; // StorageMedium

  @JsonProperty("sampleType", String, true)
  sampleType?: string = undefined;

  @JsonProperty("sampleState", String, true)
  sampleState?: string = undefined;
}
