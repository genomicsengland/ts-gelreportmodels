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
var json2typescript_1 = require("json2typescript");
var reports_1 = require("../reports");
var ReportEventQuestionnaireRD_1 = require("./ReportEventQuestionnaireRD");
var ReportEventQuestionnaireCancer_1 = require("./ReportEventQuestionnaireCancer");
var Comment_1 = require("./Comment");
var ObservedVariant_1 = require("./ObservedVariant");
var biodata_1 = require("../biodata");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var ReportEventEntry = /** @class */ (function (_super) {
    __extends(ReportEventEntry, _super);
    function ReportEventEntry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reportModelVersion = "";
        _this.id = "";
        _this.version = 0; // int
        _this.latest = undefined;
        _this.caseId = undefined;
        _this.caseVersion = undefined; // int
        _this.groupId = "";
        _this.cohortId = "";
        _this.date = "";
        _this.author = "";
        _this.authorVersion = undefined;
        _this.type = ""; // ReportEventType
        _this.program = ""; // Program
        _this.validated = false;
        _this.workspace = [];
        _this.reportEvent = undefined;
        _this.reportEventQuestionnaire = new ReportEventQuestionnaireRD_1.ReportEventQuestionnaireRD();
        _this.reportEventQuestionnaireCancer = new ReportEventQuestionnaireCancer_1.ReportEventQuestionnaireCancer();
        _this.observedVariants = [];
        _this.comments = [];
        _this.additionalProperties = [];
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("reportModelVersion", String)
    ], ReportEventEntry.prototype, "reportModelVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("id", String)
    ], ReportEventEntry.prototype, "id", void 0);
    __decorate([
        json2typescript_1.JsonProperty("version", Number)
    ], ReportEventEntry.prototype, "version", void 0);
    __decorate([
        json2typescript_1.JsonProperty("latest", Boolean, true)
    ], ReportEventEntry.prototype, "latest", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseId", String, true)
    ], ReportEventEntry.prototype, "caseId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("caseVersion", Number, true)
    ], ReportEventEntry.prototype, "caseVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groupId", String)
    ], ReportEventEntry.prototype, "groupId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("cohortId", String)
    ], ReportEventEntry.prototype, "cohortId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("date", String)
    ], ReportEventEntry.prototype, "date", void 0);
    __decorate([
        json2typescript_1.JsonProperty("author", String)
    ], ReportEventEntry.prototype, "author", void 0);
    __decorate([
        json2typescript_1.JsonProperty("authorVersion", String, true)
    ], ReportEventEntry.prototype, "authorVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("type", String)
    ], ReportEventEntry.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty("program", String)
    ], ReportEventEntry.prototype, "program", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validated", Boolean)
    ], ReportEventEntry.prototype, "validated", void 0);
    __decorate([
        json2typescript_1.JsonProperty("workspace", [String])
    ], ReportEventEntry.prototype, "workspace", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportEvent", reports_1.ReportEvent, true)
    ], ReportEventEntry.prototype, "reportEvent", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportEventQuestionnaire", ReportEventQuestionnaireRD_1.ReportEventQuestionnaireRD)
    ], ReportEventEntry.prototype, "reportEventQuestionnaire", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportEventQuestionnaireCancer", ReportEventQuestionnaireCancer_1.ReportEventQuestionnaireCancer)
    ], ReportEventEntry.prototype, "reportEventQuestionnaireCancer", void 0);
    __decorate([
        json2typescript_1.JsonProperty("observedVariants", [ObservedVariant_1.ObservedVariant])
    ], ReportEventEntry.prototype, "observedVariants", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [Comment_1.Comment])
    ], ReportEventEntry.prototype, "comments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalProperties", [biodata_1.Property])
    ], ReportEventEntry.prototype, "additionalProperties", void 0);
    ReportEventEntry = __decorate([
        json2typescript_1.JsonObject
    ], ReportEventEntry);
    return ReportEventEntry;
}(JSONHelper_1.default));
exports.ReportEventEntry = ReportEventEntry;
//# sourceMappingURL=ReportEventEntry.js.map