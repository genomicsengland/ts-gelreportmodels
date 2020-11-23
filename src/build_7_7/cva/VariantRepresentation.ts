import { JsonObject, JsonProperty } from "json2typescript";
import { VariantAvro } from "../biodata";

@JsonObject
export class VariantRepresentation {
  @JsonProperty("assembly", String)
  assembly: string = ""; // Assembly

  @JsonProperty("annotatorVersion", String, true)
  annotatorVersion?: string = undefined;

  @JsonProperty("annotationsVersion", String, true)
  annotationsVersion?: string = undefined;

  @JsonProperty("variant", VariantAvro)
  variant: VariantAvro = new VariantAvro();
}
