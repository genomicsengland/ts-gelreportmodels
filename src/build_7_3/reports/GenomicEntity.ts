import { Identifier } from "./Identifier";
import { JsonObject, JsonProperty } from "json2typescript";

/** A genomic feature */
@JsonObject
export class GenomicEntity {
  /** The type of the genomic entity */
  @JsonProperty("type", String)
  type: string = ""; // GenomicEntityType

  /** Ensembl identifier for the feature (e.g, ENST00000544455) */
  @JsonProperty("ensemblId", String, true)
  ensemblId?: string = undefined;

  /** The HGNC gene symbol. This field is optional, BUT it should be filled if possible */
  @JsonProperty("geneSymbol", String, true)
  geneSymbol?: string = undefined;

  /** Others identifiers for this genomic feature */
  @JsonProperty("otherIds", [Identifier])
  otherIds: Array<Identifier> = [];
}
