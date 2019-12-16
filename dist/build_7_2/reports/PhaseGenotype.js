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
var PhaseGenotype = /** @class */ (function() {
  function PhaseGenotype() {
    this.sortedAlleles = [];
    this.phaseSet = 0;
  }
  __decorate(
    [json2typescript_1.JsonProperty("sortedAlleles", [String])],
    PhaseGenotype.prototype,
    "sortedAlleles",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("phaseSet", Number)],
    PhaseGenotype.prototype,
    "phaseSet",
    void 0
  );
  PhaseGenotype = __decorate([json2typescript_1.JsonObject], PhaseGenotype);
  return PhaseGenotype;
})();
exports.PhaseGenotype = PhaseGenotype;
//# sourceMappingURL=PhaseGenotype.js.map
