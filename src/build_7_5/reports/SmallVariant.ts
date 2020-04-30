import { VariantCoordinates } from "./VariantCoordinates";
import { VariantCall } from "./VariantCall";
import { ReportEvent } from "./ReportEvent";
import { VariantAttributes } from "./VariantAttributes";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";

/**
 * A reported variant
 */
@JsonObject
export class SmallVariant extends JSONHelper {
  /**
   * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
   * other contif in the reference genome, no "chr" prefix is expected.
   * Position is 1- based. Reference and alternate should never be empty or
   * any character representing emptiness (e.g.: . or -), a VCF-like indel
   * representation is expected.
   */
  @JsonProperty("variantCoordinates", VariantCoordinates)
  variantCoordinates: VariantCoordinates = new VariantCoordinates();

  /**
   * List of variant calls across all samples under analysis for this variant
   */
  @JsonProperty("variantCalls", [VariantCall])
  variantCalls: Array<VariantCall> = [];

  /**
   * The list of report events for this variant across multiple modes of
   * inheritance and panels
   */
  @JsonProperty("reportEvents", [ReportEvent])
  reportEvents: Array<ReportEvent> = [];

  @JsonProperty("variantAttributes", VariantAttributes, true)
  variantAttributes?: VariantAttributes = undefined;

  get mostSevereConsequenceType() {
    let maxValue: [number, string] = [0, ""];

    this.reportEvents.forEach(reportEvent => {
      reportEvent.variantConsequences.forEach(vc => {
        if (vc.name) {
          if (SOSeverity[vc.name] > maxValue[0]) {
            maxValue = [SOSeverity[vc.name], vc.name];
          }
        }
      });
    });

    return maxValue[1];
  }
}

// same mapping as in https://github.com/opencb/cellbase/blob/develop/cellbase-core/src/main/java/org/opencb/cellbase/core/variant/annotation/VariantAnnotationUtils.java#L424
const SOSeverity = {
  copy_number_change: 42,
  transcript_ablation: 41,
  structural_variant: 40,
  splice_acceptor_variant: 39,
  splice_donor_variant: 38,
  stop_gained: 37,
  frameshift_variant: 36,
  stop_lost: 35,
  terminator_codon_variant: 34,
  start_lost: 34,
  initiator_codon_variant: 33,
  transcript_amplification: 32,
  inframe_insertion: 31,
  inframe_deletion: 30,
  inframe_variant: 29,
  missense_variant: 28,
  splice_region_variant: 27,
  incomplete_terminal_codon_variant: 26,
  stop_retained_variant: 25,
  start_retained_variant: 24,
  synonymous_variant: 23,
  coding_sequence_variant: 22,
  mature_miRNA_variant: 21,
  "5_prime_UTR_variant": 20,
  "3_prime_UTR_variant": 19,
  non_coding_transcript_exon_variant: 18,
  intron_variant: 17,
  NMD_transcript_variant: 16,
  non_coding_transcript_variant: 15,
  "2KB_upstream_variant": 14,
  upstream_gene_variant: 13,
  "2KB_downstream_variant": 12,
  downstream_gene_variant: 11,
  TFBS_ablation: 10,
  TFBS_amplification: 9,
  TF_binding_site_variant: 8,
  regulatory_region_ablation: 7,
  regulatory_region_amplification: 6,
  regulatory_region_variant: 5,
  feature_elongation: 4,
  feature_truncation: 3,
  feature_variant: 2,
  intergenic_variant: 1
};
