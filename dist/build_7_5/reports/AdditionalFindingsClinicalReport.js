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
var SmallVariant_1 = require("./SmallVariant");
var StructuralVariant_1 = require("./StructuralVariant");
var ChromosomalRearrangement_1 = require("./ChromosomalRearrangement");
var ShortTandemRepeat_1 = require("./ShortTandemRepeat");
var AdditionalAnalysisPanel_1 = require("./AdditionalAnalysisPanel");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * A clinical report. This holds the list of reported variants by an expert
 * together with all the relevant information that identify the case and how
 * these conclusions were reached.
 */
var AdditionalFindingsClinicalReport = /** @class */ (function (_super) {
    __extends(AdditionalFindingsClinicalReport, _super);
    function AdditionalFindingsClinicalReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * This is the participantId identifier (i.e.: first number in
         * XXX-123-1)
         */
        _this.participantId = "";
        /** Date of this report in format YYYY-MM-DD */
        _this.reportingDate = "";
        /** Author of this report */
        _this.user = "";
        /**
         * List of small reported variants
         */
        _this.variants = undefined;
        /**
         * List of simple structural reported variants (duplications, deletions,
         * insertions, inversions, CNVs)
         */
        _this.structuralVariants = undefined;
        /**
         * List of complex structural reported variants (chomosomal rearrangement)
         */
        _this.chromosomalRearrangements = undefined;
        /**
         * List of short tandem repeat variants
         */
        _this.shortTandemRepeats = undefined;
        /**
         * Summary of the interpretation, this should reflect the positive
         * conclusions of this interpretation
         */
        _this.genomicInterpretation = "";
        /**
         * The list of panels analysed to generate this report
         */
        _this.additionalAnalysisPanels = undefined;
        /**
         * Supporting evidence (pubmed identifiers)
         */
        _this.references = undefined;
        /**
         * This map contains the versions of the different databases used in the
         * process, being the database names the keys and the versions the values.
         */
        _this.referenceDatabasesVersions = {};
        /**
         * This map contains the versions of the different software systems used in
         * the process, being the software names the keys and the versions the
         * values.
         */
        _this.softwareVersions = {};
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("participantId", String)
    ], AdditionalFindingsClinicalReport.prototype, "participantId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportingDate", String)
    ], AdditionalFindingsClinicalReport.prototype, "reportingDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("user", String)
    ], AdditionalFindingsClinicalReport.prototype, "user", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variants", [SmallVariant_1.SmallVariant], true)
    ], AdditionalFindingsClinicalReport.prototype, "variants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("structuralVariants", [StructuralVariant_1.StructuralVariant], true)
    ], AdditionalFindingsClinicalReport.prototype, "structuralVariants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chromosomalRearrangements", [ChromosomalRearrangement_1.ChromosomalRearrangement], true)
    ], AdditionalFindingsClinicalReport.prototype, "chromosomalRearrangements", void 0);
    __decorate([
        json2typescript_1.JsonProperty("shortTandemRepeats", [ShortTandemRepeat_1.ShortTandemRepeat], true)
    ], AdditionalFindingsClinicalReport.prototype, "shortTandemRepeats", void 0);
    __decorate([
        json2typescript_1.JsonProperty("genomicInterpretation", String)
    ], AdditionalFindingsClinicalReport.prototype, "genomicInterpretation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalAnalysisPanels", [AdditionalAnalysisPanel_1.AdditionalAnalysisPanel], true)
    ], AdditionalFindingsClinicalReport.prototype, "additionalAnalysisPanels", void 0);
    __decorate([
        json2typescript_1.JsonProperty("references", [String], true)
    ], AdditionalFindingsClinicalReport.prototype, "references", void 0);
    __decorate([
        json2typescript_1.JsonProperty("referenceDatabasesVersions", Object)
    ], AdditionalFindingsClinicalReport.prototype, "referenceDatabasesVersions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("softwareVersions", Object)
    ], AdditionalFindingsClinicalReport.prototype, "softwareVersions", void 0);
    AdditionalFindingsClinicalReport = __decorate([
        json2typescript_1.JsonObject
    ], AdditionalFindingsClinicalReport);
    return AdditionalFindingsClinicalReport;
}(JSONHelper_1.default));
exports.AdditionalFindingsClinicalReport = AdditionalFindingsClinicalReport;
//# sourceMappingURL=AdditionalFindingsClinicalReport.js.map