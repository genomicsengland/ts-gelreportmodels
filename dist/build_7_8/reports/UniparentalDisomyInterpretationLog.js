"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniparentalDisomyInterpretationLog = void 0;
var VariantValidation_1 = require("./VariantValidation");
var User_1 = require("./User");
var UserComment_1 = require("./UserComment");
var UniparentalDisomy_1 = require("./UniparentalDisomy");
var json2typescript_1 = require("json2typescript");
var UniparentalDisomyInterpretationLog = /** @class */ (function () {
    function UniparentalDisomyInterpretationLog() {
        /**
        Variant details
        */
        this.variant = new UniparentalDisomy_1.UniparentalDisomyDetails();
        /**
        User who set classification
        */
        this.user = new User_1.User();
        /**
        Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
        */
        this.timestamp = "";
        /**
        GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
        */
        this.groupId = "";
        /**
        Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
        */
        this.caseId = "";
        /**
        Independent validation of variant
        */
        this.variantValidation = undefined;
        /**
        User comments attached to this variant in this case
        */
        this.comments = undefined;
        /**
        Variant classification
        */
        this.variantClassification = ""; //ClinicalSignificance
        /**
        User has marked the variant as an artefact
        */
        this.artifact = undefined;
        /**
        Filter settings applied at time variant was classified
        */
        this.decisionSupportSystemFilters = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("variant", UniparentalDisomy_1.UniparentalDisomyDetails)
    ], UniparentalDisomyInterpretationLog.prototype, "variant", void 0);
    __decorate([
        json2typescript_1.JsonProperty("user", User_1.User)
    ], UniparentalDisomyInterpretationLog.prototype, "user", void 0);
    __decorate([
        json2typescript_1.JsonProperty("timestamp", String)
    ], UniparentalDisomyInterpretationLog.prototype, "timestamp", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groupId", String)
    ], UniparentalDisomyInterpretationLog.prototype, "groupId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseId", String)
    ], UniparentalDisomyInterpretationLog.prototype, "caseId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantValidation", VariantValidation_1.VariantValidation, true)
    ], UniparentalDisomyInterpretationLog.prototype, "variantValidation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [UserComment_1.UserComment], true)
    ], UniparentalDisomyInterpretationLog.prototype, "comments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantClassification", String)
    ], UniparentalDisomyInterpretationLog.prototype, "variantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("artifact", Boolean, true)
    ], UniparentalDisomyInterpretationLog.prototype, "artifact", void 0);
    __decorate([
        json2typescript_1.JsonProperty("decisionSupportSystemFilters", Object, true)
    ], UniparentalDisomyInterpretationLog.prototype, "decisionSupportSystemFilters", void 0);
    UniparentalDisomyInterpretationLog = __decorate([
        json2typescript_1.JsonObject
    ], UniparentalDisomyInterpretationLog);
    return UniparentalDisomyInterpretationLog;
}());
exports.UniparentalDisomyInterpretationLog = UniparentalDisomyInterpretationLog;
//# sourceMappingURL=UniparentalDisomyInterpretationLog.js.map