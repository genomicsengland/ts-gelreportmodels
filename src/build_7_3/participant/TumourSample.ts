import { JsonObject, JsonProperty } from "json2typescript";
import { Morphology } from "./Morphology";
import { Topography } from "./Topography";

/**
 * A tumour sample
 */
@JsonObject
export class TumourSample {
  /**
   * Sample identifier (e.g, LP00012645_5GH))
   */
  @JsonProperty("sampleId", String)
  sampleId: string = "";

  /**
   * Lab sample identifier
   */
  @JsonProperty("labSampleId")
  labSampleId: any = 0;

  /**
   * LDP Code (Local Delivery Partner)
   */
  @JsonProperty("LDPCode", String, true)
  LDPCode?: string = undefined;

  /**
   * Identifier of each one of the tumours for a participant
   */
  @JsonProperty("tumourId", String, true)
  tumourId?: string = undefined;

  /**
   * Genomics England programme phase
   */
  @JsonProperty("programmePhase", String, true)
  programmePhase?: string = undefined; // ProgrammePhase

  /**
   * Disease type
   */
  @JsonProperty("diseaseType", String, true)
  diseaseType?: string = undefined; // diseaseType

  /**
   * Disease subtype
   */
  @JsonProperty("diseaseSubType", String, true)
  diseaseSubType?: string = undefined;

  @JsonProperty("haematologicalCancer", Boolean, true)
  haematologicalCancer?: boolean = undefined;

  @JsonProperty("haematologicalCancerLineage", String, true)
  haematologicalCancerLineage?: string = undefined; // HaematologicalCancerLineage

  /**
   * The time when the sample was recieved. In the format
   * YYYY-MM-DDTHH:MM:SS+0000
   */
  @JsonProperty("clinicalSampleDateTime", String, true)
  clinicalSampleDateTime?: string = undefined;

  /**
   * Tumor type
   */
  @JsonProperty("tumourType", String, true)
  tumourType?: string = undefined; // TumourType

  /**
   * Tumour content
   */
  @JsonProperty("tumourContent", String, true)
  tumourContent?: string = undefined; // TumourContent

  /**
   * Tumour content percentage
   */
  @JsonProperty("tumourContentPercentage", Number, true)
  tumourContentPercentage?: number = undefined;

  /**
   * Source of the sample
   */
  @JsonProperty("source", String, true)
  source?: string = undefined; // SampleSource

  /**
   * The preparation method
   */
  @JsonProperty("preparationMethod", String, true)
  preparationMethod?: string = undefined; // PreparationMethod

  /**
   * The tissue source
   */
  @JsonProperty("tissueSource", String, true)
  tissueSource?: string = undefined; // TissueSource

  /**
   * Product of the sample
   */
  @JsonProperty("product", String, true)
  product?: string = undefined; // Product

  @JsonProperty("sampleMorphologies", [Morphology], true)
  sampleMorphologies?: Morphology[] = undefined;

  @JsonProperty("sampleTopographies", [Topography], true)
  sampleTopographies?: Topography[] = undefined;

  @JsonProperty("sampleUid", String, true)
  sampleUid?: string = undefined;

  @JsonProperty("participantId", String, true)
  participantId?: string = undefined;

  @JsonProperty("maskedPid", String, true)
  maskedPid?: string = undefined;

  @JsonProperty("method", String, true)
  method?: string = undefined;

  @JsonProperty("storageMedium", String, true)
  storageMedium?: string = undefined; // StorageMedium

  @JsonProperty("sampleType", String, true)
  sampleType?: string = undefined;

  @JsonProperty("sampleState", String, true)
  sampleState?: string = undefined;
}
