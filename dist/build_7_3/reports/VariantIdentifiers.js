"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Identifier_1 = require("./Identifier");
var VariantIdentifiers = /** @class */ (function () {
    function VariantIdentifiers() {
        /** Variant identifier in dbSNP */
        this.dbSnpId = undefined;
        /** Variant identifier in Cosmic */
        this.cosmicIds = undefined;
        /** Variant identifier in ClinVar */
        this.clinVarIds = undefined;
        this.otherIds = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("dbSnpId", String, true)
    ], VariantIdentifiers.prototype, "dbSnpId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("cosmicIds", [String], true)
    ], VariantIdentifiers.prototype, "cosmicIds", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinVarIds", [String], true)
    ], VariantIdentifiers.prototype, "clinVarIds", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherIds", [Identifier_1.Identifier], true)
    ], VariantIdentifiers.prototype, "otherIds", void 0);
    VariantIdentifiers = __decorate([
        json2typescript_1.JsonObject
    ], VariantIdentifiers);
    return VariantIdentifiers;
}());
exports.VariantIdentifiers = VariantIdentifiers;
;
//# sourceMappingURL=VariantIdentifiers.js.map