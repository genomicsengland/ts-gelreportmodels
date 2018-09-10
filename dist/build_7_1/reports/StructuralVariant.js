"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates_1 = require("./Coordinates");
var ReportEvent_1 = require("./ReportEvent");
var VariantCall_1 = require("./VariantCall");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
var StructuralVariant = /** @class */ (function () {
    function StructuralVariant() {
        this.variantType = ''; // StructuralVariantType
        this.coordinates = new Coordinates_1.Coordinates;
        this.leftInsSeq = undefined;
        this.rightInsSeq = undefined;
        this.reportEvents = [];
        /** array of genotypes for the samples */
        this.variantCalls = [];
        this.variantAttributes = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('variantType', String)
    ], StructuralVariant.prototype, "variantType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('coordinates', Coordinates_1.Coordinates)
    ], StructuralVariant.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('leftInsSeq', String, true)
    ], StructuralVariant.prototype, "leftInsSeq", void 0);
    __decorate([
        json2typescript_1.JsonProperty('rightInsSeq', String, true)
    ], StructuralVariant.prototype, "rightInsSeq", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportEvents', [ReportEvent_1.ReportEvent])
    ], StructuralVariant.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantCalls', [VariantCall_1.VariantCall])
    ], StructuralVariant.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantAttributes', VariantAttributes_1.VariantAttributes, true)
    ], StructuralVariant.prototype, "variantAttributes", void 0);
    StructuralVariant = __decorate([
        json2typescript_1.JsonObject
    ], StructuralVariant);
    return StructuralVariant;
}());
exports.StructuralVariant = StructuralVariant;
;
//# sourceMappingURL=StructuralVariant.js.map