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
 * The questions for the cancer program exit questionnaire at case level
 */
var CancerCaseLevelQuestions = /** @class */ (function() {
  function CancerCaseLevelQuestions() {
    /**
     * Total time taken to review/collate evidence for variants (hours).
     * Include all literature review time, consultation with relevant experts
     * etc.
     */
    this.total_review_time = 0; // double
    /**
     * Time taken to discuss case at MDT (hours).
     */
    this.mdt1_time = 0; // double
    /**
     * If the case is discussed at a 2nd MDT please enter time here (hours).
     */
    this.mdt2_time = undefined; // double
    /**
     * Total time to design ALL validation assay(s) for case (hours). Only
     * applicable if it is necessary to design a new assay to validate the
     * variant.
     */
    this.validation_assay_time = undefined; // double
    /**
     * Technical Laboratory Validation. Total time for validation test wet work
     * for all variants (hours).
     */
    this.wet_validation_time = undefined; // double
    /**
     * Analytical Laboratory Validation. Total time for analysis of validation
     * results for all variants (hours).
     */
    this.analytical_validation_time = undefined; // double
    /**
     * Primary Reporting. Time taken to complete primary reporting stage (hours).
     */
    this.primary_reporting_time = 0; // double
    /**
     * Report Authorisation. Time taken to check and authorise report (hours).
     */
    this.primary_authorisation_time = 0; // double
    /**
     * Report Distribution. Please enter, where possible/accessible how long it
     * takes for the result to be conveyed to the patient. E.g. via letter from
     * the clinician (days).
     */
    this.report_distribution_time = 0; // double
    /** Total time from result to report. The total time taken from when the
     * analysis of the WGS results started  to a report being received by the
     * patient include any 'waiting' time (days).
     */
    this.total_time = 0; // double
    /** Which parts of the WGA were reviewed? */
    this.reviewedInMdtWga = ""; // ReviewedParts
    /** Were potentially actionable variants detected? */
    this.actionableVariants = ""; // CancerActionableVariants
  }
  __decorate(
    [json2typescript_1.JsonProperty("total_review_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "total_review_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("mdt1_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "mdt1_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("mdt2_time", Number, true)],
    CancerCaseLevelQuestions.prototype,
    "mdt2_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("validation_assay_time", Number, true)],
    CancerCaseLevelQuestions.prototype,
    "validation_assay_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("wet_validation_time", Number, true)],
    CancerCaseLevelQuestions.prototype,
    "wet_validation_time",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("analytical_validation_time", Number, true)
    ],
    CancerCaseLevelQuestions.prototype,
    "analytical_validation_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("primary_reporting_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "primary_reporting_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("primary_authorisation_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "primary_authorisation_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("report_distribution_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "report_distribution_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("total_time", Number)],
    CancerCaseLevelQuestions.prototype,
    "total_time",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("reviewedInMdtWga", String)],
    CancerCaseLevelQuestions.prototype,
    "reviewedInMdtWga",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("actionableVariants", String)],
    CancerCaseLevelQuestions.prototype,
    "actionableVariants",
    void 0
  );
  CancerCaseLevelQuestions = __decorate(
    [json2typescript_1.JsonObject],
    CancerCaseLevelQuestions
  );
  return CancerCaseLevelQuestions;
})();
exports.CancerCaseLevelQuestions = CancerCaseLevelQuestions;
//# sourceMappingURL=CancerCaseLevelQuestions.js.map
