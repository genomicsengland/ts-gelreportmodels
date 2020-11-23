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
exports.ReferralTest = void 0;
var json2typescript_1 = require("json2typescript");
var Date_1 = require("./Date");
var ClinicalIndicationTest_1 = require("./ClinicalIndicationTest");
var TumourSample_1 = require("./TumourSample");
var GermlineSample_1 = require("./GermlineSample");
var AnalysisPanel_1 = require("./AnalysisPanel");
var Organisation_1 = require("./Organisation");
var DiseasePenetrance_1 = require("./DiseasePenetrance");
var MatchedSamples_1 = require("./MatchedSamples");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var ReferralTest = /** @class */ (function (_super) {
    __extends(ReferralTest, _super);
    function ReferralTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.referralTestId = "";
        _this.referralTestOrderingDate = new Date_1.Date();
        _this.clinicalIndicationTest = new ClinicalIndicationTest_1.ClinicalIndicationTest();
        _this.tumourSamples = undefined;
        _this.germlineSamples = undefined;
        _this.analysisPanels = undefined;
        _this.interpreter = new Organisation_1.Organisation();
        _this.processingLab = new Organisation_1.Organisation();
        _this.priority = "";
        _this.pipelineStartDate = new Date_1.Date();
        _this.pipelineStadiseasePenetrancesrtDate = undefined;
        _this.matchedSamples = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("referralTestId", String)
    ], ReferralTest.prototype, "referralTestId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("referralTestOrderingDate", Date_1.Date, true)
    ], ReferralTest.prototype, "referralTestOrderingDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalIndicationTest", ClinicalIndicationTest_1.ClinicalIndicationTest)
    ], ReferralTest.prototype, "clinicalIndicationTest", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourSamples", [TumourSample_1.TumourSample], true)
    ], ReferralTest.prototype, "tumourSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty("germlineSamples", [GermlineSample_1.GermlineSample], true)
    ], ReferralTest.prototype, "germlineSamples", void 0);
    __decorate([
        json2typescript_1.JsonProperty("analysisPanels", [AnalysisPanel_1.AnalysisPanel], true)
    ], ReferralTest.prototype, "analysisPanels", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interpreter", Organisation_1.Organisation)
    ], ReferralTest.prototype, "interpreter", void 0);
    __decorate([
        json2typescript_1.JsonProperty("processingLab", Organisation_1.Organisation)
    ], ReferralTest.prototype, "processingLab", void 0);
    __decorate([
        json2typescript_1.JsonProperty("priority", String)
    ], ReferralTest.prototype, "priority", void 0);
    __decorate([
        json2typescript_1.JsonProperty("pipelineStartDate", Date_1.Date, true)
    ], ReferralTest.prototype, "pipelineStartDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("diseasePenetrances", [DiseasePenetrance_1.DiseasePenetrance], true)
    ], ReferralTest.prototype, "pipelineStadiseasePenetrancesrtDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("matchedSamples", [MatchedSamples_1.MatchedSamples], true)
    ], ReferralTest.prototype, "matchedSamples", void 0);
    ReferralTest = __decorate([
        json2typescript_1.JsonObject
    ], ReferralTest);
    return ReferralTest;
}(JSONHelper_1.default));
exports.ReferralTest = ReferralTest;
//# sourceMappingURL=ReferralTest.js.map