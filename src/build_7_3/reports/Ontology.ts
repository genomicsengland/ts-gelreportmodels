import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The ontology to which a standard term belongs
 */
@JsonObject
export class Ontology {
    /** The ontology to which a standard term belongs */
    @JsonProperty('version', String)
    version: string = '';

    /** The ontology to which a standard term belongs */
    @JsonProperty('name', String)
    name: string = '';
}
