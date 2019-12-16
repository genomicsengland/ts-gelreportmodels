import { Variant } from "./Variant";
import { VariantCall } from "../reports";
import { Property } from "../biodata";
export declare class ObservedVariant {
  date: string;
  assembly: string;
  variant: Variant;
  variantCall?: VariantCall;
  validated: boolean;
  additionalProperties: Array<Property>;
}
