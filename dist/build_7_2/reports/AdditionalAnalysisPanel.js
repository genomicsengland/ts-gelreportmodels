"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GenePanel_1 = require("./GenePanel");
var json2typescript_1 = require("json2typescript");
/** A panel of genes and the specific disease that it assesses */
var AdditionalAnalysisPanel = /** @class */ (function () {
    function AdditionalAnalysisPanel() {
        /** The specific disease */
        this.specificDisease = "";
        /** The panel of genes */
        this.panel = new GenePanel_1.GenePanel();
    }
    __decorate([
        json2typescript_1.JsonProperty("specificDisease", String)
    ], AdditionalAnalysisPanel.prototype, "specificDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty("panel", GenePanel_1.GenePanel)
    ], AdditionalAnalysisPanel.prototype, "panel", void 0);
    AdditionalAnalysisPanel = __decorate([
        json2typescript_1.JsonObject
    ], AdditionalAnalysisPanel);
    return AdditionalAnalysisPanel;
}());
exports.AdditionalAnalysisPanel = AdditionalAnalysisPanel;
//# sourceMappingURL=AdditionalAnalysisPanel.js.map