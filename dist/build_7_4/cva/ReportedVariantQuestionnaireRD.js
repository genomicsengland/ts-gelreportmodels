"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportedVariantQuestionnaireRD = void 0;
var json2typescript_1 = require("json2typescript");
var reports_1 = require("../reports");
var ReportEventQuestionnaireRD_1 = require("./ReportEventQuestionnaireRD");
var ReportedVariantQuestionnaireRD = /** @class */ (function () {
    function ReportedVariantQuestionnaireRD() {
        this.variantCoordinates = new reports_1.VariantCoordinates();
        this.reportEvent = new ReportEventQuestionnaireRD_1.ReportEventQuestionnaireRD();
    }
    __decorate([
        json2typescript_1.JsonProperty("variantCoordinates", reports_1.VariantCoordinates)
    ], ReportedVariantQuestionnaireRD.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportEvent", ReportEventQuestionnaireRD_1.ReportEventQuestionnaireRD)
    ], ReportedVariantQuestionnaireRD.prototype, "reportEvent", void 0);
    ReportedVariantQuestionnaireRD = __decorate([
        json2typescript_1.JsonObject
    ], ReportedVariantQuestionnaireRD);
    return ReportedVariantQuestionnaireRD;
}());
exports.ReportedVariantQuestionnaireRD = ReportedVariantQuestionnaireRD;
//# sourceMappingURL=ReportedVariantQuestionnaireRD.js.map