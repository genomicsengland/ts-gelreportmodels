import { Ontology } from "./Ontology";
/**
 * Standard phenotype term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
 */
export declare class StandardPhenotype {
    id: string;
    name?: string;
    namespace?: string;
    definition?: string;
    comment?: string;
    alternativeIds?: string;
    synonyms?: string;
    isA?: string;
    /** The ontology (e.g.: HPO, OMIM, SNOMED CT) */
    ontology: Ontology;
    /** The match between the non standard phenotype and this term when in silico */
    matchScore?: number;
}
