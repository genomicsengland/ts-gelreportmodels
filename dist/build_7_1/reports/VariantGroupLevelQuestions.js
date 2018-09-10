"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VariantLevelQuestions_1 = require("./VariantLevelQuestions");
var json2typescript_1 = require("json2typescript");
/**
 * The variant group level questions
 */
var VariantGroupLevelQuestions = /** @class */ (function () {
    function VariantGroupLevelQuestions() {
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
        this.variantLevelQuestions = [];
        /**
         * Is evidence for this variant/variant pair sufficient to use it for
         * clinical purposes such as prenatal diagnosis or predictive testing?
         */
        this.actionability = ''; // Actionability
        /**
         * Has the clinical team identified any changes to clinical care which
         * could potentially arise as a result of this variant/variant pair?
         */
        this.clinicalUtility = []; // ClinicalUtility
        /**
         * Did you report the variant(s) as being partially or completely causative
         * of the family's presenting phenotype(s)?
         */
        this.phenotypesSolved = ''; // PhenotypesSolved
        /**
         * If you indicated that the variant(s) only partially explained the
         * family’s presenting phenotypes, please indicate which HPO terms you are
         * confident that they DO explain
         */
        this.phenotypesExplained = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('variantGroup', Number)
    ], VariantGroupLevelQuestions.prototype, "variantGroup", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantLevelQuestions', [VariantLevelQuestions_1.VariantLevelQuestions])
    ], VariantGroupLevelQuestions.prototype, "variantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty('actionability', String)
    ], VariantGroupLevelQuestions.prototype, "actionability", void 0);
    __decorate([
        json2typescript_1.JsonProperty('clinicalUtility', [String])
    ], VariantGroupLevelQuestions.prototype, "clinicalUtility", void 0);
    __decorate([
        json2typescript_1.JsonProperty('phenotypesSolved', String)
    ], VariantGroupLevelQuestions.prototype, "phenotypesSolved", void 0);
    __decorate([
        json2typescript_1.JsonProperty('phenotypesExplained', [String], true)
    ], VariantGroupLevelQuestions.prototype, "phenotypesExplained", void 0);
    VariantGroupLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], VariantGroupLevelQuestions);
    return VariantGroupLevelQuestions;
}());
exports.VariantGroupLevelQuestions = VariantGroupLevelQuestions;
;
//# sourceMappingURL=VariantGroupLevelQuestions.js.map