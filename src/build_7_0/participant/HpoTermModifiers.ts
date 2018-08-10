import { Laterality } from './Laterality';
import { Progression } from './Progression';
import { Severity } from './Severity';
import { SpatialPattern } from './SpatialPattern';
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
