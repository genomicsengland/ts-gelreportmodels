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
exports.ReportEvent = void 0;
var Phenotypes_1 = require("./Phenotypes");
var VariantConsequence_1 = require("./VariantConsequence");
var GenePanel_1 = require("./GenePanel");
var GenomicEntity_1 = require("./GenomicEntity");
var Actions_1 = require("./Actions");
var VariantClassification_1 = require("./VariantClassification");
var GuidelineBasedVariantClassification_1 = require("./GuidelineBasedVariantClassification");
var AlgorithmBasedVariantClassification_1 = require("./AlgorithmBasedVariantClassification");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var ReportEvent = /** @class */ (function (_super) {
    __extends(ReportEvent, _super);
    function ReportEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Unique identifier for each report event, this is unique across the whole
         * report. A report having more than one report event with the same
         * identifier is invalid. Repeating report event identifiers between
         * different reports is valid. The uniqueness of this field will be checked
         * in report validation
         */
        _this.reportEventId = "";
        /** The list of phenotypes */
        _this.phenotypes = new Phenotypes_1.Phenotypes();
        /**
         * Sequence Ontology terms for relevant consequence types for this report
         * event
         */
        _this.variantConsequences = [];
        /** The panel of genes to which this report corresponds */
        _this.genePanel = undefined;
        /** Mode of inheritance used to analyse the family */
        _this.modeOfInheritance = ""; // ModeOfInheritance
        /**
         * The list of genomic features of interest for this report event. Please
         * note that one variant can overlap more that one gene/transcript. If more
         * than one gene/transcript is considered interesting for this particular
         * variant, should be reported in two different ReportEvents
         */
        _this.genomicEntities = [];
        /**
         * Segregation pattern if any calculated using the genotypes information of
         * a family
         */
        _this.segregationPattern = undefined; // SegregationPattern
        /**
         * This is the penetrance assumed for scoring or classifying this variant
         */
        _this.penetrance = undefined; // Penetrance
        /**
         * Likelihood of being a de novo variant
         */
        _this.deNovoQualityScore = undefined;
        /**
         * Flag to indicate if this variant using this mode of inheritance can
         * fully explain the phenotype
         */
        _this.fullyExplainsPhenotype = undefined;
        /**
         * This value groups variants that together could explain the phenotype
         * according to the mode of inheritance used. (e.g.: compound
         * heterozygous). All the variants in the same report sharing the same
         * value will be considered in the same group (i.e.: reported together).
         * This value is an integer unique in the whole report. These values are
         * only relevant within the same report.
         */
        _this.groupOfVariants = undefined;
        /**
         * This is the description of why this variant would be reported, for
         * example that it affects the protein in this way and that this gene has
         * been implicated in this disorder in these publications. Publications
         * should be provided as PMIDs using the format [PMID:8075643]. Other
         * sources can be used in the same manner, e.g. [OMIM:163500]. Brackets
         * need to be included.
         */
        _this.eventJustification = undefined;
        /** The role of this variant in cancer if any */
        _this.roleInCancer = undefined; // RoleInCancer
        /** Actions can be taken on the variant if any */
        _this.actions = undefined;
        /**
         * This is the score provided to reflect a variant's likelihood of
         * explaining the phenotype using a specific mode of Inheritance. This may
         * be the result of different scoring systems
         */
        _this.score = undefined;
        /**
         * Other scores that the interpretation provider may add (for example
         * phenotypically informed or family informed scores)
         */
        _this.vendorSpecificScores = undefined;
        /** Variant classification */
        _this.variantClassification = undefined;
        /** Guidelines based Variant classification */
        _this.guidelineBasedVariantClassification = undefined;
        /** Algorithm based variant classifications */
        _this.algorithmBasedVariantClassifications = undefined;
        /**
         * The tier where this variant has been classified. Tier is a property of
         * the model of inheritance and therefore is subject to change depending on
         * the inheritance assumptions
         */
        _this.tier = undefined; // Tier
        /** The Domain where this variant has been classified. */
        _this.domain = undefined; // Domain
        /** attributes below are not in GelReportModels but are required for CVA frontend */
        _this.author = undefined;
        _this.interpretationService = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("reportEventId", String)
    ], ReportEvent.prototype, "reportEventId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("phenotypes", Phenotypes_1.Phenotypes)
    ], ReportEvent.prototype, "phenotypes", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantConsequences", [VariantConsequence_1.VariantConsequence])
    ], ReportEvent.prototype, "variantConsequences", void 0);
    __decorate([
        json2typescript_1.JsonProperty("genePanel", GenePanel_1.GenePanel, true)
    ], ReportEvent.prototype, "genePanel", void 0);
    __decorate([
        json2typescript_1.JsonProperty("modeOfInheritance", String)
    ], ReportEvent.prototype, "modeOfInheritance", void 0);
    __decorate([
        json2typescript_1.JsonProperty("genomicEntities", [GenomicEntity_1.GenomicEntity])
    ], ReportEvent.prototype, "genomicEntities", void 0);
    __decorate([
        json2typescript_1.JsonProperty("segregationPattern", String, true)
    ], ReportEvent.prototype, "segregationPattern", void 0);
    __decorate([
        json2typescript_1.JsonProperty("penetrance", String, true)
    ], ReportEvent.prototype, "penetrance", void 0);
    __decorate([
        json2typescript_1.JsonProperty("deNovoQualityScore", Number, true)
    ], ReportEvent.prototype, "deNovoQualityScore", void 0);
    __decorate([
        json2typescript_1.JsonProperty("fullyExplainsPhenotype", Boolean, true)
    ], ReportEvent.prototype, "fullyExplainsPhenotype", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groupOfVariants", Number, true)
    ], ReportEvent.prototype, "groupOfVariants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("eventJustification", String, true)
    ], ReportEvent.prototype, "eventJustification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("roleInCancer", [String], true)
    ], ReportEvent.prototype, "roleInCancer", void 0);
    __decorate([
        json2typescript_1.JsonProperty("actions", Actions_1.Actions, true)
    ], ReportEvent.prototype, "actions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("score", Number, true)
    ], ReportEvent.prototype, "score", void 0);
    __decorate([
        json2typescript_1.JsonProperty("vendorSpecificScores", Object, true)
    ], ReportEvent.prototype, "vendorSpecificScores", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantClassification", VariantClassification_1.VariantClassification, true)
    ], ReportEvent.prototype, "variantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("guidelineBasedVariantClassification", GuidelineBasedVariantClassification_1.GuidelineBasedVariantClassification, true)
    ], ReportEvent.prototype, "guidelineBasedVariantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("algorithmBasedVariantClassifications", [AlgorithmBasedVariantClassification_1.AlgorithmBasedVariantClassification], true)
    ], ReportEvent.prototype, "algorithmBasedVariantClassifications", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tier", String, true)
    ], ReportEvent.prototype, "tier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("domain", String, true)
    ], ReportEvent.prototype, "domain", void 0);
    __decorate([
        json2typescript_1.JsonProperty("author", String, true)
    ], ReportEvent.prototype, "author", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interpretationService", String, true)
    ], ReportEvent.prototype, "interpretationService", void 0);
    ReportEvent = __decorate([
        json2typescript_1.JsonObject
    ], ReportEvent);
    return ReportEvent;
}(JSONHelper_1.default));
exports.ReportEvent = ReportEvent;
//# sourceMappingURL=ReportEvent.js.map