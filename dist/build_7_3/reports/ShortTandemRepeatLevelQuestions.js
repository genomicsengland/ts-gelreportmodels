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
var Coordinates_1 = require("./Coordinates");
/**
 * The variant level questions
 */
var ShortTandemRepeatLevelQuestions = /** @class */ (function() {
  function ShortTandemRepeatLevelQuestions() {
    /**
     * Variant coordinates
     */
    this.coordinates = new Coordinates_1.Coordinates();
    /**
     * Did you carry out technical confirmation of this variant via an
     * alternative test?
     */
    this.confirmationDecision = ""; // ConfirmationDecision
    /**
     * Did the test confirm that the variant is present?
     */
    this.confirmationOutcome = ""; // ConfirmationOutcome
    /**
     * Did you include the variant in your report to the clinician?
     */
    this.reportingQuestion = ""; // ReportingQuestion
    /**
     * What ACMG pathogenicity score (1-5) did you assign to this variant?
     */
    this.acmgClassification = ""; // ACMGClassification
    /**
     * Please provide PMIDs for papers which you have used to inform your
     * assessment for this variant, separated by a `;` for multiple papers
     */
    this.publications = "";
  }
  __decorate(
    [json2typescript_1.JsonProperty("coordinates", Coordinates_1.Coordinates)],
    ShortTandemRepeatLevelQuestions.prototype,
    "coordinates",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("confirmationDecision", String)],
    ShortTandemRepeatLevelQuestions.prototype,
    "confirmationDecision",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("confirmationOutcome", String)],
    ShortTandemRepeatLevelQuestions.prototype,
    "confirmationOutcome",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("reportingQuestion", String)],
    ShortTandemRepeatLevelQuestions.prototype,
    "reportingQuestion",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("acmgClassification", String)],
    ShortTandemRepeatLevelQuestions.prototype,
    "acmgClassification",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("publications", String)],
    ShortTandemRepeatLevelQuestions.prototype,
    "publications",
    void 0
  );
  ShortTandemRepeatLevelQuestions = __decorate(
    [json2typescript_1.JsonObject],
    ShortTandemRepeatLevelQuestions
  );
  return ShortTandemRepeatLevelQuestions;
})();
exports.ShortTandemRepeatLevelQuestions = ShortTandemRepeatLevelQuestions;
//# sourceMappingURL=ShortTandemRepeatLevelQuestions.js.map
