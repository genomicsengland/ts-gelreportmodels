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
exports.GenePanel = void 0;
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * A panel of genes
 */
var GenePanel = /** @class */ (function (_super) {
    __extends(GenePanel, _super);
    function GenePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Unique panel identifier */
        _this.panelIdentifier = undefined;
        /** Panel name used */
        _this.panelName = undefined;
        /** Panel version */
        _this.panelVersion = undefined;
        /** source i.e, PanelApp */
        _this.source = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("panelIdentifier", String, true)
    ], GenePanel.prototype, "panelIdentifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("panelName", String, true)
    ], GenePanel.prototype, "panelName", void 0);
    __decorate([
        json2typescript_1.JsonProperty("panelVersion", String, true)
    ], GenePanel.prototype, "panelVersion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("source", String, true)
    ], GenePanel.prototype, "source", void 0);
    GenePanel = __decorate([
        json2typescript_1.JsonObject
    ], GenePanel);
    return GenePanel;
}(JSONHelper_1.default));
exports.GenePanel = GenePanel;
//# sourceMappingURL=GenePanel.js.map