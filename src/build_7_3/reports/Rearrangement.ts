import { Coordinates } from "./Coordinates";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Rearrangement {
  @JsonProperty("leftCoordinates", Coordinates)
  leftCoordinates: Coordinates = new Coordinates();

  @JsonProperty("rightCoordinates", Coordinates)
  rightCoordinates: Coordinates = new Coordinates();

  @JsonProperty("orientation", String)
  orientation: string = ""; // Orientation

  @JsonProperty("leftInsSeq", String, true)
  leftInsSeq?: string = undefined;

  @JsonProperty("rightInsSeq", String, true)
  rightInsSeq?: string = undefined;
}
