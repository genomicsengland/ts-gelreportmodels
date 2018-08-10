import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class AlgorithmBasedVariantClassification {
    /** Name of the applied algorithm */
    @JsonProperty('AlgorithmName', String)
    AlgorithmName: string = '';
    
    @JsonProperty('classification', String)
    classification: string = '';

    @JsonProperty('rank', Number, true)
    rank?: number = undefined;

    @JsonProperty('score', Number, true)
    score?: number = undefined;
};
