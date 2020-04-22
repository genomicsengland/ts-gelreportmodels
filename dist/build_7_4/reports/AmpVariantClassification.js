"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var AmpClincialOrExperimentalEvidence_1 = require("./AmpClincialOrExperimentalEvidence");
var AmpEvidence_1 = require("./AmpEvidence");
/**
 * Full Variant classification acording to AMP guideline, including all
 * supporting evidences and the final assessment
 */
var AmpVariantClassification = /** @class */ (function () {
    function AmpVariantClassification() {
        /** List of AMP evidences */
        this.ampEvidences = [];
        /** Final Clasification taken in account the evidences */
        this.ampTier = ""; // AmpTier
        /** Clinical or Experimental evicence */
        this.ampClincialOrExperimentalEvidence = [];
        /** Final Assessment */
        this.assessment = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("ampEvidences", [AmpEvidence_1.AmpEvidence])
    ], AmpVariantClassification.prototype, "ampEvidences", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampTier", String)
    ], AmpVariantClassification.prototype, "ampTier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampClincialOrExperimentalEvidence", [
            AmpClincialOrExperimentalEvidence_1.AmpClincialOrExperimentalEvidence
        ])
    ], AmpVariantClassification.prototype, "ampClincialOrExperimentalEvidence", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assessment", String, true)
    ], AmpVariantClassification.prototype, "assessment", void 0);
    AmpVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], AmpVariantClassification);
    return AmpVariantClassification;
}());
exports.AmpVariantClassification = AmpVariantClassification;
//# sourceMappingURL=AmpVariantClassification.js.map