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
exports.CancerExitQuestionnaire = void 0;
var CancerCaseLevelQuestions_1 = require("./CancerCaseLevelQuestions");
var CancerSomaticVariantLevelQuestions_1 = require("./CancerSomaticVariantLevelQuestions");
var CancerGermlineVariantLevelQuestions_1 = require("./CancerGermlineVariantLevelQuestions");
var AdditionalVariantsQuestions_1 = require("./AdditionalVariantsQuestions");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * The cancer program exit questionnaire
 */
var CancerExitQuestionnaire = /** @class */ (function (_super) {
    __extends(CancerExitQuestionnaire, _super);
    function CancerExitQuestionnaire() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The date when the questionnaire was submitted
         */
        _this.eventDate = "";
        /**
         * The person that submitted the questionnaire
         */
        _this.reporter = "";
        /**
         * The case level questions
         */
        _this.caseLevelQuestions = new CancerCaseLevelQuestions_1.CancerCaseLevelQuestions();
        /**
         * The questions for somatic variants
         */
        _this.somaticVariantLevelQuestions = [];
        /**
         * The questions for germline variants
         */
        _this.germlineVariantLevelQuestions = [];
        /**
         * Please enter any additional comments you may have about the case here.
         */
        _this.additionalComments = undefined;
        /**
         * Other actionable variants or entities. Please provide other (potentially)
         * actionable entities: e.g domain 3 small variants or SV/CNV, mutational
         * signatures, mutational burden
         */
        _this.otherActionableVariants = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("eventDate", String)
    ], CancerExitQuestionnaire.prototype, "eventDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reporter", String)
    ], CancerExitQuestionnaire.prototype, "reporter", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseLevelQuestions", CancerCaseLevelQuestions_1.CancerCaseLevelQuestions)
    ], CancerExitQuestionnaire.prototype, "caseLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("somaticVariantLevelQuestions", [CancerSomaticVariantLevelQuestions_1.CancerSomaticVariantLevelQuestions], true)
    ], CancerExitQuestionnaire.prototype, "somaticVariantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("germlineVariantLevelQuestions", [
            CancerGermlineVariantLevelQuestions_1.CancerGermlineVariantLevelQuestions
        ])
    ], CancerExitQuestionnaire.prototype, "germlineVariantLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalComments", String, true)
    ], CancerExitQuestionnaire.prototype, "additionalComments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherActionableVariants", [AdditionalVariantsQuestions_1.AdditionalVariantsQuestions], true)
    ], CancerExitQuestionnaire.prototype, "otherActionableVariants", void 0);
    CancerExitQuestionnaire = __decorate([
        json2typescript_1.JsonObject
    ], CancerExitQuestionnaire);
    return CancerExitQuestionnaire;
}(JSONHelper_1.default));
exports.CancerExitQuestionnaire = CancerExitQuestionnaire;
//# sourceMappingURL=CancerExitQuestionnaire.js.map