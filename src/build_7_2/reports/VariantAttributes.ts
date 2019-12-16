import { VariantIdentifiers } from "./VariantIdentifiers";
import { AlleleFrequency } from "./AlleleFrequency";
import { JsonObject, JsonProperty } from "json2typescript";

/** Some additional variant attributes */
@JsonObject
export class VariantAttributes {
  /** gDNA change, HGVS nomenclature (e.g.: g.476A>T) */
  @JsonProperty("genomicChanges", [String], true)
  genomicChanges?: Array<string> = undefined;

  /** cDNA change, HGVS nomenclature (e.g.: c.76A>T) */
  @JsonProperty("cdnaChanges", [String], true)
  cdnaChanges?: Array<string> = undefined;

  /** Protein change, HGVS nomenclature (e.g.: p.Lys76Asn) */
  @JsonProperty("proteinChanges", [String], true)
  proteinChanges?: Array<string> = undefined;

  /**
   * Any additional information in a free text field. For example a quote
   * from a paper
   */
  @JsonProperty("additionalTextualVariantAnnotations", Object, true)
  additionalTextualVariantAnnotations?: {
    [name: string]: string;
  } = undefined;

  /**
   * Additional references for ths variant. For example HGMD ID or Pubmed Id
   */
  @JsonProperty("references", Object, true)
  references?: {
    [name: string]: string;
  } = undefined;

  @JsonProperty("variantIdentifiers", VariantIdentifiers, true)
  variantIdentifiers?: VariantIdentifiers = undefined;

  /** A list of population allele frequencies */
  @JsonProperty("alleleFrequencies", [AlleleFrequency], true)
  alleleFrequencies?: Array<AlleleFrequency> = undefined;

  /**
   * Additional numeric variant annotations for this variant. For Example
   * (Allele Frequency, sift, polyphen, mutationTaster, CADD. ..)
   */
  @JsonProperty("additionalNumericVariantAnnotations", Object, true)
  additionalNumericVariantAnnotations?: {
    [name: string]: number;
  } = undefined;

  /** Comments */
  @JsonProperty("comments", [String], true)
  comments?: Array<string> = undefined;

  /** List of allele origins for this variant in this report */
  @JsonProperty("alleleOrigins", [String], true)
  alleleOrigins?: Array<string> = undefined; // AlleleOrigin

  /**
   * Largest reference interrupted homopolymer length intersecting with the
   * indel
   */
  @JsonProperty("ihp", Number, true)
  ihp?: number = undefined;

  /** Flag indicating if the variant is recurrently reported */
  @JsonProperty("recurrentlyReported", Boolean, true)
  recurrentlyReported?: boolean = undefined;

  /**
   * Average tier1 number of basecalls filtered from original read depth
   * within 50 bases
   */
  @JsonProperty("fdp50", Number, true)
  fdp50?: number = undefined;

  /**
   * Map of other attributes where keys are the attribute names and values
   * are the attributes
   */
  @JsonProperty("others", Object, true)
  others?: {
    [name: string]: string;
  } = undefined;
}
