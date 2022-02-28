"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuralVariantDetails = void 0;
var Coordinates_1 = require("./Coordinates");
var NumberOfCopies_1 = require("./NumberOfCopies");
var json2typescript_1 = require("json2typescript");
var StructuralVariantDetails = /** @class */ (function () {
    function StructuralVariantDetails() {
        this.variantType = ""; // StructuralVariantType
        this.structuralVariantCoordinates = new Coordinates_1.Coordinates();
        this.numberOfCopies = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("variantType", String)
    ], StructuralVariantDetails.prototype, "variantType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("structuralVariantCoordinates", Coordinates_1.Coordinates)
    ], StructuralVariantDetails.prototype, "structuralVariantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("numberOfCopies", NumberOfCopies_1.NumberOfCopies, true)
    ], StructuralVariantDetails.prototype, "numberOfCopies", void 0);
    StructuralVariantDetails = __decorate([
        json2typescript_1.JsonObject
    ], StructuralVariantDetails);
    return StructuralVariantDetails;
}());
exports.StructuralVariantDetails = StructuralVariantDetails;
//# sourceMappingURL=StructuralVariantDetails.js.map