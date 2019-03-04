import { VariantRepresentation } from "./VariantRepresentation";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The map of variants in the different assemblies
 */
@JsonObject
export class Variant {
    /**
     * A list of variant representations
     */
    @JsonProperty('variants', [VariantRepresentation])
    variants: Array<VariantRepresentation> = [];
};