"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservedVariant = void 0;
var Variant_1 = require("./Variant");
var reports_1 = require("../reports");
var biodata_1 = require("../biodata");
var json2typescript_1 = require("json2typescript");
var ObservedVariant = /** @class */ (function () {
    function ObservedVariant() {
        this.date = "";
        this.assembly = ""; // Asembly
        this.variant = new Variant_1.Variant();
        this.variantCall = undefined;
        this.validated = false;
        this.additionalProperties = [];
    }
    __decorate([
        json2typescript_1.JsonProperty("date", String)
    ], ObservedVariant.prototype, "date", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assembly", String)
    ], ObservedVariant.prototype, "assembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variant", Variant_1.Variant)
    ], ObservedVariant.prototype, "variant", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantCall", reports_1.VariantCall, true)
    ], ObservedVariant.prototype, "variantCall", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validated", Boolean)
    ], ObservedVariant.prototype, "validated", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalProperties", [biodata_1.Property])
    ], ObservedVariant.prototype, "additionalProperties", void 0);
    ObservedVariant = __decorate([
        json2typescript_1.JsonObject
    ], ObservedVariant);
    return ObservedVariant;
}());
exports.ObservedVariant = ObservedVariant;
//# sourceMappingURL=ObservedVariant.js.map