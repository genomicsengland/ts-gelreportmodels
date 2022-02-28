/**
 * The variant coordinates representing uniquely a small variant. No
 * multi-allelic variant supported, alternate only represents one alternate
 * allele.
 */
export declare class VariantCoordinates {
    /** Chromosome without "chr" prefix (e.g. X rather than chrX) */
    chromosome: string;
    /** Genomic position */
    position: number;
    /** The reference bases. */
    reference: string;
    /** The alternate bases */
    alternate: string;
    /** The assembly to which this variant corresponds */
    assembly: string;
    toVerboseId(): string;
}
