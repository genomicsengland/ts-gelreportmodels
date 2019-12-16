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
 * The variant classification according to different properties.
 */
var VariantClassification = /** @class */ (function () {
    function VariantClassification() {
        /** The variant's clinical significance. */
        this.clinicalSignificance = undefined; // ClinicalSignificance
        /** The variant's pharmacogenomics classification. */
        this.drugResponseClassification = undefined; // DrugResponseClassification
        /** The variant's trait association. */
        this.traitAssociation = undefined; // TraitAssociation
        /** The variant's tumorigenesis classification */
        this.tumorigenesisClassification = undefined; // TumorigenesisClassification
        /** The variant functional effect */
        this.functionalEffect = undefined; // VariantFunctionalEffect
    }
    __decorate([
        json2typescript_1.JsonProperty("clinicalSignificance", String, true)
    ], VariantClassification.prototype, "clinicalSignificance", void 0);
    __decorate([
        json2typescript_1.JsonProperty("drugResponseClassification", String, true)
    ], VariantClassification.prototype, "drugResponseClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("traitAssociation", String, true)
    ], VariantClassification.prototype, "traitAssociation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumorigenesisClassification", String, true)
    ], VariantClassification.prototype, "tumorigenesisClassification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("functionalEffect", String, true)
    ], VariantClassification.prototype, "functionalEffect", void 0);
    VariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], VariantClassification);
    return VariantClassification;
}());
exports.VariantClassification = VariantClassification;
//# sourceMappingURL=VariantClassification.js.map