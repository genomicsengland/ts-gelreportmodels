import { Identifier } from "./Identifier";
/** A genomic feature */
export declare class GenomicEntity {
    /** The type of the genomic entity */
    type: string;
    /** Ensembl identifier for the feature (e.g, ENST00000544455) */
    ensemblId?: string;
    /** The HGNC gene symbol. This field is optional, BUT it should be filled if possible */
    geneSymbol?: string;
    /** Others identifiers for this genomic feature */
    otherIds: Array<Identifier>;
}
