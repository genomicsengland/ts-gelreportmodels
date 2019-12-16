"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var InterpretationRequestsRD_1 = require("./InterpretationRequestsRD");
var InterpretedGenome_1 = require("./InterpretedGenome");
var CancerInterpretationRequest_1 = require("./CancerInterpretationRequest");
var json2typescript_1 = require("json2typescript");
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
var InterpretationDataRd = /** @class */ (function() {
  function InterpretationDataRd() {
    this.interpretationMetaData = new InterpretationRequestsRD_1.InterpretationRequestsRD();
  }
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "interpretationMetaData",
        InterpretationRequestsRD_1.InterpretationRequestsRD
      )
    ],
    InterpretationDataRd.prototype,
    "interpretationMetaData",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "tieringResult",
        InterpretedGenome_1.InterpretedGenome,
        true
      )
    ],
    InterpretationDataRd.prototype,
    "tieringResult",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "otherInterpretationResults",
        [InterpretedGenome_1.InterpretedGenome],
        true
      )
    ],
    InterpretationDataRd.prototype,
    "otherInterpretationResults",
    void 0
  );
  InterpretationDataRd = __decorate(
    [json2typescript_1.JsonObject],
    InterpretationDataRd
  );
  return InterpretationDataRd;
})();
exports.InterpretationDataRd = InterpretationDataRd;
/**
 * Represents the set of all interpretation data (excluding file contents)
 * to be stored in MDT for one TieringResult. Semantic restrictions (not
 * automatically verifiable):
 *   * All InterpretedGenomes in interpretationResults refer to the
 *     TieringResult tieringResult.
 *   * All InterpretedGenomes in interpretationResults have passed the QC
 *     stage and have been approved by the originating GMCs
 */
var InterpretationDataCancer = /** @class */ (function() {
  function InterpretationDataCancer() {
    this.interpretationMetaData = new CancerInterpretationRequest_1.CancerInterpretationRequest();
  }
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "interpretationMetaData",
        CancerInterpretationRequest_1.CancerInterpretationRequest
      )
    ],
    InterpretationDataCancer.prototype,
    "interpretationMetaData",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "tieringResult",
        InterpretedGenome_1.InterpretedGenome,
        true
      )
    ],
    InterpretationDataCancer.prototype,
    "tieringResult",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "otherInterpretationResults",
        [InterpretedGenome_1.InterpretedGenome],
        true
      )
    ],
    InterpretationDataCancer.prototype,
    "otherInterpretationResults",
    void 0
  );
  InterpretationDataCancer = __decorate(
    [json2typescript_1.JsonObject],
    InterpretationDataCancer
  );
  return InterpretationDataCancer;
})();
exports.InterpretationDataCancer = InterpretationDataCancer;
//# sourceMappingURL=MDTDelivery.js.map
