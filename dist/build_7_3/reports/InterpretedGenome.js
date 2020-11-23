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
exports.InterpretedGenome = void 0;
var SmallVariant_1 = require("./SmallVariant");
var StructuralVariant_1 = require("./StructuralVariant");
var ChromosomalRearrangement_1 = require("./ChromosomalRearrangement");
var ShortTandemRepeat_1 = require("./ShortTandemRepeat");
var ReportVersionControl_1 = require("./ReportVersionControl");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * Define the report used by Genomics England to get the clinical
 * interpretation companies results for bronze level
 */
/**
 * A interpreted genome for the rare disease program. This holds the list
 * of candidate variants reported by an interpretation service together
 * with all the relevant information that identify the case and how these
 * conclusions were reached.
 */
var InterpretedGenome = /** @class */ (function (_super) {
    __extends(InterpretedGenome, _super);
    function InterpretedGenome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Model version number
         */
        _this.versionControl = new ReportVersionControl_1.ReportVersionControl();
        /**
         * Identifier for this interpretation request
         */
        _this.interpretationRequestId = "";
        /**
         * Version for this interpretation request
         */
        _this.interpretationRequestVersion = 0; // type:int
        /**
         * Name of the interpretation service
         */
        _this.interpretationService = "";
        /**
         * URL where the results can be accessed in the company's web interface
         */
        _this.reportUrl = undefined;
        /**
         * List of small reported variants
         */
        _this.variants = undefined;
        /**
         * List of simple structural reported variants (duplications,
         * deletions, insertions, inversions, CNVs)
         */
        _this.structuralVariants = undefined;
        /**
         * List of complex structural reported variants (chomosomal
         * rearrangement)
         */
        _this.chromosomalRearrangements = undefined;
        /**
         * List of short tandem repeat variants
         */
        _this.shortTandemRepeats = undefined;
        /**
         * This map contains the versions of the different databases used in
         * the process, being the database names the keys and the versions the
         * values.
         */
        _this.referenceDatabasesVersions = {};
        /**
         * This map contains the versions of the different software systems
         * used in the process, being the software names the keys and the
         * versions the values.
         */
        _this.softwareVersions = {};
        /**
         * Comments about the report
         */
        _this.comments = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("versionControl", ReportVersionControl_1.ReportVersionControl)
    ], InterpretedGenome.prototype, "versionControl", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interpretationRequestId", String)
    ], InterpretedGenome.prototype, "interpretationRequestId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interpretationRequestVersion", Number)
    ], InterpretedGenome.prototype, "interpretationRequestVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interpretationService", String)
    ], InterpretedGenome.prototype, "interpretationService", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportUrl", String, true)
    ], InterpretedGenome.prototype, "reportUrl", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variants", [SmallVariant_1.SmallVariant], true)
    ], InterpretedGenome.prototype, "variants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("structuralVariants", [StructuralVariant_1.StructuralVariant], true)
    ], InterpretedGenome.prototype, "structuralVariants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chromosomalRearrangements", [ChromosomalRearrangement_1.ChromosomalRearrangement], true)
    ], InterpretedGenome.prototype, "chromosomalRearrangements", void 0);
    __decorate([
        json2typescript_1.JsonProperty("shortTandemRepeats", [ShortTandemRepeat_1.ShortTandemRepeat], true)
    ], InterpretedGenome.prototype, "shortTandemRepeats", void 0);
    __decorate([
        json2typescript_1.JsonProperty("referenceDatabasesVersions", Object)
    ], InterpretedGenome.prototype, "referenceDatabasesVersions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("softwareVersions", Object)
    ], InterpretedGenome.prototype, "softwareVersions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [String], true)
    ], InterpretedGenome.prototype, "comments", void 0);
    InterpretedGenome = __decorate([
        json2typescript_1.JsonObject
    ], InterpretedGenome);
    return InterpretedGenome;
}(JSONHelper_1.default));
exports.InterpretedGenome = InterpretedGenome;
//# sourceMappingURL=InterpretedGenome.js.map