import { Identifier } from "./Identifier";
export declare class VariantIdentifiers {
    /** Variant identifier in dbSNP */
    dbSnpId?: string;
    /** Variant identifier in Cosmic */
    cosmicIds?: Array<string>;
    /** Variant identifier in ClinVar */
    clinVarIds?: Array<string>;
    otherIds?: Array<Identifier>;
}
