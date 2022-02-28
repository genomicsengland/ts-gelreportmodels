import { VariantCoordinates } from "./";
import JSONHelper from "../../utils/JSONHelper";
import { UserComment } from "./UserComment";
export declare class User {
    username: string;
    role: string;
    email: string;
    groups: string[];
}
export declare class VariantValidation {
    validationTechnology: string;
    validationResult: string;
}
export declare class AcmgEvidence {
    category: string;
    type: string;
    weight: string;
    modifier: number;
    activationStrength?: string;
    description?: string;
}
export declare class AcmgVariantClassification {
    acmgEvidences: AcmgEvidence[];
    clinicalSignificance: string;
    assessment?: string;
}
export declare class AmpEvidence {
    /**
      AMP evidence type according to Guidlines, i.e germline_database_presence
      */
    type: string;
    /**
      Assessment for AMP evidence, i.e Present in ClinVar
      */
    evidenceAssessment: string;
}
export declare class AmpClincialOrExperimentalEvidence {
    /**
      As denined in AMP guidelines: therapeutic, diagnosis or prognosis
      */
    category: string;
    /**
      As denined in AMP guidelines: levelA, levelB, levelC, levelD
      */
    level: string;
    /**
      Description of the evidence
      */
    description?: string;
}
export declare class AmpVariantClassification {
    ampEvidences: AmpEvidence[];
    ampTier: string;
    ampClincialOrExperimentalEvidence?: AmpClincialOrExperimentalEvidence[];
    assessment?: string;
}
export declare class GuidelineBasedVariantClassification {
    acmgVariantClassification?: AcmgVariantClassification;
    ampVariantClassification?: AmpVariantClassification;
}
export declare class VariantInterpretationLog extends JSONHelper {
    /**
     * Variant coordinates
     */
    variantCoordinates: VariantCoordinates;
    /**
     * User who set classification
     */
    user: User;
    /**
     * Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
     */
    timestamp: string;
    /**
     * GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
     */
    familyId: string;
    /**
     * Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
     */
    caseId: string;
    /**
     * Independent validation of variant
     */
    variantValidation?: VariantValidation;
    /**
     * User comments attached to this variant in this case
     */
    comments?: UserComment[];
    /**
     * Guideline-based variant classification
     */
    variantClassification: GuidelineBasedVariantClassification;
    /**
     * User has marked the variant as an artefact
     */
    Artifact?: boolean;
    /**
     * Filter settings applied at time variant was classified
     */
    decisionSupportSystemFilters?: {
        [name: string]: string;
    };
}
