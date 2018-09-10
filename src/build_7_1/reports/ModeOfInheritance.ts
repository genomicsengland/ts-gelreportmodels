/** An enumeration for the different mode of inheritances */
export enum ModeOfInheritance {
    /** 
     * `monoallelic`: MONOALLELIC, autosomal or pseudoautosomal, imprinted
     * status unknown
     */
    monoallelic = 'monoallelic',

    /** 
     * `monoallelic_not_imprinted`: MONOALLELIC, autosomal or pseudoautosomal,
     * not imprinted
     */
    monoallelic_not_imprinted = 'monoallelic_not_imprinted',

    /** 
     * `monoallelic_maternally_imprinted`: MONOALLELIC, autosomal or 
     * pseudoautosomal, maternally imprinted (paternal allele expressed)
     */
    monoallelic_maternally_imprinted = 'monoallelic_maternally_imprinted',

    /** 
     * `monoallelic_paternally_imprinted`: MONOALLELIC, autosomal or 
     * pseudoautosomal, paternally imprinted (maternal allele expressed)
     */
    monoallelic_paternally_imprinted = 'monoallelic_paternally_imprinted',

    /** `biallelic`: BIALLELIC, autosomal or pseudoautosomal */
    biallelic = 'biallelic',

    /** 
     * `monoallelic_and_biallelic`: BOTH monoallelic and biallelic, autosomal
     * or pseudoautosomal
     */
    monoallelic_and_biallelic = 'monoallelic_and_biallelic',

    /** 
     * `monoallelic_and_more_severe_biallelic`: BOTH monoallelic and biallelic,
     * autosomal or pseudoautosomal (but BIALLELIC mutations cause a more
     * SEVERE disease form), autosomal or pseudoautosomal
     */
    monoallelic_and_more_severe_biallelic = 'monoallelic_and_more_severe_biallelic',

    /** 
     * `xlinked_biallelic`: X-LINKED: hemizygous mutation in males, biallelic
     * mutations in females
     */
    xlinked_biallelic = 'xlinked_biallelic',

    /**
     * `xlinked_monoallelic`: X linked: hemizygous mutation in males,
     * monoallelic mutations in females may cause disease (may be less severe,
     * later onset than males)
     */
    xlinked_monoallelic = 'xlinked_monoallelic',

    /** `mitochondrial`: MITOCHONDRIAL */
    mitochondrial = 'mitochondrial',

    /** `unknown`: Unknown */
    unknown = 'unknown',
    
    na = 'na'
};
