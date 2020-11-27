"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantLevelQuestions = void 0;
var VariantCoordinates_1 = require("./VariantCoordinates");
var json2typescript_1 = require("json2typescript");
/**
 * The variant level questions
 */
var VariantLevelQuestions = /** @class */ (function () {
    function VariantLevelQuestions() {
        /**
         * Variant coordinates
         */
        this.variantCoordinates = new VariantCoordinates_1.VariantCoordinates();
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
    __decorate([
        json2typescript_1.JsonProperty("variantCoordinates", VariantCoordinates_1.VariantCoordinates)
    ], VariantLevelQuestions.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("confirmationDecision", String)
    ], VariantLevelQuestions.prototype, "confirmationDecision", void 0);
    __decorate([
        json2typescript_1.JsonProperty("confirmationOutcome", String)
    ], VariantLevelQuestions.prototype, "confirmationOutcome", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportingQuestion", String)
    ], VariantLevelQuestions.prototype, "reportingQuestion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("acmgClassification", String)
    ], VariantLevelQuestions.prototype, "acmgClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("publications", String)
    ], VariantLevelQuestions.prototype, "publications", void 0);
    VariantLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], VariantLevelQuestions);
    return VariantLevelQuestions;
}());
exports.VariantLevelQuestions = VariantLevelQuestions;
//# sourceMappingURL=VariantLevelQuestions.js.map