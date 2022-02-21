import { Coordinates } from "./Coordinates";
import { NumberOfCopies } from "./NumberOfCopies";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class StructuralVariantDetails {
  @JsonProperty("variantType", String)
  variantType: string = ""; // StructuralVariantType

  @JsonProperty("structuralVariantCoordinates", Coordinates)
  structuralVariantCoordinates: Coordinates = new Coordinates();

  @JsonProperty("numberOfCopies", NumberOfCopies, true)
  numberOfCopies?: NumberOfCopies = undefined;
}
