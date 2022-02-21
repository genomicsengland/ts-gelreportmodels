import { ConfidenceInterval } from "./ConfidenceInterval";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Coordinates {
  /**
   * The assembly to which this variant corresponds
   */
  @JsonProperty("assembly", String)
  assembly: string = ""; // Asembly

  /**
   * Chromosome without "chr" prefix (e.g. X rather than chrX)
   */
  @JsonProperty("chromosome", String)
  chromosome: string = "";

  /**
   * Start genomic position for variant (1-based)
   */
  @JsonProperty("start", Number)
  start: number = 0; // int

  /**
   * End genomic position for variant
   */
  @JsonProperty("end", Number)
  end: number = 0; // end

  @JsonProperty("ciStart", ConfidenceInterval, true)
  ciStart?: ConfidenceInterval = undefined;

  @JsonProperty("ciEnd", ConfidenceInterval, true)
  ciEnd?: ConfidenceInterval = undefined;

  toVerboseId() {
    return `${this.chromosome}:${this.start}:${this.end}`;
  }
}
