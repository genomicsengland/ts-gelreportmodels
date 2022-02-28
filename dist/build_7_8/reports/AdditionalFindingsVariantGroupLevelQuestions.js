"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalFindingsVariantGroupLevelQuestions = void 0;
var VariantLevelQuestions_1 = require("./VariantLevelQuestions");
var json2typescript_1 = require("json2typescript");
var ShortTandemRepeatLevelQuestions_1 = require("./ShortTandemRepeatLevelQuestions");
var StructuralVariantLevelQuestions_1 = require("./StructuralVariantLevelQuestions");
/**
 * The variant group level questions
 */
var AdditionalFindingsVariantGroupLevelQuestions = /** @class */ (function () {
    function AdditionalFindingsVariantGroupLevelQuestions() {
        /**
         * This value groups variants that together could explain the phenotype
         * according to the mode of inheritance used. (e.g.: compound
         * heterozygous). All the variants in the same report sharing the same
         * value will be considered in the same group (i.e.: reported together).
         * This value is an integer unique in the whole report. These values are
         * only relevant within the same report.
         */
        this.variantGroup = 0; // int
        /**
         * The variant level questions for each of the variants in the group
         */
        this.variantLevelQuestions = undefined;
        /**
           STR level questions for each of the variants in the group
           */
        this.shortTandemRepeatLevelQuestions = undefined;
        /**
           Structural level questions for each of the variants in the group
           */
        this.structuralVariantLevelQuestions = undefined;
        /**
         * Does this patient have a positive family history relevant to this condition?
         */
        this.familyHistoryCondition = "";
        /**
         Was this variant previously known to be present in this patient/family?
         */
        /**
              In patient:
             */
        this.familyHistoryPatient = "";
        /**
             In family:
             */
        this.familyHistoryFamily = "";
        /**
         * Has the clinical team identified any changes to clinical care which
         * could potentially arise as a result of this variant/variant pair?
         */
        this.clinicalUtility = []; // ClinicalUtility
    }
    __decorate([
        json2typescript_1.JsonProperty("variantGroup", Number)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "variantGroup", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantLevelQuestions", [VariantLevelQuestions_1.VariantLevelQuestions], true)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "variantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("shortTandemRepeatLevelQuestions", [ShortTandemRepeatLevelQuestions_1.ShortTandemRepeatLevelQuestions], true)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "shortTandemRepeatLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("structuralVariantLevelQuestions", [StructuralVariantLevelQuestions_1.StructuralVariantLevelQuestions], true)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "structuralVariantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("familyHistoryCondition", String)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "familyHistoryCondition", void 0);
    __decorate([
        json2typescript_1.JsonProperty("familyHistoryPatient", String)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "familyHistoryPatient", void 0);
    __decorate([
        json2typescript_1.JsonProperty("familyHistoryFamily", String)
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "familyHistoryFamily", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalUtility", [String])
    ], AdditionalFindingsVariantGroupLevelQuestions.prototype, "clinicalUtility", void 0);
    AdditionalFindingsVariantGroupLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], AdditionalFindingsVariantGroupLevelQuestions);
    return AdditionalFindingsVariantGroupLevelQuestions;
}());
exports.AdditionalFindingsVariantGroupLevelQuestions = AdditionalFindingsVariantGroupLevelQuestions;
//# sourceMappingURL=AdditionalFindingsVariantGroupLevelQuestions.js.map