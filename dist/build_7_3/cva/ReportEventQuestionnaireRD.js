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
var reports_1 = require("../reports");
var json2typescript_1 = require("json2typescript");
var ReportEventQuestionnaireRD = /** @class */ (function() {
  function ReportEventQuestionnaireRD() {
    this.groupOfVariants = undefined; // int
    this.variantLevelQuestions = new reports_1.VariantLevelQuestions();
    this.variantGroupLevelQuestions = new reports_1.VariantGroupLevelQuestions();
    this.familyLevelQuestions = new reports_1.FamilyLevelQuestions();
  }
  __decorate(
    [json2typescript_1.JsonProperty("groupOfVariants", Number, true)],
    ReportEventQuestionnaireRD.prototype,
    "groupOfVariants",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "variantLevelQuestions",
        reports_1.VariantLevelQuestions
      )
    ],
    ReportEventQuestionnaireRD.prototype,
    "variantLevelQuestions",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "variantGroupLevelQuestions",
        reports_1.VariantGroupLevelQuestions
      )
    ],
    ReportEventQuestionnaireRD.prototype,
    "variantGroupLevelQuestions",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "familyLevelQuestions",
        reports_1.FamilyLevelQuestions
      )
    ],
    ReportEventQuestionnaireRD.prototype,
    "familyLevelQuestions",
    void 0
  );
  ReportEventQuestionnaireRD = __decorate(
    [json2typescript_1.JsonObject],
    ReportEventQuestionnaireRD
  );
  return ReportEventQuestionnaireRD;
})();
exports.ReportEventQuestionnaireRD = ReportEventQuestionnaireRD;
//# sourceMappingURL=ReportEventQuestionnaireRD.js.map
