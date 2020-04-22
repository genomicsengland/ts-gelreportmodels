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
 * A variant consequence as defined by the Sequence Ontology (SO)
 * (e.g.: id = SO:0001816 ; name = non synonymous) NOTE: this record is
 * equivalent to OpenCB's ConsequenceType, but we want to avoid naming
 * collisions
 */
var VariantConsequence = /** @class */ (function () {
    function VariantConsequence() {
        /** The SO term identifier (e.g.: SO:0001816) */
        this.id = "";
        /** The SO term name (e.g.: non synonymous) */
        this.name = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("id", String)
    ], VariantConsequence.prototype, "id", void 0);
    __decorate([
        json2typescript_1.JsonProperty("name", String, true)
    ], VariantConsequence.prototype, "name", void 0);
    VariantConsequence = __decorate([
        json2typescript_1.JsonObject
    ], VariantConsequence);
    return VariantConsequence;
}());
exports.VariantConsequence = VariantConsequence;
//# sourceMappingURL=VariantConsequence.js.map