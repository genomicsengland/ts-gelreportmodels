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
var VersionControl_1 = require("./VersionControl");
var DiseasePenetrance_1 = require("./DiseasePenetrance");
var AnalysisPanel_1 = require("./AnalysisPanel");
var PedigreeMember_1 = require("./PedigreeMember");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
var Pedigree = /** @class */ (function (_super) {
    __extends(Pedigree, _super);
    function Pedigree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Model version number
         */
        _this.versionControl = undefined;
        /**
         * Family identifier which internally translate to a sample set
         */
        _this.familyId = '';
        /**
         * List of members of a pedigree
         */
        _this.members = [];
        /**
         * List of panels
         */
        _this.analysisPanels = undefined;
        /**
         * List of disease penetrances
         */
        _this.diseasePenetrances = undefined;
        /**
         * Flag indicating if a pedigree is ready for analysis
         */
        _this.readyForAnalysis = false;
        /**
         * The famili quality control status
         */
        _this.familyQCState = undefined; // FamilyQCState
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('versionControl', VersionControl_1.VersionControl, true)
    ], Pedigree.prototype, "versionControl", void 0);
    __decorate([
        json2typescript_1.JsonProperty('LDPCode', String, true)
    ], Pedigree.prototype, "LDPCode", void 0);
    __decorate([
        json2typescript_1.JsonProperty('familyId', String)
    ], Pedigree.prototype, "familyId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('members', [PedigreeMember_1.PedigreeMember])
    ], Pedigree.prototype, "members", void 0);
    __decorate([
        json2typescript_1.JsonProperty('analysisPanels', [AnalysisPanel_1.AnalysisPanel], true)
    ], Pedigree.prototype, "analysisPanels", void 0);
    __decorate([
        json2typescript_1.JsonProperty('diseasePenetrances', [DiseasePenetrance_1.DiseasePenetrance], true)
    ], Pedigree.prototype, "diseasePenetrances", void 0);
    __decorate([
        json2typescript_1.JsonProperty('readyForAnalysis', Boolean)
    ], Pedigree.prototype, "readyForAnalysis", void 0);
    __decorate([
        json2typescript_1.JsonProperty('familyQCState', String, true)
    ], Pedigree.prototype, "familyQCState", void 0);
    Pedigree = __decorate([
        json2typescript_1.JsonObject
    ], Pedigree);
    return Pedigree;
}(JSONHelper_1.default));
exports.Pedigree = Pedigree;
;
//# sourceMappingURL=Pedigree.js.map