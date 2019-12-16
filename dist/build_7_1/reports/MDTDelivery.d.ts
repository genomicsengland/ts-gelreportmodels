import { InterpretationRequestsRD } from "./InterpretationRequestsRD";
import { InterpretedGenome } from "./InterpretedGenome";
import { CancerInterpretationRequest } from "./CancerInterpretationRequest";
/**
 * This protocol defines the integration mechanism to store analysis results in
 * the MDT (Multi-disciplinary Tool).
 */
/**
 * Represents the set of all interpretation data (excluding file contents)
 * to be stored in MDT for one TieringResult Semantic restrictions (not
 * automatically verifiable):
 *   * All InterpretedGenomes in interpretationResults refer to the
 *     TieringResult tieringResult.
 *   * All InterpretedGenomes in interpretationResults have passed the QC
 *     stage and have been approved by the originating GMCs
 */
export declare class InterpretationDataRd {
  interpretationMetaData: InterpretationRequestsRD;
  tieringResult?: InterpretedGenome;
  otherInterpretationResults?: Array<InterpretedGenome>;
}
/**
 * Represents the set of all interpretation data (excluding file contents)
 * to be stored in MDT for one TieringResult. Semantic restrictions (not
 * automatically verifiable):
 *   * All InterpretedGenomes in interpretationResults refer to the
 *     TieringResult tieringResult.
 *   * All InterpretedGenomes in interpretationResults have passed the QC
 *     stage and have been approved by the originating GMCs
 */
export declare class InterpretationDataCancer {
  interpretationMetaData: CancerInterpretationRequest;
  tieringResult?: InterpretedGenome;
  otherInterpretationResults?: Array<InterpretedGenome>;
}
