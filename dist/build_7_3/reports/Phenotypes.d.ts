import { StandardPhenotype } from "./StandardPhenotype";
/**
 * Oontology term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
 */
export declare class Phenotypes {
  /** The non standardised phenotypes (i.e.: may be free text) */
  nonStandardPhenotype?: Array<string>;
  /** The standardised phenotypes (i.e.: controlled terminology) */
  standardPhenotypes?: Array<StandardPhenotype>;
}
