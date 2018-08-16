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
var File_1 = require("./File");
var OtherFamilyHistory_1 = require("./OtherFamilyHistory");
var participant_1 = require("../participant");
var InterpretationFlag_1 = require("./InterpretationFlag");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var InterpretationRequestsRD = /** @class */ (function (_super) {
    __extends(InterpretationRequestsRD, _super);
    function InterpretationRequestsRD() {
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
         * Pedigree of the family.
         */
        _this.pedigree = new participant_1.Pedigree;
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
        /**
         * Additional information
         */
        _this.additionalInfo = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('versionControl', ReportVersionControl_1.ReportVersionControl)
    ], InterpretationRequestsRD.prototype, "versionControl", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationRequestId', String)
    ], InterpretationRequestsRD.prototype, "interpretationRequestId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationRequestVersion', Number)
    ], InterpretationRequestsRD.prototype, "interpretationRequestVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty('internalStudyId', String)
    ], InterpretationRequestsRD.prototype, "internalStudyId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('genomeAssembly', String)
    ], InterpretationRequestsRD.prototype, "genomeAssembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty('workspace', [String])
    ], InterpretationRequestsRD.prototype, "workspace", void 0);
    __decorate([
        json2typescript_1.JsonProperty('bams', [File_1.File], true)
    ], InterpretationRequestsRD.prototype, "bams", void 0);
    __decorate([
        json2typescript_1.JsonProperty('vcfs', [File_1.File], true)
    ], InterpretationRequestsRD.prototype, "vcfs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('bams', [File_1.File], true)
    ], InterpretationRequestsRD.prototype, "bigWigs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('annotationFile', File_1.File, true)
    ], InterpretationRequestsRD.prototype, "annotationFile", void 0);
    __decorate([
        json2typescript_1.JsonProperty('otherFiles', Object, true)
    ], InterpretationRequestsRD.prototype, "otherFiles", void 0);
    __decorate([
        json2typescript_1.JsonProperty('pedigree', participant_1.Pedigree)
    ], InterpretationRequestsRD.prototype, "pedigree", void 0);
    __decorate([
        json2typescript_1.JsonProperty('otherFamilyHistory', OtherFamilyHistory_1.OtherFamilyHistory, true)
    ], InterpretationRequestsRD.prototype, "otherFamilyHistory", void 0);
    __decorate([
        json2typescript_1.JsonProperty('genePanelsCoverage', Object, true)
    ], InterpretationRequestsRD.prototype, "genePanelsCoverage", void 0);
    __decorate([
        json2typescript_1.JsonProperty('interpretationFlags', [InterpretationFlag_1.InterpretationFlag])
    ], InterpretationRequestsRD.prototype, "interpretationFlags", void 0);
    __decorate([
        json2typescript_1.JsonProperty('genePanelsCoverage', Object, true)
    ], InterpretationRequestsRD.prototype, "additionalInfo", void 0);
    InterpretationRequestsRD = __decorate([
        json2typescript_1.JsonObject
    ], InterpretationRequestsRD);
    return InterpretationRequestsRD;
}(JSONHelper_1.default));
exports.InterpretationRequestsRD = InterpretationRequestsRD;
;
//# sourceMappingURL=InterpretationRequestsRD.js.map