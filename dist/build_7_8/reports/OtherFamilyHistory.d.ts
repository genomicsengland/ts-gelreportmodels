/**
 * Family history for secondary findings. Arrays of strings describing
 * discrete family history phenotypes. Usually: `EndocrineTumours`,
 * `colorectal`, `BreastOvarian` and `HDOrStroke` but can be others
 */
export declare class OtherFamilyHistory {
    /**
     * Relevant Maternal family history
     */
    maternalFamilyHistory?: Array<string>;
    /**
     * Relevant Paternal family history
     */
    paternalFamilyHistory?: Array<string>;
}
