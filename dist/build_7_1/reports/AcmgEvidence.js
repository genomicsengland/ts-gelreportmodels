"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
/**
 * AcmgEvidence. This should be buit for each one of the evidences assing to a
 * variants following the ACMG guidelines. An AcmgEvidence, should map with
 * one of the criteria defined, i.e, PVS1, BA1, PM1...
 */
var AcmgEvidence = /** @class */ (function () {
    function AcmgEvidence() {
        /**
         * Evidence category as defined in ACMG guidelines
         */
        this.category = ''; // AcmgEvidenceCategory
        /**
         * Evidence type: bening or pathogenic
         */
        this.type = ''; // AcmgEvidenceType
        /**
         * Weight categories as described in ACMG guideline
         */
        this.weight = ''; // AcmgEvidenceWeight
        /**
         * modifier of the strength, together define each creteria, i.e the 2 in PM2
         */
        this.modifier = 0;
        /**
         * Description of the evidence
         */
        this.description = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('category', String)
    ], AcmgEvidence.prototype, "category", void 0);
    __decorate([
        json2typescript_1.JsonProperty('type', String)
    ], AcmgEvidence.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty('weight', String)
    ], AcmgEvidence.prototype, "weight", void 0);
    __decorate([
        json2typescript_1.JsonProperty('modifier', String)
    ], AcmgEvidence.prototype, "modifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty('description', String, true)
    ], AcmgEvidence.prototype, "description", void 0);
    AcmgEvidence = __decorate([
        json2typescript_1.JsonObject
    ], AcmgEvidence);
    return AcmgEvidence;
}());
exports.AcmgEvidence = AcmgEvidence;
;
//# sourceMappingURL=AcmgEvidence.js.map