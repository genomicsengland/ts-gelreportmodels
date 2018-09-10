import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The population allele frequency of a given variant in a given study and
 * optionally population
 */
@JsonObject
export class AlleleFrequency {
    /** The study from where this data comes from */
    @JsonProperty('study', String)
    study: string = '';

    /** The specific population where this allele frequency belongs */
    @JsonProperty('population', String)
    population: string = '';

    /** The frequency of the alternate allele */
    @JsonProperty('alternateFrequency', Number)
    alternateFrequency: number = 0;
};
