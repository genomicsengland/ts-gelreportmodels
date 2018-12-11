"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VariantCoordinates_1 = require("./VariantCoordinates");
var json2typescript_1 = require("json2typescript");
var Coordinates_1 = require("./Coordinates");
/**
 * The variant level questions
 */
var StructuralVariantLevelQuestions = /** @class */ (function () {
    function StructuralVariantLevelQuestions() {
        this.variantType = ''; // StructuralVariantType
        /**
         * Variant coordinates
         */
        this.coordinates = new Coordinates_1.Coordinates;
        /**
         * Did you carry out technical confirmation of this variant via an
         * alternative test?
         */
        this.confirmationDecision = ''; // ConfirmationDecision
        /**
         * Did the test confirm that the variant is present?
         */
        this.confirmationOutcome = ''; // ConfirmationOutcome
        /**
         * Did you include the variant in your report to the clinician?
         */
        this.reportingQuestion = ''; // ReportingQuestion 
        /**
         * What ACMG pathogenicity score (1-5) did you assign to this variant?
         */
        this.acmgClassification = ''; // ACMGClassification
        /**
         * Please provide PMIDs for papers which you have used to inform your
         * assessment for this variant, separated by a `;` for multiple papers
         */
        this.publications = '';
    }
    __decorate([
        json2typescript_1.JsonProperty('variantType', String)
    ], StructuralVariantLevelQuestions.prototype, "variantType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('coordinates', VariantCoordinates_1.VariantCoordinates)
    ], StructuralVariantLevelQuestions.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('confirmationDecision', String)
    ], StructuralVariantLevelQuestions.prototype, "confirmationDecision", void 0);
    __decorate([
        json2typescript_1.JsonProperty('confirmationOutcome', String)
    ], StructuralVariantLevelQuestions.prototype, "confirmationOutcome", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportingQuestion', String)
    ], StructuralVariantLevelQuestions.prototype, "reportingQuestion", void 0);
    __decorate([
        json2typescript_1.JsonProperty('acmgClassification', String)
    ], StructuralVariantLevelQuestions.prototype, "acmgClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty('publications', String)
    ], StructuralVariantLevelQuestions.prototype, "publications", void 0);
    StructuralVariantLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], StructuralVariantLevelQuestions);
    return StructuralVariantLevelQuestions;
}());
exports.StructuralVariantLevelQuestions = StructuralVariantLevelQuestions;
;
//# sourceMappingURL=StructuralVariantLevelQuestions.js.map