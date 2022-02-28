import { VariantValidation } from "./VariantValidation";
import { User } from "./User";
import { UserComment } from "./UserComment";
import { StructuralVariantDetails } from "./StructuralVariantDetails";
export declare class StructuralVariantInterpretationLog {
    /**
    Variant details
    */
    variant: StructuralVariantDetails;
    /**
    User who set classification
    */
    user: User;
    /**
    Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
    */
    timestamp: string;
    /**
    GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
    */
    groupId: string;
    /**
    Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
    */
    caseId: string;
    /**
    Independent validation of variant
    */
    variantValidation?: VariantValidation;
    /**
    User comments attached to this variant in this case
    */
    comments?: UserComment[];
    /**
    Variant classification
    */
    variantClassification: string;
    /**
    User has marked the variant as an artefact
    */
    artifact?: boolean;
    /**
    Filter settings applied at time variant was classified
    */
    decisionSupportSystemFilters?: {
        [name: string]: string;
    };
}
