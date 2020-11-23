"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmpEvidence = void 0;
var json2typescript_1 = require("json2typescript");
/**
 * Evidences as defined in AMP guidelines, they are composed by a evidence type
 * (first column in the evidence table of the guidlines) and a assessment of
 * the evicence, this last one will define the streght of the evidence,
 * supporting the variant to be classified as TierI-IV
 */
var AmpEvidence = /** @class */ (function () {
    function AmpEvidence() {
        /**
         * AMP evidence type according to Guidlines, i.e germline_database_presence
         */
        this.type = ""; // AmpEvidenceType
        /**
         * Assessment for AMP evidence, i.e Present in ClinVar
         */
        this.evidenceAssessment = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("type", String)
    ], AmpEvidence.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty("evidenceAssessment", String)
    ], AmpEvidence.prototype, "evidenceAssessment", void 0);
    AmpEvidence = __decorate([
        json2typescript_1.JsonObject
    ], AmpEvidence);
    return AmpEvidence;
}());
exports.AmpEvidence = AmpEvidence;
//# sourceMappingURL=AmpEvidence.js.map