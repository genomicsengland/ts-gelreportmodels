import { JsonObject, JsonProperty } from "json2typescript";

/**
 * Inbreeding coefficient
 */
@JsonObject
export class InbreedingCoefficient {
    /**
     * This is the sample id against which the coefficient was estimated
     */
    @JsonProperty('sampleId', String)
    sampleId: string = '';

    /**
     * Name of program used to calculate the coefficient
     */
    @JsonProperty('program', String)
    program: string = '';

    /**
     * Version of the programme
     */
    @JsonProperty('version', String)
    version: string = '';

    /**
     * Where various methods for estimation exist, which method was used.
     */
    @JsonProperty('estimationMethod', String)
    estimationMethod: string = '';

    /**
     * Inbreeding coefficient ideally a real number in [0,1]
     */
    @JsonProperty('coefficient', Number)
    coefficient: number = 0; // double

    /**
     * Standard error of the Inbreeding coefficient
     */
    @JsonProperty('standardError', Number, true)
    standardError?: number = undefined; // double
};
