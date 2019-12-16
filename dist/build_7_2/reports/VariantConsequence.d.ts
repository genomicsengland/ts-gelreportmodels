/**
 * A variant consequence as defined by the Sequence Ontology (SO)
 * (e.g.: id = SO:0001816 ; name = non synonymous) NOTE: this record is
 * equivalent to OpenCB's ConsequenceType, but we want to avoid naming
 * collisions
 */
export declare class VariantConsequence {
  /** The SO term identifier (e.g.: SO:0001816) */
  id: string;
  /** The SO term name (e.g.: non synonymous) */
  name?: string;
}
