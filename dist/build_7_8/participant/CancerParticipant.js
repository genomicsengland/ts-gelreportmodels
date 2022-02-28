"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancerParticipant = void 0;
var GermlineSample_1 = require("./GermlineSample");
var ConsentStatus_1 = require("./ConsentStatus");
var TumourSample_1 = require("./TumourSample");
var MatchedSamples_1 = require("./MatchedSamples");
var VersionControl_1 = require("./VersionControl");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var Tumour_1 = require("./Tumour");
var PreviousTreatment_1 = require("./PreviousTreatment");
var CancerParticipant = /** @class */ (function (_super) {
    __extends(CancerParticipant, _super);
    function CancerParticipant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yearOfBirth = undefined; // int
        _this.readyForAnalysis = false;
        _this.consentStatus = undefined;
        _this.center = undefined;
        _this.individualId = "";
        _this.primaryDiagnosisDisease = undefined;
        _this.primaryDiagnosisSubDisease = undefined;
        _this.sex = "";
        _this.additionalInformation = undefined;
        _this.assignedICD10 = undefined;
        _this.tumourSamples = undefined;
        _this.germlineSamples = undefined;
        _this.matchedSamples = undefined;
        _this.versionControl = undefined;
        _this.individualUid = undefined;
        _this.tumours = undefined;
        _this.previousTreatment = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("yearOfBirth", Number, true)
    ], CancerParticipant.prototype, "yearOfBirth", void 0);
    __decorate([
        json2typescript_1.JsonProperty("morphology", [String], true)
    ], CancerParticipant.prototype, "morphology", void 0);
    __decorate([
        json2typescript_1.JsonProperty("readyForAnalysis", Boolean)
    ], CancerParticipant.prototype, "readyForAnalysis", void 0);
    __decorate([
        json2typescript_1.JsonProperty("consentStatus", ConsentStatus_1.ConsentStatus, true)
    ], CancerParticipant.prototype, "consentStatus", void 0);
    __decorate([
        json2typescript_1.JsonProperty("center", String, true)
    ], CancerParticipant.prototype, "center", void 0);
    __decorate([
        json2typescript_1.JsonProperty("individualId", String)
    ], CancerParticipant.prototype, "individualId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("primaryDiagnosisDisease", [String], true)
    ], CancerParticipant.prototype, "primaryDiagnosisDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty("primaryDiagnosisSubDisease", [String], true)
    ], CancerParticipant.prototype, "primaryDiagnosisSubDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sex", String)
    ], CancerParticipant.prototype, "sex", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalInformation", Object, true)
    ], CancerParticipant.prototype, "additionalInformation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assignedICD10", [String], true)
    ], CancerParticipant.prototype, "assignedICD10", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourSamples", [TumourSample_1.TumourSample], true)
    ], CancerParticipant.prototype, "tumourSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty("germlineSamples", [GermlineSample_1.GermlineSample], true)
    ], CancerParticipant.prototype, "germlineSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty("matchedSamples", [MatchedSamples_1.MatchedSamples], true)
    ], CancerParticipant.prototype, "matchedSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty("versionControl", VersionControl_1.VersionControl, true)
    ], CancerParticipant.prototype, "versionControl", void 0);
    __decorate([
        json2typescript_1.JsonProperty("individualUid", String, true)
    ], CancerParticipant.prototype, "individualUid", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumours", [Tumour_1.Tumour], true)
    ], CancerParticipant.prototype, "tumours", void 0);
    __decorate([
        json2typescript_1.JsonProperty("previousTreatment", [PreviousTreatment_1.PreviousTreatment], true)
    ], CancerParticipant.prototype, "previousTreatment", void 0);
    CancerParticipant = __decorate([
        json2typescript_1.JsonObject
    ], CancerParticipant);
    return CancerParticipant;
}(JSONHelper_1.default));
exports.CancerParticipant = CancerParticipant;
//# sourceMappingURL=CancerParticipant.js.map