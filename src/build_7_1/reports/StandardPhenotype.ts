import { Ontology } from './Ontology';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Standard phenotype term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
*/
@JsonObject
export class StandardPhenotype {
    @JsonProperty('id', String)
    id: string = '';

    @JsonProperty('name', String, true)
    name?: string = undefined;

    @JsonProperty('namespace', String, true)
    namespace?: string = undefined;

    @JsonProperty('definition', String, true)
    definition?: string = undefined;

    @JsonProperty('comment', String, true)
    comment?: string = undefined;

    @JsonProperty('alternativeIds', String, true)
    alternativeIds?: string = undefined;

    @JsonProperty('synonyms', String, true)
    synonyms?: string = undefined;

    @JsonProperty('isA', String, true)
    isA?: string = undefined;

    /** The ontology (e.g.: HPO, OMIM, SNOMED CT) */
    @JsonProperty('ontology', Ontology, true)
    ontology: Ontology = new Ontology;

    /** The match between the non standard phenotype and this term when in silico */
    @JsonProperty('matchScore', Number, true)
    matchScore?: number = undefined;
};