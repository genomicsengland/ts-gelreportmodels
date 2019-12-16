"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PhaseGenotype_1 = require("./PhaseGenotype");
var NumberOfCopies_1 = require("./NumberOfCopies");
var json2typescript_1 = require("json2typescript");
/**
 * This is intended to hold the genotypes for the family members. This assumes
 * that varinats have been split before. In principle it is a phased zygosity
 * as in VCF spec and called by the analysis provider if further phasing is
 * conducted
 */
var VariantCall = /** @class */ (function () {
    function VariantCall() {
        /** Participant id of the family member */
        this.participantId = "";
        /**
         * LP Number of the family member
         */
        this.sampleId = "";
        /** Zygosity. For somatic variants, or variants without zygosity use `na` */
        this.zygosity = ""; // Zygosity
        /** phase alleles for those in phase */
        this.phaseGenotype = undefined;
        /** Sample Variant Allele Frequency */
        this.sampleVariantAlleleFrequency = undefined; // double
        /** Depth for Reference Allele */
        this.depthReference = undefined; // int
        /** Depth for Alternate Allele */
        this.depthAlternate = undefined; // int
        /** Alleles for copy number variation - add doc */
        this.numberOfCopies = undefined;
        /** Describe whether this is a somatic or Germline variant */
        this.alleleOrigins = undefined; // AlleleOrigin
        this.supportingReadTypes = undefined; // SupportingReadType
    }
    __decorate([
        json2typescript_1.JsonProperty("participantId", String)
    ], VariantCall.prototype, "participantId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleId", String)
    ], VariantCall.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("zygosity", String)
    ], VariantCall.prototype, "zygosity", void 0);
    __decorate([
        json2typescript_1.JsonProperty("phaseGenotype", PhaseGenotype_1.PhaseGenotype, true)
    ], VariantCall.prototype, "phaseGenotype", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleVariantAlleleFrequency", Number, true)
    ], VariantCall.prototype, "sampleVariantAlleleFrequency", void 0);
    __decorate([
        json2typescript_1.JsonProperty("depthReference", Number, true)
    ], VariantCall.prototype, "depthReference", void 0);
    __decorate([
        json2typescript_1.JsonProperty("depthAlternate", Number, true)
    ], VariantCall.prototype, "depthAlternate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("numberOfCopies", [NumberOfCopies_1.NumberOfCopies], true)
    ], VariantCall.prototype, "numberOfCopies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("alleleOrigins", [String], true)
    ], VariantCall.prototype, "alleleOrigins", void 0);
    __decorate([
        json2typescript_1.JsonProperty("supportingReadTypes", [String], true)
    ], VariantCall.prototype, "supportingReadTypes", void 0);
    VariantCall = __decorate([
        json2typescript_1.JsonObject
    ], VariantCall);
    return VariantCall;
}());
exports.VariantCall = VariantCall;
//# sourceMappingURL=VariantCall.js.map