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
exports.VariantInterpretationLog = exports.GuidelineBasedVariantClassification = exports.AmpVariantClassification = exports.AmpClincialOrExperimentalEvidence = exports.AmpEvidence = exports.AcmgVariantClassification = exports.AcmgEvidence = exports.VariantValidation = exports.User = void 0;
var json2typescript_1 = require("json2typescript");
var _1 = require("./");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var UserComment_1 = require("./UserComment");
var User = /** @class */ (function () {
    function User() {
        this.username = "";
        this.role = "";
        this.email = "";
        this.groups = [];
    }
    __decorate([
        json2typescript_1.JsonProperty("username", String)
    ], User.prototype, "username", void 0);
    __decorate([
        json2typescript_1.JsonProperty("role", String)
    ], User.prototype, "role", void 0);
    __decorate([
        json2typescript_1.JsonProperty("email", String)
    ], User.prototype, "email", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groups", [String])
    ], User.prototype, "groups", void 0);
    User = __decorate([
        json2typescript_1.JsonObject
    ], User);
    return User;
}());
exports.User = User;
var VariantValidation = /** @class */ (function () {
    function VariantValidation() {
        this.validationTechnology = "";
        this.validationResult = ""; // ValidationResult
    }
    __decorate([
        json2typescript_1.JsonProperty("validationTechnology", String)
    ], VariantValidation.prototype, "validationTechnology", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validationResult", String)
    ], VariantValidation.prototype, "validationResult", void 0);
    VariantValidation = __decorate([
        json2typescript_1.JsonObject
    ], VariantValidation);
    return VariantValidation;
}());
exports.VariantValidation = VariantValidation;
var AcmgEvidence = /** @class */ (function () {
    function AcmgEvidence() {
        this.category = "";
        this.type = "";
        this.weight = "";
        this.modifier = 0;
        this.activationStrength = undefined;
        this.description = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("category", String)
    ], AcmgEvidence.prototype, "category", void 0);
    __decorate([
        json2typescript_1.JsonProperty("type", String)
    ], AcmgEvidence.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty("weight", String)
    ], AcmgEvidence.prototype, "weight", void 0);
    __decorate([
        json2typescript_1.JsonProperty("modifier", Number)
    ], AcmgEvidence.prototype, "modifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("activationStrength", String, true)
    ], AcmgEvidence.prototype, "activationStrength", void 0);
    __decorate([
        json2typescript_1.JsonProperty("description", String, true)
    ], AcmgEvidence.prototype, "description", void 0);
    AcmgEvidence = __decorate([
        json2typescript_1.JsonObject
    ], AcmgEvidence);
    return AcmgEvidence;
}());
exports.AcmgEvidence = AcmgEvidence;
var AcmgVariantClassification = /** @class */ (function () {
    function AcmgVariantClassification() {
        this.acmgEvidences = [];
        this.clinicalSignificance = "";
        this.assessment = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("acmgEvidences", [AcmgEvidence])
    ], AcmgVariantClassification.prototype, "acmgEvidences", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalSignificance", String)
    ], AcmgVariantClassification.prototype, "clinicalSignificance", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assessment", String, true)
    ], AcmgVariantClassification.prototype, "assessment", void 0);
    AcmgVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], AcmgVariantClassification);
    return AcmgVariantClassification;
}());
exports.AcmgVariantClassification = AcmgVariantClassification;
var AmpEvidence = /** @class */ (function () {
    function AmpEvidence() {
        /**
          AMP evidence type according to Guidlines, i.e germline_database_presence
          */
        this.type = "";
        /**
          Assessment for AMP evidence, i.e Present in ClinVar
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
var AmpClincialOrExperimentalEvidence = /** @class */ (function () {
    function AmpClincialOrExperimentalEvidence() {
        /**
          As denined in AMP guidelines: therapeutic, diagnosis or prognosis
          */
        this.category = "";
        /**
          As denined in AMP guidelines: levelA, levelB, levelC, levelD
          */
        this.level = "";
        /**
          Description of the evidence
          */
        this.description = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("category", String)
    ], AmpClincialOrExperimentalEvidence.prototype, "category", void 0);
    __decorate([
        json2typescript_1.JsonProperty("level", String)
    ], AmpClincialOrExperimentalEvidence.prototype, "level", void 0);
    __decorate([
        json2typescript_1.JsonProperty("description", String, true)
    ], AmpClincialOrExperimentalEvidence.prototype, "description", void 0);
    AmpClincialOrExperimentalEvidence = __decorate([
        json2typescript_1.JsonObject
    ], AmpClincialOrExperimentalEvidence);
    return AmpClincialOrExperimentalEvidence;
}());
exports.AmpClincialOrExperimentalEvidence = AmpClincialOrExperimentalEvidence;
var AmpVariantClassification = /** @class */ (function () {
    function AmpVariantClassification() {
        this.ampEvidences = [];
        this.ampTier = "";
        this.ampClincialOrExperimentalEvidence = undefined;
        this.assessment = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("ampEvidences", [AmpEvidence])
    ], AmpVariantClassification.prototype, "ampEvidences", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampTier", String)
    ], AmpVariantClassification.prototype, "ampTier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampClincialOrExperimentalEvidence", [AmpClincialOrExperimentalEvidence], true)
    ], AmpVariantClassification.prototype, "ampClincialOrExperimentalEvidence", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assessment", String, true)
    ], AmpVariantClassification.prototype, "assessment", void 0);
    AmpVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], AmpVariantClassification);
    return AmpVariantClassification;
}());
exports.AmpVariantClassification = AmpVariantClassification;
var GuidelineBasedVariantClassification = /** @class */ (function () {
    function GuidelineBasedVariantClassification() {
        this.acmgVariantClassification = undefined;
        this.ampVariantClassification = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("acmgVariantClassification", AcmgVariantClassification, true)
    ], GuidelineBasedVariantClassification.prototype, "acmgVariantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampVariantClassification", AmpVariantClassification, true)
    ], GuidelineBasedVariantClassification.prototype, "ampVariantClassification", void 0);
    GuidelineBasedVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], GuidelineBasedVariantClassification);
    return GuidelineBasedVariantClassification;
}());
exports.GuidelineBasedVariantClassification = GuidelineBasedVariantClassification;
var VariantInterpretationLog = /** @class */ (function (_super) {
    __extends(VariantInterpretationLog, _super);
    function VariantInterpretationLog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Variant coordinates
         */
        _this.variantCoordinates = new _1.VariantCoordinates();
        /**
         * User who set classification
         */
        _this.user = new User();
        /**
         * Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
         */
        _this.timestamp = "";
        /**
         * GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
         */
        _this.familyId = "";
        /**
         * Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
         */
        _this.caseId = "";
        /**
         * Independent validation of variant
         */
        _this.variantValidation = undefined;
        /**
         * User comments attached to this variant in this case
         */
        _this.comments = undefined;
        /**
         * Guideline-based variant classification
         */
        _this.variantClassification = new GuidelineBasedVariantClassification();
        /**
         * User has marked the variant as an artefact
         */
        _this.Artifact = undefined;
        /**
         * Filter settings applied at time variant was classified
         */
        _this.decisionSupportSystemFilters = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("variantCoordinates", _1.VariantCoordinates)
    ], VariantInterpretationLog.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("user", User)
    ], VariantInterpretationLog.prototype, "user", void 0);
    __decorate([
        json2typescript_1.JsonProperty("timestamp", String)
    ], VariantInterpretationLog.prototype, "timestamp", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groupId", String)
    ], VariantInterpretationLog.prototype, "familyId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseId", String)
    ], VariantInterpretationLog.prototype, "caseId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantValidation", [VariantValidation], true)
    ], VariantInterpretationLog.prototype, "variantValidation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [UserComment_1.UserComment], true)
    ], VariantInterpretationLog.prototype, "comments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantClassification", GuidelineBasedVariantClassification, true)
    ], VariantInterpretationLog.prototype, "variantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("Artifact", Boolean, true)
    ], VariantInterpretationLog.prototype, "Artifact", void 0);
    __decorate([
        json2typescript_1.JsonProperty("decisionSupportSystemFilters", Object, true)
    ], VariantInterpretationLog.prototype, "decisionSupportSystemFilters", void 0);
    VariantInterpretationLog = __decorate([
        json2typescript_1.JsonObject
    ], VariantInterpretationLog);
    return VariantInterpretationLog;
}(JSONHelper_1.default));
exports.VariantInterpretationLog = VariantInterpretationLog;
//# sourceMappingURL=VariantInterpretationLog.js.map