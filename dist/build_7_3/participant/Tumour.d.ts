import { Morphology } from "./Morphology";
import { Topography } from "./Topography";
/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
export declare class Tumour {
  tumourId: string;
  tumourLocalId: string;
  tumourType: string;
  tumourParentId?: string;
  tumourDiagnosisDate?: Date;
  tumourDescription?: string;
  tumourMorphologies?: Morphology[];
  tumourTopographies?: Topography[];
  tumourPrimaryTopographies?: Topography[];
  tumourGrade?: string;
  tumourStage?: string;
  tumourPrognosticScore?: string;
  tumourPresentation?: string;
  primaryOrMetastatic?: string;
}
