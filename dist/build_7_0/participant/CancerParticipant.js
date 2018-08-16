"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GermlineSample_1 = require("./GermlineSample");
var ConsentStatus_1 = require("./ConsentStatus");
var TumourSample_1 = require("./TumourSample");
var MatchedSamples_1 = require("./MatchedSamples");
var VersionControl_1 = require("./VersionControl");
var json2typescript_1 = require("json2typescript");
var CancerParticipant = /** @class */ (function () {
    function CancerParticipant() {
        this.yearOfBirth = undefined; // int
        this.readyForAnalysis = false;
        this.consentStatus = undefined;
        this.center = undefined;
        this.individualId = '';
        this.primaryDiagnosisDisease = undefined;
        this.primaryDiagnosisSubDisease = undefined;
        this.additionalInformation = undefined;
        this.assignedICD10 = undefined;
        this.tumourSamples = [];
        this.germlineSamples = [];
        this.matchedSamples = [];
        this.versionControl = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('yearOfBirth', Number, true)
    ], CancerParticipant.prototype, "yearOfBirth", void 0);
    __decorate([
        json2typescript_1.JsonProperty('morphology', [String], true)
    ], CancerParticipant.prototype, "morphology", void 0);
    __decorate([
        json2typescript_1.JsonProperty('readyForAnalysis', Boolean)
    ], CancerParticipant.prototype, "readyForAnalysis", void 0);
    __decorate([
        json2typescript_1.JsonProperty('consentStatus', ConsentStatus_1.ConsentStatus, true)
    ], CancerParticipant.prototype, "consentStatus", void 0);
    __decorate([
        json2typescript_1.JsonProperty('center', String, true)
    ], CancerParticipant.prototype, "center", void 0);
    __decorate([
        json2typescript_1.JsonProperty('individualId', String)
    ], CancerParticipant.prototype, "individualId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('primaryDiagnosisDisease', [String], true)
    ], CancerParticipant.prototype, "primaryDiagnosisDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty('primaryDiagnosisSubDisease', [String], true)
    ], CancerParticipant.prototype, "primaryDiagnosisSubDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty('additionalInformation', Object, true)
    ], CancerParticipant.prototype, "additionalInformation", void 0);
    __decorate([
        json2typescript_1.JsonProperty('assignedICD10', [String], true)
    ], CancerParticipant.prototype, "assignedICD10", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourSamples', [TumourSample_1.TumourSample], true)
    ], CancerParticipant.prototype, "tumourSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty('germlineSamples', [GermlineSample_1.GermlineSample])
    ], CancerParticipant.prototype, "germlineSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty('matchedSamples', [MatchedSamples_1.MatchedSamples])
    ], CancerParticipant.prototype, "matchedSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty('versionControl', VersionControl_1.VersionControl, true)
    ], CancerParticipant.prototype, "versionControl", void 0);
    CancerParticipant = __decorate([
        json2typescript_1.JsonObject
    ], CancerParticipant);
    return CancerParticipant;
}());
exports.CancerParticipant = CancerParticipant;
;
//# sourceMappingURL=CancerParticipant.js.map