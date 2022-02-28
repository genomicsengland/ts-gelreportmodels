import { UserComment } from "./UserComment";
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
     * Evidence type: benign or pathogenic
     */
    type: string;
    /**
     * Default strength for criterion as defined in Table 3 of ACMG guidelines (Richards et al 2015). e.g. PM2 would be "moderate"
     */
    weight: string;
    /**
     * The number suffix at the end of the ACMG criteria code e.g PM2 would be 2
     */
    modifier: number;
    /**
     * The strength this criterion has been used at in this interpretation. e.g. if PM2 was only used at "supporting" rather than "moderate", the activation strength would be "supporting"
     */
    activationStrength: string;
    /**
     * Description of the evidence
     */
    description?: string;
    /**
     * User comments attached to this ACMG criteria in this case
     */
    comments?: Array<UserComment>;
}
