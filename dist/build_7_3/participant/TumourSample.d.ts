import { Morphology } from "./Morphology";
import { Topography } from "./Topography";
/**
 * A tumour sample
 */
export declare class TumourSample {
  /**
   * Sample identifier (e.g, LP00012645_5GH))
   */
  sampleId: string;
  /**
   * Lab sample identifier
   */
  labSampleId: number;
  /**
   * LDP Code (Local Delivery Partner)
   */
  LDPCode?: string;
  /**
   * Identifier of each one of the tumours for a participant
   */
  tumourId?: string;
  /**
   * Genomics England programme phase
   */
  programmePhase?: string;
  /**
   * Disease type
   */
  diseaseType?: string;
  /**
   * Disease subtype
   */
  diseaseSubType?: string;
  haematologicalCancer?: boolean;
  haematologicalCancerLineage?: string;
  /**
   * The time when the sample was recieved. In the format
   * YYYY-MM-DDTHH:MM:SS+0000
   */
  clinicalSampleDateTime?: string;
  /**
   * Tumor type
   */
  tumourType?: string;
  /**
   * Tumour content
   */
  tumourContent?: string;
  /**
   * Tumour content percentage
   */
  tumourContentPercentage?: number;
  /**
   * Source of the sample
   */
  source?: string;
  /**
   * The preparation method
   */
  preparationMethod?: string;
  /**
   * The tissue source
   */
  tissueSource?: string;
  /**
   * Product of the sample
   */
  product?: string;
  sampleMorphologies?: Morphology[];
  sampleTopographies?: Topography[];
  sampleUid?: string;
  participantId?: string;
  maskedPid?: string;
  method?: string;
  storageMedium?: string;
  sampleType?: string;
  sampleState?: string;
}
