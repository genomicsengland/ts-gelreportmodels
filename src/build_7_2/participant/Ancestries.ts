import { ChiSquare1KGenomesPhase3Pop } from './ChiSquare1KGenomesPhase3Pop';
import { JsonObject, JsonProperty } from 'json2typescript';

/** Ancestries, defined as Ethnic category(ies) and Chi-square test */
@JsonObject
export class Ancestries {
    /** Mother's Ethnic Origin */
    @JsonProperty('mothersEthnicOrigin', String, true)
    mothersEthnicOrigin?: string = undefined;  // EthnicCategory

    /** Mother's Ethnic Origin Description */
    @JsonProperty('mothersOtherRelevantAncestry', String, true)
    mothersOtherRelevantAncestry?: string;

    /** Father's Ethnic Origin */
    @JsonProperty('fathersEthnicOrigin', String, true)
    fathersEthnicOrigin?: string = undefined;  // EthnicCategory

    /** Father's Ethnic Origin Description */
    @JsonProperty('fathersOtherRelevantAncestry', String, true)
    fathersOtherRelevantAncestry?: string = undefined;

    /**
     * Chi-square test for goodness of fit of this sample to 1000 Genomes
     * Phase 3 populations
     */
    @JsonProperty('chiSquare1KGenomesPhase3Pop', [ChiSquare1KGenomesPhase3Pop], true)
    chiSquare1KGenomesPhase3Pop?: Array<ChiSquare1KGenomesPhase3Pop> = undefined;
};
