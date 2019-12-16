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
/**
 * The questions for the cancer program exit questionnaire for somatic variants
 */
var CancerSomaticVariantLevelQuestions = /** @class */ (function () {
    function CancerSomaticVariantLevelQuestions() {
        /**
         * Variant coordinates
         */
        this.variantCoordinates = new VariantCoordinates_1.VariantCoordinates();
        /**
         * Type of potential actionability
         */
        this.variantActionability = []; // CancerActionabilitySomatic
        /**
         * Other information about variant actionability
         */
        this.otherVariantActionability = undefined;
        /**
         * How has/will this potentially actionable variant been/be used?
         */
        this.variantUsability = ""; // CancerUsabilitySomatic
        /**
         * Has this variant been tested by another method (either prior to or
         * following receipt of this WGA)?
         */
        this.variantTested = ""; // CancerTested
        /**
         * Please enter validation assay type e.g Pyrosequencing, NGS panel, COBAS,
         * Sanger sequencing. If not applicable enter NA;
         */
        this.validationAssayType = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("variantCoordinates", VariantCoordinates_1.VariantCoordinates)
    ], CancerSomaticVariantLevelQuestions.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantActionability", [String])
    ], CancerSomaticVariantLevelQuestions.prototype, "variantActionability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherVariantActionability", String, true)
    ], CancerSomaticVariantLevelQuestions.prototype, "otherVariantActionability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantUsability", String)
    ], CancerSomaticVariantLevelQuestions.prototype, "variantUsability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantTested", String)
    ], CancerSomaticVariantLevelQuestions.prototype, "variantTested", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validationAssayType", String)
    ], CancerSomaticVariantLevelQuestions.prototype, "validationAssayType", void 0);
    CancerSomaticVariantLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], CancerSomaticVariantLevelQuestions);
    return CancerSomaticVariantLevelQuestions;
}());
exports.CancerSomaticVariantLevelQuestions = CancerSomaticVariantLevelQuestions;
//# sourceMappingURL=CancerSomaticVariantLevelQuestions.js.map