import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Date {
    @JsonProperty('year', Number)
    year: number = 0;

    @JsonProperty('month', Number)
    month?: number = undefined;

    @JsonProperty('day', Number)
    day?: number = undefined;
};
