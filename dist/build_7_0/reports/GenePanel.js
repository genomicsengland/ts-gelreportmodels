"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
/**
 * A panel of genes
 */
var GenePanel = /** @class */ (function () {
    function GenePanel() {
        /** Unique panel identifier */
        this.panelIdentifier = undefined;
        /** Panel name used */
        this.panelName = undefined;
        /** Panel version */
        this.panelVersion = undefined;
        /** source i.e, PanelApp */
        this.source = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('panelIdentifier', String, true)
    ], GenePanel.prototype, "panelIdentifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty('panelName', String, true)
    ], GenePanel.prototype, "panelName", void 0);
    __decorate([
        json2typescript_1.JsonProperty('panelVersion', String, true)
    ], GenePanel.prototype, "panelVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty('source', String, true)
    ], GenePanel.prototype, "source", void 0);
    GenePanel = __decorate([
        json2typescript_1.JsonObject
    ], GenePanel);
    return GenePanel;
}());
exports.GenePanel = GenePanel;
;
//# sourceMappingURL=GenePanel.js.map