import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Topography {
    @JsonProperty('topographyICD', String, true)
    topographyICD?: string = undefined;

    @JsonProperty('topographySnomedCT', String, true)
    topographySnomedCT?: string = undefined;

    @JsonProperty('topographySnomedRT', String, true)
    topographySnomedRT?: string = undefined;
};
