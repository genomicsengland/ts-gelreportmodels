import { AcmgEvidence } from "./AcmgEvidence";
import { AcmgEvidenceCategory } from "./AcmgEvidenceCategory";
/**
 * Full record for the ACMG variant classification, including all selected
 * evidences and the final classification.
 */
export declare class AcmgVariantClassification {
    /**
     * Details of ACMG criteria used to score this variant
     */
    acmgEvidences: Array<AcmgEvidence>;
    /**
     * Final classification selected by user
     */
    clinicalSignificance: string;
    /**
     * Classification computed from ACMG scores
     */
    assesment?: string;
    /**
     * ACMG evidence categories for which the user has indicated there is no evidence available
     */
    noAcmgEvidence?: Array<AcmgEvidenceCategory>;
}
