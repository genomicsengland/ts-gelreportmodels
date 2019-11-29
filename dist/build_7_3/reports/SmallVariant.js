"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VariantCoordinates_1 = require("./VariantCoordinates");
var VariantCall_1 = require("./VariantCall");
var ReportEvent_1 = require("./ReportEvent");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * A reported variant
 */
var SmallVariant = /** @class */ (function (_super) {
    __extends(SmallVariant, _super);
    function SmallVariant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
         * other contif in the reference genome, no "chr" prefix is expected.
         * Position is 1- based. Reference and alternate should never be empty or
         * any character representing emptiness (e.g.: . or -), a VCF-like indel
         * representation is expected.
         */
        _this.variantCoordinates = new VariantCoordinates_1.VariantCoordinates;
        /**
         * List of variant calls across all samples under analysis for this variant
         */
        _this.variantCalls = [];
        /**
         * The list of report events for this variant across multiple modes of
         * inheritance and panels
         */
        _this.reportEvents = [];
        _this.variantAttributes = undefined;
        return _this;
    }
    Object.defineProperty(SmallVariant.prototype, "mostSevereConsequenceType", {
        get: function () {
            var maxValue = [0, ''];
            this.reportEvents.forEach(function (reportEvent) {
                reportEvent.variantConsequences.forEach(function (vc) {
                    if (vc.name) {
                        if (SOSeverity[vc.name] > maxValue[0]) {
                            maxValue = [SOSeverity[vc.name], vc.name];
                        }
                    }
                });
            });
            return maxValue[1];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        json2typescript_1.JsonProperty('variantCoordinates', VariantCoordinates_1.VariantCoordinates)
    ], SmallVariant.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantCalls', [VariantCall_1.VariantCall])
    ], SmallVariant.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportEvents', [ReportEvent_1.ReportEvent])
    ], SmallVariant.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantAttributes', VariantAttributes_1.VariantAttributes, true)
    ], SmallVariant.prototype, "variantAttributes", void 0);
    SmallVariant = __decorate([
        json2typescript_1.JsonObject
    ], SmallVariant);
    return SmallVariant;
}(JSONHelper_1.default));
exports.SmallVariant = SmallVariant;
;
// same mapping as in https://github.com/opencb/cellbase/blob/develop/cellbase-core/src/main/java/org/opencb/cellbase/core/variant/annotation/VariantAnnotationUtils.java#L424
var SOSeverity = {
    'copy_number_change': 42,
    'transcript_ablation': 41,
    'structural_variant': 40,
    'splice_acceptor_variant': 39,
    'splice_donor_variant': 38,
    'stop_gained': 37,
    'frameshift_variant': 36,
    'stop_lost': 35,
    'terminator_codon_variant': 34,
    'start_lost': 34,
    'initiator_codon_variant': 33,
    'transcript_amplification': 32,
    'inframe_insertion': 31,
    'inframe_deletion': 30,
    'inframe_variant': 29,
    'missense_variant': 28,
    'splice_region_variant': 27,
    'incomplete_terminal_codon_variant': 26,
    'stop_retained_variant': 25,
    'start_retained_variant': 24,
    'synonymous_variant': 23,
    'coding_sequence_variant': 22,
    'mature_miRNA_variant': 21,
    '5_prime_UTR_variant': 20,
    '3_prime_UTR_variant': 19,
    'non_coding_transcript_exon_variant': 18,
    'intron_variant': 17,
    'NMD_transcript_variant': 16,
    'non_coding_transcript_variant': 15,
    '2KB_upstream_variant': 14,
    'upstream_gene_variant': 13,
    '2KB_downstream_variant': 12,
    'downstream_gene_variant': 11,
    'TFBS_ablation': 10,
    'TFBS_amplification': 9,
    'TF_binding_site_variant': 8,
    'regulatory_region_ablation': 7,
    'regulatory_region_amplification': 6,
    'regulatory_region_variant': 5,
    'feature_elongation': 4,
    'feature_truncation': 3,
    'feature_variant': 2,
    'intergenic_variant': 1,
};
//# sourceMappingURL=SmallVariant.js.map