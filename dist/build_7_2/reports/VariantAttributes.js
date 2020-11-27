"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantAttributes = void 0;
var VariantIdentifiers_1 = require("./VariantIdentifiers");
var AlleleFrequency_1 = require("./AlleleFrequency");
var json2typescript_1 = require("json2typescript");
/** Some additional variant attributes */
var VariantAttributes = /** @class */ (function () {
    function VariantAttributes() {
        /** gDNA change, HGVS nomenclature (e.g.: g.476A>T) */
        this.genomicChanges = undefined;
        /** cDNA change, HGVS nomenclature (e.g.: c.76A>T) */
        this.cdnaChanges = undefined;
        /** Protein change, HGVS nomenclature (e.g.: p.Lys76Asn) */
        this.proteinChanges = undefined;
        /**
         * Any additional information in a free text field. For example a quote
         * from a paper
         */
        this.additionalTextualVariantAnnotations = undefined;
        /**
         * Additional references for ths variant. For example HGMD ID or Pubmed Id
         */
        this.references = undefined;
        this.variantIdentifiers = undefined;
        /** A list of population allele frequencies */
        this.alleleFrequencies = undefined;
        /**
         * Additional numeric variant annotations for this variant. For Example
         * (Allele Frequency, sift, polyphen, mutationTaster, CADD. ..)
         */
        this.additionalNumericVariantAnnotations = undefined;
        /** Comments */
        this.comments = undefined;
        /** List of allele origins for this variant in this report */
        this.alleleOrigins = undefined; // AlleleOrigin
        /**
         * Largest reference interrupted homopolymer length intersecting with the
         * indel
         */
        this.ihp = undefined;
        /** Flag indicating if the variant is recurrently reported */
        this.recurrentlyReported = undefined;
        /**
         * Average tier1 number of basecalls filtered from original read depth
         * within 50 bases
         */
        this.fdp50 = undefined;
        /**
         * Map of other attributes where keys are the attribute names and values
         * are the attributes
         */
        this.others = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("genomicChanges", [String], true)
    ], VariantAttributes.prototype, "genomicChanges", void 0);
    __decorate([
        json2typescript_1.JsonProperty("cdnaChanges", [String], true)
    ], VariantAttributes.prototype, "cdnaChanges", void 0);
    __decorate([
        json2typescript_1.JsonProperty("proteinChanges", [String], true)
    ], VariantAttributes.prototype, "proteinChanges", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalTextualVariantAnnotations", Object, true)
    ], VariantAttributes.prototype, "additionalTextualVariantAnnotations", void 0);
    __decorate([
        json2typescript_1.JsonProperty("references", Object, true)
    ], VariantAttributes.prototype, "references", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantIdentifiers", VariantIdentifiers_1.VariantIdentifiers, true)
    ], VariantAttributes.prototype, "variantIdentifiers", void 0);
    __decorate([
        json2typescript_1.JsonProperty("alleleFrequencies", [AlleleFrequency_1.AlleleFrequency], true)
    ], VariantAttributes.prototype, "alleleFrequencies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalNumericVariantAnnotations", Object, true)
    ], VariantAttributes.prototype, "additionalNumericVariantAnnotations", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comments", [String], true)
    ], VariantAttributes.prototype, "comments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("alleleOrigins", [String], true)
    ], VariantAttributes.prototype, "alleleOrigins", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ihp", Number, true)
    ], VariantAttributes.prototype, "ihp", void 0);
    __decorate([
        json2typescript_1.JsonProperty("recurrentlyReported", Boolean, true)
    ], VariantAttributes.prototype, "recurrentlyReported", void 0);
    __decorate([
        json2typescript_1.JsonProperty("fdp50", Number, true)
    ], VariantAttributes.prototype, "fdp50", void 0);
    __decorate([
        json2typescript_1.JsonProperty("others", Object, true)
    ], VariantAttributes.prototype, "others", void 0);
    VariantAttributes = __decorate([
        json2typescript_1.JsonObject
    ], VariantAttributes);
    return VariantAttributes;
}());
exports.VariantAttributes = VariantAttributes;
//# sourceMappingURL=VariantAttributes.js.map