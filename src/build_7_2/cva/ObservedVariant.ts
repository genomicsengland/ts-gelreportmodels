import { Variant } from "./Variant";
import { VariantCall } from "../reports";
import { Property } from "../biodata";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ObservedVariant {
    @JsonProperty('date', String)
    date: string = '';

    @JsonProperty('assembly', String)
    assembly: string = '';  // Asembly

    @JsonProperty('variant', Variant)
    variant: Variant = new Variant;

    @JsonProperty('variantCall', VariantCall, true)
    variantCall?: VariantCall = undefined;

    @JsonProperty('validated', Boolean)
    validated: boolean = false;

    @JsonProperty('additionalProperties', [Property])
    additionalProperties: Array<Property> = [];
};
