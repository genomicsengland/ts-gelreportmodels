"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmgEvidence = void 0;
var UserComment_1 = require("./UserComment");
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
        this.category = ""; // AcmgEvidenceCategory
        /**
         * Evidence type: benign or pathogenic
         */
        this.type = ""; // AcmgEvidenceType
        /**
         * Default strength for criterion as defined in Table 3 of ACMG guidelines (Richards et al 2015). e.g. PM2 would be "moderate"
         */
        this.weight = ""; // AcmgEvidenceWeight
        /**
         * The number suffix at the end of the ACMG criteria code e.g PM2 would be 2
         */
        this.modifier = 0;
        /**
         * The strength this criterion has been used at in this interpretation. e.g. if PM2 was only used at "supporting" rather than "moderate", the activation strength would be "supporting"
         */
        this.activationStrength = ""; // ActivationStrength
        /**
         * Description of the evidence
         */
        this.description = undefined;
        /**
         * User comments attached to this ACMG criteria in this case
         */
        this.comments = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("category", String)
    ], AcmgEvidence.prototype, "category", void 0);
    __decorate([
        json2typescript_1.JsonProperty("type", String)
    ], AcmgEvidence.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty("weight", String)
    ], AcmgEvidence.prototype, "weight", void 0);
    __decorate([
        json2typescript_1.JsonProperty("modifier", Number)
    ], AcmgEvidence.prototype, "modifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("activationStrength", String)
    ], AcmgEvidence.prototype, "activationStrength", void 0);
    __decorate([
        json2typescript_1.JsonProperty("description", String, true)
    ], AcmgEvidence.prototype, "description", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [UserComment_1.UserComment], true)
    ], AcmgEvidence.prototype, "comments", void 0);
    AcmgEvidence = __decorate([
        json2typescript_1.JsonObject
    ], AcmgEvidence);
    return AcmgEvidence;
}());
exports.AcmgEvidence = AcmgEvidence;
//# sourceMappingURL=AcmgEvidence.js.map