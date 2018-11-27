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
 * The variant coordinates representing uniquely a small variant. No
 * multi-allelic variant supported, alternate only represents one alternate
 * allele.
 */
var VariantCoordinates = /** @class */ (function () {
    function VariantCoordinates() {
        /** Chromosome */
        this.chromosome = '';
        /** Genomic position */
        this.position = 0;
        /** The reference bases. */
        this.reference = '';
        /** The alternate bases */
        this.alternate = ''; // one of assemblyValues
        /** The assembly to which this variant corresponds */
        this.assembly = ''; // Assembly
    }
    VariantCoordinates.prototype.toVerboseId = function () {
        return this.chromosome + ":" + this.position + ":" + this.reference + ":" + this.alternate;
    };
    __decorate([
        json2typescript_1.JsonProperty('chromosome', String)
    ], VariantCoordinates.prototype, "chromosome", void 0);
    __decorate([
        json2typescript_1.JsonProperty('position', Number)
    ], VariantCoordinates.prototype, "position", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reference', String)
    ], VariantCoordinates.prototype, "reference", void 0);
    __decorate([
        json2typescript_1.JsonProperty('alternate', String)
    ], VariantCoordinates.prototype, "alternate", void 0);
    __decorate([
        json2typescript_1.JsonProperty('assembly', String)
    ], VariantCoordinates.prototype, "assembly", void 0);
    VariantCoordinates = __decorate([
        json2typescript_1.JsonObject
    ], VariantCoordinates);
    return VariantCoordinates;
}());
exports.VariantCoordinates = VariantCoordinates;
;
//# sourceMappingURL=VariantCoordinates.js.map