import { StandardPhenotype } from './StandardPhenotype';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Oontology term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
 */
@JsonObject
export class Phenotypes {
    /** The non standardised phenotypes (i.e.: may be free text) */
    @JsonProperty('nonStandardPhenotype', [String], true)
    nonStandardPhenotype?: Array<string> = undefined;

    /** The standardised phenotypes (i.e.: controlled terminology) */
    @JsonProperty('standardPhenotypes', [StandardPhenotype], true)
    standardPhenotypes?: Array<StandardPhenotype> = undefined;
};
