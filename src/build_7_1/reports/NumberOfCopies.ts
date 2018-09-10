import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class NumberOfCopies {
    /** Number of copies given by the caller in one of the allele */
    @JsonProperty('numberOfCopies', Number)
    numberOfCopies: number = 0;

    @JsonProperty('confidenceIntervalMaximum', Number)
    confidenceIntervalMaximum?: number = undefined;

    @JsonProperty('confidenceIntervalMinimum', Number)
    confidenceIntervalMinimum?: number = undefined;
};
