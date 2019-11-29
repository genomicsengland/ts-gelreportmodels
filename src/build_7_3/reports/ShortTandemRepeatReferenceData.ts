import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ShortTandemRepeatReferenceData {
    @JsonProperty('repeatedSequence', String)
    repeatedSequence: string = '';

    @JsonProperty('pathogenic_number_of_repeats_threshold', Number)
    pathogenic_number_of_repeats_threshold: number = 0; // type:int

    @JsonProperty('normal_number_of_repeats_threshold', Number)
    normal_number_of_repeats_threshold: number = 0; // type:int
};
