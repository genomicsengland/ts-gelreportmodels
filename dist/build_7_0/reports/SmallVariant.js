"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VariantCoordinates_1 = require("./VariantCoordinates");
var VariantCall_1 = require("./VariantCall");
var ReportEvent_1 = require("./ReportEvent");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
/**
 * A reported variant
 */
var SmallVariant = /** @class */ (function () {
    function SmallVariant() {
        /**
         * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
         * other contif in the reference genome, no "chr" prefix is expected.
         * Position is 1- based. Reference and alternate should never be empty or
         * any character representing emptiness (e.g.: . or -), a VCF-like indel
         * representation is expected.
         */
        this.variantCoordinates = new VariantCoordinates_1.VariantCoordinates;
        /**
         * List of variant calls across all samples under analysis for this variant
         */
        this.variantCalls = [];
        /**
         * The list of report events for this variant across multiple modes of
         * inheritance and panels
         */
        this.reportEvents = [];
        this.variantAttributes = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('variantCoordinates', VariantCoordinates_1.VariantCoordinates)
    ], SmallVariant.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantCalls', [VariantCall_1.VariantCall])
    ], SmallVariant.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportEvents', [ReportEvent_1.ReportEvent])
    ], SmallVariant.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantAttributes', VariantAttributes_1.VariantAttributes, true)
    ], SmallVariant.prototype, "variantAttributes", void 0);
    SmallVariant = __decorate([
        json2typescript_1.JsonObject
    ], SmallVariant);
    return SmallVariant;
}());
exports.SmallVariant = SmallVariant;
;
//# sourceMappingURL=SmallVariant.js.map