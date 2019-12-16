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
var json2typescript_1 = require("json2typescript");
/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
var MatchedSamples = /** @class */ (function() {
  function MatchedSamples() {
    /**
     * Sample identifier (e.g, LP00012645_5GH)) for the germline
     */
    this.germlineSampleId = undefined;
    /**
     * Sample identifier (e.g, LP00012643_7JS)) for the tumor
     */
    this.tumourSampleId = undefined;
  }
  __decorate(
    [json2typescript_1.JsonProperty("germlineSampleId", String, true)],
    MatchedSamples.prototype,
    "germlineSampleId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("tumourSampleId", String, true)],
    MatchedSamples.prototype,
    "tumourSampleId",
    void 0
  );
  MatchedSamples = __decorate([json2typescript_1.JsonObject], MatchedSamples);
  return MatchedSamples;
})();
exports.MatchedSamples = MatchedSamples;
//# sourceMappingURL=MatchedSamples.js.map
