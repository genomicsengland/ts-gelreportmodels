import { JsonObject, JsonProperty } from "json2typescript";

/**
 * A variant consequence as defined by the Sequence Ontology (SO)
 * (e.g.: id = SO:0001816 ; name = non synonymous) NOTE: this record is
 * equivalent to OpenCB's ConsequenceType, but we want to avoid naming
 * collisions
 */
@JsonObject
export class VariantConsequence {
  /** The SO term identifier (e.g.: SO:0001816) */
  @JsonProperty("id", String)
  id: string = "";

  /** The SO term name (e.g.: non synonymous) */
  @JsonProperty("name", String, true)
  name?: string = undefined;
}
