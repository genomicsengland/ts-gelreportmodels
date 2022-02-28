import { ConfidenceInterval } from "./ConfidenceInterval";
export declare class Coordinates {
    /**
     * The assembly to which this variant corresponds
     */
    assembly: string;
    /**
     * Chromosome without "chr" prefix (e.g. X rather than chrX)
     */
    chromosome: string;
    /**
     * Start genomic position for variant (1-based)
     */
    start: number;
    /**
     * End genomic position for variant
     */
    end: number;
    ciStart?: ConfidenceInterval;
    ciEnd?: ConfidenceInterval;
    toVerboseId(): string;
}
