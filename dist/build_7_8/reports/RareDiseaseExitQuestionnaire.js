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
exports.RareDiseaseExitQuestionnaire = void 0;
var FamilyLevelQuestions_1 = require("./FamilyLevelQuestions");
var VariantGroupLevelQuestions_1 = require("./VariantGroupLevelQuestions");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * The rare disease program exit questionnaire
 */
var RareDiseaseExitQuestionnaire = /** @class */ (function (_super) {
    __extends(RareDiseaseExitQuestionnaire, _super);
    function RareDiseaseExitQuestionnaire() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** The date when the questionnaire was submitted */
        _this.eventDate = "";
        /** The person that submitted the questionnaire */
        _this.reporter = "";
        /** The set of questions at family level */
        _this.familyLevelQuestions = new FamilyLevelQuestions_1.FamilyLevelQuestions();
        /**
         * The list of variant group level variants (ungrouped variants are to be
         * set in single variant group)
         */
        _this.variantGroupLevelQuestions = [];
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("eventDate", String)
    ], RareDiseaseExitQuestionnaire.prototype, "eventDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reporter", String)
    ], RareDiseaseExitQuestionnaire.prototype, "reporter", void 0);
    __decorate([
        json2typescript_1.JsonProperty("familyLevelQuestions", FamilyLevelQuestions_1.FamilyLevelQuestions)
    ], RareDiseaseExitQuestionnaire.prototype, "familyLevelQuestions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantGroupLevelQuestions", [VariantGroupLevelQuestions_1.VariantGroupLevelQuestions])
    ], RareDiseaseExitQuestionnaire.prototype, "variantGroupLevelQuestions", void 0);
    RareDiseaseExitQuestionnaire = __decorate([
        json2typescript_1.JsonObject
    ], RareDiseaseExitQuestionnaire);
    return RareDiseaseExitQuestionnaire;
}(JSONHelper_1.default));
exports.RareDiseaseExitQuestionnaire = RareDiseaseExitQuestionnaire;
//# sourceMappingURL=RareDiseaseExitQuestionnaire.js.map