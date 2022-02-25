import { JsonObject, JsonProperty } from "json2typescript";
import { VariantCoordinates } from "./";
import JSONHelper from "../../utils/JSONHelper";
import { UserComment } from "./UserComment";

@JsonObject
export class User {
  @JsonProperty("username", String)
  username: string = "";

  @JsonProperty("role", String)
  role: string = "";

  @JsonProperty("email", String)
  email: string = "";

  @JsonProperty("groups", [String])
  groups: string[] = [];
}

@JsonObject
export class VariantValidation {
  @JsonProperty("validationTechnology", String)
  validationTechnology: string = "";

  @JsonProperty("validationResult", String)
  validationResult: string = "";  // ValidationResult
}

@JsonObject
export class AcmgEvidence {
  @JsonProperty("category", String)
  category: string = "";

  @JsonProperty("type", String)
  type: string = "";

  @JsonProperty("weight", String)
  weight: string = "";

  @JsonProperty("modifier", Number)
  modifier: number = 0;

  @JsonProperty("activationStrength", String, true)
  activationStrength?: string = undefined;

  @JsonProperty("description", String, true)
  description?: string = undefined;
}

@JsonObject
export class AcmgVariantClassification {
  @JsonProperty("acmgEvidences", [AcmgEvidence])
  acmgEvidences: AcmgEvidence[] = [];

  @JsonProperty("clinicalSignificance", String)
  clinicalSignificance: string = "";

  @JsonProperty("assessment", String, true)
  assessment?: string = undefined;
}

@JsonObject
export class AmpEvidence {
  /**
    AMP evidence type according to Guidlines, i.e germline_database_presence
    */

  @JsonProperty("type", String)
  type: string = "";

  /**
    Assessment for AMP evidence, i.e Present in ClinVar
    */
  @JsonProperty("evidenceAssessment", String)
  evidenceAssessment: string = "";
}

@JsonObject
export class AmpClincialOrExperimentalEvidence {
  /**
    As denined in AMP guidelines: therapeutic, diagnosis or prognosis
    */
  @JsonProperty("category", String)
  category: string = "";

  /**
    As denined in AMP guidelines: levelA, levelB, levelC, levelD
    */
  @JsonProperty("level", String)
  level: string = "";

  /**
    Description of the evidence
    */
  @JsonProperty("description", String, true)
  description?: string = undefined;
}

@JsonObject
export class AmpVariantClassification {
  @JsonProperty("ampEvidences", [AmpEvidence])
  ampEvidences: AmpEvidence[] = [];

  @JsonProperty("ampTier", String)
  ampTier: string = "";

  @JsonProperty("ampClincialOrExperimentalEvidence", [AmpClincialOrExperimentalEvidence], true)
  ampClincialOrExperimentalEvidence?: AmpClincialOrExperimentalEvidence[] = undefined;

  @JsonProperty("assessment", String, true)
  assessment?: string = undefined;
}

@JsonObject
export class GuidelineBasedVariantClassification {
  @JsonProperty("acmgVariantClassification", AcmgVariantClassification, true)
  acmgVariantClassification?: AcmgVariantClassification = undefined;

  @JsonProperty("ampVariantClassification", AmpVariantClassification, true)
  ampVariantClassification?: AmpVariantClassification = undefined;
}

@JsonObject
export class VariantInterpretationLog extends JSONHelper {
  /**
   * Variant coordinates
   */
  @JsonProperty("variantCoordinates", VariantCoordinates)
  variantCoordinates: VariantCoordinates = new VariantCoordinates();

  /**
   * User who set classification
   */
  @JsonProperty("user", User)
  user: User = new User();

  /**
   * Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
   */
  @JsonProperty("timestamp", String)
  timestamp: string = "";

  /**
   * GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
   */
  @JsonProperty("groupId", String)
  familyId: string = "";

  /**
   * Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
   */
  @JsonProperty("caseId", String)
  caseId: string = "";

  /**
   * Independent validation of variant
   */
  @JsonProperty("variantValidation", [VariantValidation], true)
  variantValidation?: VariantValidation = undefined;

  /**
   * User comments attached to this variant in this case
   */
  @JsonProperty("comments", [UserComment], true)
  comments?: UserComment[] = undefined;

  /**
   * Guideline-based variant classification
   */
  @JsonProperty("variantClassification", GuidelineBasedVariantClassification, true)
  variantClassification: GuidelineBasedVariantClassification = new GuidelineBasedVariantClassification();

  /**
   * User has marked the variant as an artefact
   */
  @JsonProperty("Artifact", Boolean, true)
  Artifact?: boolean = undefined;

  /**
   * Filter settings applied at time variant was classified
   */
  @JsonProperty("decisionSupportSystemFilters", Object, true)
  decisionSupportSystemFilters?: {
    [name: string]: string;
  } = undefined;
}
