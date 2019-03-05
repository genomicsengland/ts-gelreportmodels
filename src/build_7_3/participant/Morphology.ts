import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Morphology {
    @JsonProperty('morphologyICD', String, true)
    morphologyICD?: string = undefined;

    @JsonProperty('morphologySnomedCT', String, true)
    morphologySnomedCT?: string = undefined;

    @JsonProperty('morphologySnomedRT', String, true)
    morphologySnomedRT?: string = undefined;
};
