"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromosomalRearrangement = void 0;
var BreakPoint_1 = require("./BreakPoint");
var Rearrangement_1 = require("./Rearrangement");
var ReportEvent_1 = require("./ReportEvent");
var VariantCall_1 = require("./VariantCall");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
var ChromosomalRearrangement = /** @class */ (function () {
    function ChromosomalRearrangement() {
        this.breakPoints = undefined;
        this.rearrangements = [];
        this.reportEvents = [];
        /** array of genotypes for the samples */
        this.variantCalls = [];
        this.variantAttributes = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("breakPoints", [BreakPoint_1.BreakPoint], true)
    ], ChromosomalRearrangement.prototype, "breakPoints", void 0);
    __decorate([
        json2typescript_1.JsonProperty("rearrangements", [Rearrangement_1.Rearrangement])
    ], ChromosomalRearrangement.prototype, "rearrangements", void 0);
    __decorate([
        json2typescript_1.JsonProperty("reportEvents", [ReportEvent_1.ReportEvent])
    ], ChromosomalRearrangement.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantCalls", [VariantCall_1.VariantCall])
    ], ChromosomalRearrangement.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantAttributes", VariantAttributes_1.VariantAttributes, true)
    ], ChromosomalRearrangement.prototype, "variantAttributes", void 0);
    ChromosomalRearrangement = __decorate([
        json2typescript_1.JsonObject
    ], ChromosomalRearrangement);
    return ChromosomalRearrangement;
}());
exports.ChromosomalRearrangement = ChromosomalRearrangement;
//# sourceMappingURL=ChromosomalRearrangement.js.map