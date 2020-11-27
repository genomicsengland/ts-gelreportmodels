"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportEventQuestionnaireCancer = void 0;
var json2typescript_1 = require("json2typescript");
var reports_1 = require("../reports");
var ReportEventQuestionnaireCancer = /** @class */ (function () {
    function ReportEventQuestionnaireCancer() {
        this.cancerSomaticVariantLevelQuestions = new reports_1.CancerSomaticVariantLevelQuestions();
        this.cancerGermlineVariantLevelQuestions = new reports_1.CancerGermlineVariantLevelQuestions();
        this.cancercaseLevelQuestions = new reports_1.CancerCaseLevelQuestions();
        this.additionalComments = undefined;
        this.otherActionableVariants = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("cancerSomaticVariantLevelQuestions", reports_1.CancerSomaticVariantLevelQuestions)
    ], ReportEventQuestionnaireCancer.prototype, "cancerSomaticVariantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("cancerGermlineVariantLevelQuestions", reports_1.CancerGermlineVariantLevelQuestions)
    ], ReportEventQuestionnaireCancer.prototype, "cancerGermlineVariantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("cancercaseLevelQuestions", reports_1.CancerCaseLevelQuestions)
    ], ReportEventQuestionnaireCancer.prototype, "cancercaseLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalComments", String, true)
    ], ReportEventQuestionnaireCancer.prototype, "additionalComments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherActionableVariants", String, true)
    ], ReportEventQuestionnaireCancer.prototype, "otherActionableVariants", void 0);
    ReportEventQuestionnaireCancer = __decorate([
        json2typescript_1.JsonObject
    ], ReportEventQuestionnaireCancer);
    return ReportEventQuestionnaireCancer;
}());
exports.ReportEventQuestionnaireCancer = ReportEventQuestionnaireCancer;
//# sourceMappingURL=ReportEventQuestionnaireCancer.js.map