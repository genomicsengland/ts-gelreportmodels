/**
 * AcmgEvidence. This should be buit for each one of the evidences assing to a
 * variants following the ACMG guidelines. An AcmgEvidence, should map with
 * one of the criteria defined, i.e, PVS1, BA1, PM1...
 */
export declare class AcmgEvidence {
    /**
     * Evidence category as defined in ACMG guidelines
     */
    category: string;
    /**
     * Evidence type: bening or pathogenic
     */
    type: string;
    /**
     * Weight categories as described in ACMG guideline
     */
    weight: string;
    /**
     * modifier of the strength, together define each creteria, i.e the 2 in PM2
     */
    modifier: number;
    /**
     * Description of the evidence
     */
    description?: string;
}
