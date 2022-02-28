"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantValidation = void 0;
var json2typescript_1 = require("json2typescript");
var VariantValidation = /** @class */ (function () {
    function VariantValidation() {
        /**
         * Technology used to perform secondary confirmation of this variant (e.g. Sanger)
         */
        this.validationTechnology = "";
        /**
         * Status/outcome of validation
         */
        this.validationResult = ""; // Validation Result
    }
    __decorate([
        json2typescript_1.JsonProperty("validationTechnology", String)
    ], VariantValidation.prototype, "validationTechnology", void 0);
    __decorate([
        json2typescript_1.JsonProperty("validationResult", String)
    ], VariantValidation.prototype, "validationResult", void 0);
    VariantValidation = __decorate([
        json2typescript_1.JsonObject
    ], VariantValidation);
    return VariantValidation;
}());
exports.VariantValidation = VariantValidation;
//# sourceMappingURL=VariantValidation.js.map