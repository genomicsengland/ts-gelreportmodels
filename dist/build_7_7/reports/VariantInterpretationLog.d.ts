import { VariantCoordinates } from "./";
import JSONHelper from "../../utils/JSONHelper";
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
    variantCoordinates: VariantCoordinates;
    user: User;
    timestamp: string;
    familyId: string;
    caseId: string;
    variantValidation?: VariantValidation;
    comments?: string[];
    variantClassification: GuidelineBasedVariantClassification;
    Artifact?: boolean;
    decisionSupportSystemFilters?: {
        [name: string]: string;
    };
}
