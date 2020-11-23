import { JsonObject, JsonProperty } from "json2typescript";
import { VariantCoordinates } from "./";
import JSONHelper from "../../utils/JSONHelper";

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
  @JsonProperty("variantCoordinates", VariantCoordinates)
  variantCoordinates: VariantCoordinates = new VariantCoordinates();

  @JsonProperty("user", User)
  user: User = new User();

  @JsonProperty("timestamp", String)
  timestamp: string = "";

  @JsonProperty("familyId", String)
  familyId: string = "";

  @JsonProperty("caseId", String)
  caseId: string = "";

  @JsonProperty("variantValidation", [VariantValidation], true)
  variantValidation?: VariantValidation = undefined;

  @JsonProperty("comments", [String], true)
  comments?: string[] = undefined;

  @JsonProperty("variantClassification", GuidelineBasedVariantClassification, true)
  variantClassification: GuidelineBasedVariantClassification = new GuidelineBasedVariantClassification();

  @JsonProperty("Artifact", Boolean, true)
  Artifact?: boolean = undefined;

  @JsonProperty("decisionSupportSystemFilters", Object, true)
  decisionSupportSystemFilters?: {
    [name: string]: string;
  } = undefined;
}
