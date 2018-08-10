import { InterpretationRequestsRD } from './InterpretationRequestsRD';
import { InterpretedGenome } from './InterpretedGenome';
import { CancerInterpretationRequest } from './CancerInterpretationRequest';
import { JsonObject, JsonProperty } from 'json2typescript';

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
@JsonObject
export class InterpretationDataRd {
    @JsonProperty('interpretationMetaData', InterpretationRequestsRD)
    interpretationMetaData: InterpretationRequestsRD = new InterpretationRequestsRD;

    @JsonProperty('tieringResult', InterpretedGenome, true)
    tieringResult?: InterpretedGenome;

    @JsonProperty('otherInterpretationResults', [InterpretedGenome], true)
    otherInterpretationResults?: Array<InterpretedGenome>;
};

/**
 * Represents the set of all interpretation data (excluding file contents)
 * to be stored in MDT for one TieringResult. Semantic restrictions (not
 * automatically verifiable):
 *   * All InterpretedGenomes in interpretationResults refer to the
 *     TieringResult tieringResult.
 *   * All InterpretedGenomes in interpretationResults have passed the QC
 *     stage and have been approved by the originating GMCs
 */
@JsonObject
export class InterpretationDataCancer {
    @JsonProperty('interpretationMetaData', CancerInterpretationRequest)
    interpretationMetaData: CancerInterpretationRequest = new CancerInterpretationRequest;

    @JsonProperty('tieringResult', InterpretedGenome, true)
    tieringResult?: InterpretedGenome;

    @JsonProperty('otherInterpretationResults', [InterpretedGenome], true)
    otherInterpretationResults?: Array<InterpretedGenome>;
};
