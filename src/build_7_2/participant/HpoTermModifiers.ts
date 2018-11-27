import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class HpoTermModifiers {
    @JsonProperty('laterality', String, true)
    laterality?: string = undefined;  // Laterality

    @JsonProperty('progression', String, true)
    progression?: string = undefined;  // Progression

    @JsonProperty('severity', String, true)
    severity?: string = undefined;  // Severity

    @JsonProperty('spatialPattern', String, true)
    spatialPattern?: string = undefined; // SpatialPattern
};
