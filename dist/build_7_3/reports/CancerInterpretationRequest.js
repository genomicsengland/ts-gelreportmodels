"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var ReportVersionControl_1 = require("./ReportVersionControl");
var CancerParticipant_1 = require("../participant/CancerParticipant");
var OtherFamilyHistory_1 = require("./OtherFamilyHistory");
var InterpretationFlag_1 = require("./InterpretationFlag");
var File_1 = require("./File");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * This record represents basic information for this report
 */
var CancerInterpretationRequest = /** @class */ (function (_super) {
    __extends(CancerInterpretationRequest, _super);
    function CancerInterpretationRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Model version number
         */
        _this.versionControl = new ReportVersionControl_1.ReportVersionControl;
        /**
         * Identifier for this interpretation request
         */
        _this.interpretationRequestId = '';
        /**
         * Version for this interpretation request
         */
        _this.interpretationRequestVersion = 0; // type:int
        /**
         * Internal study identifier
         */
        _this.internalStudyId = '';
        /**
         * This is the version of the assembly used to align the reads
         */
        _this.genomeAssembly = ''; // Assembly
        /**
         * The genome shall be assigned to the workspaces(projects or domains
         * with a predefined set of users) to control user access
         */
        _this.workspace = [];
        /**
         * BAMs Files
         */
        _this.bams = undefined;
        /**
         * VCFs Files where SVs and CNVs are represented
         */
        _this.vcfs = undefined;
        /**
         * BigWig Files
         */
        _this.bigWigs = undefined;
        /**
         * Variant Annotation File
         */
        _this.annotationFile = undefined;
        /**
         * Other files that may be vendor specific
         * map of key: type of file, value: record of type File
         */
        _this.otherFiles = undefined;
        /**
         * Cancer Particiapnt Data.
         */
        _this.cancerParticipant = undefined;
        /**
         * It is paternal or maternal with reference to the participant.
         */
        _this.otherFamilyHistory = undefined;
        /**
         * This map of key: panel_name, value: (map of key: gene, value: (map
         * of metrics of key: metric name, value: float))
         * That is: a map of tables of genes and metrics
         */
        _this.genePanelsCoverage = undefined;
        /**
         * Flags about this case relevant for interpretation
         */
        _this.interpretationFlags = [];
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('versionControl', ReportVersionControl_1.ReportVersionControl)
    ], CancerInterpretationRequest.prototype, "versionControl", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationRequestId', String)
    ], CancerInterpretationRequest.prototype, "interpretationRequestId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationRequestVersion', Number)
    ], CancerInterpretationRequest.prototype, "interpretationRequestVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty('internalStudyId', String)
    ], CancerInterpretationRequest.prototype, "internalStudyId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('genomeAssembly', String)
    ], CancerInterpretationRequest.prototype, "genomeAssembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty('workspace', [String])
    ], CancerInterpretationRequest.prototype, "workspace", void 0);
    __decorate([
        json2typescript_1.JsonProperty('bams', [File_1.File], true)
    ], CancerInterpretationRequest.prototype, "bams", void 0);
    __decorate([
        json2typescript_1.JsonProperty('vcfs', [File_1.File], true)
    ], CancerInterpretationRequest.prototype, "vcfs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('bigWigs', [File_1.File], true)
    ], CancerInterpretationRequest.prototype, "bigWigs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('annotationFile', File_1.File, true)
    ], CancerInterpretationRequest.prototype, "annotationFile", void 0);
    __decorate([
        json2typescript_1.JsonProperty('otherFiles', Object, true)
    ], CancerInterpretationRequest.prototype, "otherFiles", void 0);
    __decorate([
        json2typescript_1.JsonProperty('cancerParticipant', CancerParticipant_1.CancerParticipant, true)
    ], CancerInterpretationRequest.prototype, "cancerParticipant", void 0);
    __decorate([
        json2typescript_1.JsonProperty('otherFamilyHistory', OtherFamilyHistory_1.OtherFamilyHistory, true)
    ], CancerInterpretationRequest.prototype, "otherFamilyHistory", void 0);
    __decorate([
        json2typescript_1.JsonProperty('genePanelsCoverage', Object, true)
    ], CancerInterpretationRequest.prototype, "genePanelsCoverage", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationFlags', [InterpretationFlag_1.InterpretationFlag], true)
    ], CancerInterpretationRequest.prototype, "interpretationFlags", void 0);
    __decorate([
        json2typescript_1.JsonProperty('additionalInfo', Object, true)
    ], CancerInterpretationRequest.prototype, "additionalInfo", void 0);
    CancerInterpretationRequest = __decorate([
        json2typescript_1.JsonObject
    ], CancerInterpretationRequest);
    return CancerInterpretationRequest;
}(JSONHelper_1.default));
exports.CancerInterpretationRequest = CancerInterpretationRequest;
;
//# sourceMappingURL=CancerInterpretationRequest.js.map