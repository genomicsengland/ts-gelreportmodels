import { JsonObject, JsonProperty } from "json2typescript";
import { Coordinates } from "./Coordinates";

@JsonObject
export class BreakPoint {
    @JsonProperty('coordinates', Coordinates)
    coordinates: Coordinates = new Coordinates;

    @JsonProperty('reference', String, true)
    reference?: string = undefined;

    @JsonProperty('alternate', String, true)
    alternate?: string = undefined;

    @JsonProperty('info', Object, true)
    info?: {
        [name: string]: string;
    } = undefined;
};
