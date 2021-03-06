"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalVariantsQuestions = void 0;
var VariantCoordinates_1 = require("./VariantCoordinates");
var json2typescript_1 = require("json2typescript");
var AdditionalVariantsQuestions = /** @class */ (function () {
    function AdditionalVariantsQuestions() {
        this.typeOfAdditionalFinding = undefined;
        this.findingDescription = undefined;
        /** Variant coordinates */
        this.variantCoordinates = undefined;
        /**
         * Type of potential actionability:
         */
        this.variantActionability = []; // CancerActionability
        this.otherVariantActionability = undefined;
        /**
         * How has/will this potentially actionable variant been/be used?
         */
        this.variantUsability = ""; // CancerUsabilitySomatic
        /**
         * Has this variant been tested by another method (either prior to or
         * following receipt of this WGA)?
         */
        this.variantTested = ""; // CancerTestedAdditional
        /**
         * Please enter validation assay type e.g Pyrosequencing, NGS panel, COBAS,
         * Sanger sequencing. If not applicable enter NA;
         */
        this.validationAssayType = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("typeOfAdditionalFinding", String, true) // TypeOfAdditionalFinding
    ], AdditionalVariantsQuestions.prototype, "typeOfAdditionalFinding", void 0);
    __decorate([
        json2typescript_1.JsonProperty("findingDescription", String, true)
    ], AdditionalVariantsQuestions.prototype, "findingDescription", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantCoordinates", VariantCoordinates_1.VariantCoordinates, true)
    ], AdditionalVariantsQuestions.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantActionability", [String])
    ], AdditionalVariantsQuestions.prototype, "variantActionability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherVariantActionability", String, true)
    ], AdditionalVariantsQuestions.prototype, "otherVariantActionability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantUsability", String)
    ], AdditionalVariantsQuestions.prototype, "variantUsability", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantTested", String)
    ], AdditionalVariantsQuestions.prototype, "variantTested", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validationAssayType", String)
    ], AdditionalVariantsQuestions.prototype, "validationAssayType", void 0);
    AdditionalVariantsQuestions = __decorate([
        json2typescript_1.JsonObject
    ], AdditionalVariantsQuestions);
    return AdditionalVariantsQuestions;
}());
exports.AdditionalVariantsQuestions = AdditionalVariantsQuestions;
//# sourceMappingURL=AdditionalVariantsQuestions.js.map