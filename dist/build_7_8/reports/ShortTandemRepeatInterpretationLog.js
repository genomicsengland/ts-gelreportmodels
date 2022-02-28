"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortTandemRepeatInterpretationLog = void 0;
var VariantValidation_1 = require("./VariantValidation");
var User_1 = require("./User");
var UserComment_1 = require("./UserComment");
var ShortTandemRepeatDetails_1 = require("./ShortTandemRepeatDetails");
var json2typescript_1 = require("json2typescript");
var ShortTandemRepeatInterpretationLog = /** @class */ (function () {
    function ShortTandemRepeatInterpretationLog() {
        /**
        Variant details
        */
        this.variant = new ShortTandemRepeatDetails_1.ShortTandemRepeatDetails();
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
        json2typescript_1.JsonProperty("variant", ShortTandemRepeatDetails_1.ShortTandemRepeatDetails)
    ], ShortTandemRepeatInterpretationLog.prototype, "variant", void 0);
    __decorate([
        json2typescript_1.JsonProperty("user", User_1.User)
    ], ShortTandemRepeatInterpretationLog.prototype, "user", void 0);
    __decorate([
        json2typescript_1.JsonProperty("timestamp", String)
    ], ShortTandemRepeatInterpretationLog.prototype, "timestamp", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groupId", String)
    ], ShortTandemRepeatInterpretationLog.prototype, "groupId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseId", String)
    ], ShortTandemRepeatInterpretationLog.prototype, "caseId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantValidation", VariantValidation_1.VariantValidation, true)
    ], ShortTandemRepeatInterpretationLog.prototype, "variantValidation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [UserComment_1.UserComment], true)
    ], ShortTandemRepeatInterpretationLog.prototype, "comments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantClassification", String)
    ], ShortTandemRepeatInterpretationLog.prototype, "variantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("artifact", Boolean, true)
    ], ShortTandemRepeatInterpretationLog.prototype, "artifact", void 0);
    __decorate([
        json2typescript_1.JsonProperty("decisionSupportSystemFilters", Object, true)
    ], ShortTandemRepeatInterpretationLog.prototype, "decisionSupportSystemFilters", void 0);
    ShortTandemRepeatInterpretationLog = __decorate([
        json2typescript_1.JsonObject
    ], ShortTandemRepeatInterpretationLog);
    return ShortTandemRepeatInterpretationLog;
}());
exports.ShortTandemRepeatInterpretationLog = ShortTandemRepeatInterpretationLog;
//# sourceMappingURL=ShortTandemRepeatInterpretationLog.js.map