"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidelineBasedVariantClassification = void 0;
var json2typescript_1 = require("json2typescript");
var AcmgVariantClassification_1 = require("./AcmgVariantClassification");
var AmpVariantClassification_1 = require("./AmpVariantClassification");
/**
 * Variant classification based on guidlines, AMP and ACMG are supported
 */
var GuidelineBasedVariantClassification = /** @class */ (function () {
    function GuidelineBasedVariantClassification() {
        /**
         * Variant classification using ACMG framework
         */
        this.acmgVariantClassification = undefined;
        /**
         * Variant classification using AMP framework
         */
        this.ampVariantClassification = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("acmgVariantClassification", AcmgVariantClassification_1.AcmgVariantClassification, true)
    ], GuidelineBasedVariantClassification.prototype, "acmgVariantClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ampVariantClassification", AmpVariantClassification_1.AmpVariantClassification, true)
    ], GuidelineBasedVariantClassification.prototype, "ampVariantClassification", void 0);
    GuidelineBasedVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], GuidelineBasedVariantClassification);
    return GuidelineBasedVariantClassification;
}());
exports.GuidelineBasedVariantClassification = GuidelineBasedVariantClassification;
//# sourceMappingURL=GuidelineBasedVariantClassification.js.map