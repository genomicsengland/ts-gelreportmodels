import { Coordinates } from "./Coordinates";
import { NumberOfCopies } from "./NumberOfCopies";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ShortTandemRepeatDetails {

  /**
   *Short tandem repeat coordinates
   */
  @JsonProperty("shortTandemRepeatCoordinates", Coordinates)
  shortTandemRepeatCoordinates: Coordinates = new Coordinates();

  /**
   * Short tandem repeat copy number for each allele
   */
  @JsonProperty("numberOfCopies", NumberOfCopies, true)
  numberOfCopies?: NumberOfCopies = undefined;
}
