export declare class Prognosis {
    /** URL where reference information for this prognosis can be found */
    referenceUrl: string;
    /**
     * Prognosis classification (defined as favourable or unfavourable),
     * in the case that the direction of the prognosis is not known
     * altered_prognosis should be used
     */
    prognosis?: string;
    /** Source if known */
    source?: string;
    /** References */
    references?: Array<string>;
    /** Full description of the associated prognosis */
    description?: string;
    /**
     * If true, the association was made at the variant level, if not the
     * association was made at Genomic Entity level
     */
    variantActionable: boolean;
}
