import { VariantIdentifiers } from './VariantIdentifiers';
import { AlleleFrequency } from './AlleleFrequency';
/** Some additional variant attributes */
export declare class VariantAttributes {
    /** gDNA change, HGVS nomenclature (e.g.: g.476A>T) */
    genomicChanges?: Array<string>;
    /** cDNA change, HGVS nomenclature (e.g.: c.76A>T) */
    cdnaChanges?: Array<string>;
    /** Protein change, HGVS nomenclature (e.g.: p.Lys76Asn) */
    proteinChanges?: Array<string>;
    /**
     * Any additional information in a free text field. For example a quote
     * from a paper
     */
    additionalTextualVariantAnnotations?: {
        [name: string]: string;
    };
    /**
     * Additional references for ths variant. For example HGMD ID or Pubmed Id
     */
    references?: {
        [name: string]: string;
    };
    variantIdentifiers?: VariantIdentifiers;
    /** A list of population allele frequencies */
    alleleFrequencies?: Array<AlleleFrequency>;
    /**
     * Additional numeric variant annotations for this variant. For Example
     * (Allele Frequency, sift, polyphen, mutationTaster, CADD. ..)
     */
    additionalNumericVariantAnnotations?: {
        [name: string]: number;
    };
    /** Comments */
    comments?: Array<string>;
    /** List of allele origins for this variant in this report */
    alleleOrigins?: Array<string>;
    /**
     * Largest reference interrupted homopolymer length intersecting with the
     * indel
     */
    ihp?: number;
    /** Flag indicating if the variant is recurrently reported */
    recurrentlyReported?: boolean;
    /**
     * Average tier1 number of basecalls filtered from original read depth
     * within 50 bases
     */
    fdp50?: number;
    /**
     * Map of other attributes where keys are the attribute names and values
     * are the attributes
     */
    others?: {
        [name: string]: string;
    };
}
