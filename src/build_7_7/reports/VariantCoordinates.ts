import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The variant coordinates representing uniquely a small variant. No
 * multi-allelic variant supported, alternate only represents one alternate
 * allele.
 */
@JsonObject
export class VariantCoordinates {
  /** Chromosome */
  @JsonProperty("chromosome", String)
  chromosome: string = "";

  /** Genomic position */
  @JsonProperty("position", Number)
  position: number = 0;

  /** The reference bases. */
  @JsonProperty("reference", String)
  reference: string = "";

  /** The alternate bases */
  @JsonProperty("alternate", String)
  alternate: string = ""; // one of assemblyValues

  /** The assembly to which this variant corresponds */
  @JsonProperty("assembly", String)
  assembly: string = ""; // Assembly

  toVerboseId() {
    return `${this.chromosome}:${this.position}:${this.reference}:${this.alternate}`;
  }
}
