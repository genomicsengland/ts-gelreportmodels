import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase 3
 * populations
 */
@JsonObject
export class ChiSquare1KGenomesPhase3Pop {
    /** 1K Super Population */
    @JsonProperty('kgSuperPopCategory', String)
    kgSuperPopCategory: string = '';  // KgSuperPopCategory

    /** 1K Population */
    @JsonProperty('kgPopCategory', String, true)
    kgPopCategory?: string = undefined;  // KgPopCategory

    /** 
     * Chi-square test for goodness of fit of this sample to this 1000 Genomes
     * Phase 3 population
     */
    @JsonProperty('chiSquare', Number, true)
    chiSquare: number = 0; // double
};
