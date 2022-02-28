"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisPanel = void 0;
var json2typescript_1 = require("json2typescript");
/**
 * An analysis panel
 */
var AnalysisPanel = /** @class */ (function () {
    function AnalysisPanel() {
        /** The specific disease that a panel tests */
        this.specificDisease = "";
        /** The name of the panel */
        this.panelName = "";
        /** The version of the panel */
        this.panelVersion = undefined;
        /** The outcome of the review */
        this.reviewOutcome = "";
        /** TODO */
        this.multipleGeneticOrigins = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("specificDisease", String)
    ], AnalysisPanel.prototype, "specificDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty("panelName", String)
    ], AnalysisPanel.prototype, "panelName", void 0);
    __decorate([
        json2typescript_1.JsonProperty("panelVersion", String, true)
    ], AnalysisPanel.prototype, "panelVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reviewOutcome", String)
    ], AnalysisPanel.prototype, "reviewOutcome", void 0);
    __decorate([
        json2typescript_1.JsonProperty("multipleGeneticOrigins", String)
    ], AnalysisPanel.prototype, "multipleGeneticOrigins", void 0);
    AnalysisPanel = __decorate([
        json2typescript_1.JsonObject
    ], AnalysisPanel);
    return AnalysisPanel;
}());
exports.AnalysisPanel = AnalysisPanel;
//# sourceMappingURL=AnalysisPanel.js.map