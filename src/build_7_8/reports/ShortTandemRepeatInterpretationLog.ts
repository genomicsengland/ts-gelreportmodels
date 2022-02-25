import { VariantValidation } from "./VariantValidation";
import { User } from "./User";
import { UserComment } from "./UserComment";
import { ShortTandemRepeatDetails } from "./ShortTandemRepeatDetails";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ShortTandemRepeatInterpretationLog {

  /**
  Variant details
  */
  @JsonProperty("variant", ShortTandemRepeatDetails)
  variant: ShortTandemRepeatDetails = new ShortTandemRepeatDetails();

  /**
  User who set classification
  */
  @JsonProperty("user", User)
  user: User = new User();

  /**
  Date of classification. Format YYYY-MM-DD (e.g. 2020-01-31)
  */
  @JsonProperty("timestamp", String)
  timestamp: string = "";

  /**
  GeL group ID. For GMS cases this will be the referral ID. For 100k rare disease cases this will be the family ID. For 100k cancer cases this will be the participant ID.
  */
  @JsonProperty("groupId", String)
  groupId: string = "";

  /**
  Interpretation request ID including CIP prefix and version suffix (e.g. SAP-1234-1)
  */
  @JsonProperty("caseId", String)
  caseId: string = "";

  /**
  Independent validation of variant
  */
  @JsonProperty("variantValidation", VariantValidation, true)
  variantValidation?: VariantValidation = undefined;

  /**
  User comments attached to this variant in this case
  */
  @JsonProperty("comments", [UserComment], true)
  comments?: UserComment[] = undefined;

  /**
  Variant classification
  */
  @JsonProperty("variantClassification", String)
  variantClassification: string = ""; //ClinicalSignificance

  /**
  User has marked the variant as an artefact
  */
  @JsonProperty("artifact", Boolean, true)
  artifact?: boolean = undefined;

  /**
  Filter settings applied at time variant was classified
  */
  @JsonProperty("decisionSupportSystemFilters", Object, true)
  decisionSupportSystemFilters?: {
    [name: string]: string;
  } = undefined;
}