import { ConfidenceInterval } from './ConfidenceInterval';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Coordinates {
    @JsonProperty('chromosome', String)
    chromosome: string = '';

    @JsonProperty('start', Number)
    start: number = 0; // int

    @JsonProperty('end', Number)
    end: number = 0; // end

    @JsonProperty('ciStart', ConfidenceInterval, true)
    ciStart?: ConfidenceInterval = undefined;

    @JsonProperty('ciEnd', ConfidenceInterval, true)
    ciEnd?: ConfidenceInterval = undefined;
};
