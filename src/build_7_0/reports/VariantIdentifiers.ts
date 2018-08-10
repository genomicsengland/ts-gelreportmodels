import {JsonObject, JsonProperty, JsonConvert} from "json2typescript";
import { Identifier } from './Identifier';

@JsonObject
export class VariantIdentifiers {
    /** Variant identifier in dbSNP */
    @JsonProperty("dbSnpId", String, true)
    dbSnpId?: string = undefined;

    /** Variant identifier in Cosmic */
    @JsonProperty("cosmicIds", [String], true)
    cosmicIds?: Array<string> = undefined;

    /** Variant identifier in ClinVar */
    @JsonProperty("clinVarIds", [String], true)
    clinVarIds?: Array<string> = undefined;

    @JsonProperty("otherIds", [Identifier], true)
    otherIds?: Array<Identifier> = undefined;
};
