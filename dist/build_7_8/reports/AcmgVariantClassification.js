"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmgVariantClassification = void 0;
var AcmgEvidence_1 = require("./AcmgEvidence");
var json2typescript_1 = require("json2typescript");
/**
 * Full record for the ACMG variant classification, including all selected
 * evidences and the final classification.
 */
var AcmgVariantClassification = /** @class */ (function () {
    function AcmgVariantClassification() {
        /**
         * Details of ACMG criteria used to score this variant
         */
        this.acmgEvidences = [];
        /**
         * Final classification selected by user
         */
        this.clinicalSignificance = ""; // ClinicalSignificance
        /**
         * Classification computed from ACMG scores
         */
        this.assesment = undefined;
        /**
         * ACMG evidence categories for which the user has indicated there is no evidence available
         */
        this.noAcmgEvidence = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("acmgEvidences", [AcmgEvidence_1.AcmgEvidence])
    ], AcmgVariantClassification.prototype, "acmgEvidences", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalSignificance", String)
    ], AcmgVariantClassification.prototype, "clinicalSignificance", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assesment", String, true)
    ], AcmgVariantClassification.prototype, "assesment", void 0);
    __decorate([
        json2typescript_1.JsonProperty("noAcmgEvidence", Array, true)
    ], AcmgVariantClassification.prototype, "noAcmgEvidence", void 0);
    AcmgVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], AcmgVariantClassification);
    return AcmgVariantClassification;
}());
exports.AcmgVariantClassification = AcmgVariantClassification;
//# sourceMappingURL=AcmgVariantClassification.js.map