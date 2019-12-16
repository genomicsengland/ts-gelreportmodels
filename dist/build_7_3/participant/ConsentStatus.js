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
 * Consent Status
 */
var ConsentStatus = /** @class */ (function() {
  function ConsentStatus() {
    /**
     * Is this individual consented to the programme? It could simply be a
     * family member that is not consented but for whom affection status is
     * known
     */
    this.programmeConsent = false; // defaul false
    /**
     * Consent for feedback of primary findings?
     */
    this.primaryFindingConsent = false; // default false
    /**
     * Consent for secondary finding lookup
     */
    this.secondaryFindingConsent = false; // default false
    /**
     * Consent for carrier status check?
     */
    this.carrierStatusConsent = false; // default false
  }
  __decorate(
    [json2typescript_1.JsonProperty("programmeConsent", Boolean)],
    ConsentStatus.prototype,
    "programmeConsent",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("primaryFindingConsent", Boolean)],
    ConsentStatus.prototype,
    "primaryFindingConsent",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("secondaryFindingConsent", Boolean)],
    ConsentStatus.prototype,
    "secondaryFindingConsent",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("carrierStatusConsent", Boolean)],
    ConsentStatus.prototype,
    "carrierStatusConsent",
    void 0
  );
  ConsentStatus = __decorate([json2typescript_1.JsonObject], ConsentStatus);
  return ConsentStatus;
})();
exports.ConsentStatus = ConsentStatus;
//# sourceMappingURL=ConsentStatus.js.map
