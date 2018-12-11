import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class TrialLocation {
    @JsonProperty('name', String, true)
    name?: string = undefined;

    @JsonProperty('city', String, true)
    city?: string = undefined;

    @JsonProperty('country', String, true)
    country?: string = undefined;

    @JsonProperty('zip', String, true)
    zip?: string = undefined;
};
