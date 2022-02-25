import { Intervention } from "./Intervention";
import { DemographicElegibilityCriteria } from "./DemographicElegibilityCriteria";
import { TrialLocation } from "./TrialLocation";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Trial {
  /** URL where reference information for this trail can be found */
  @JsonProperty("studyUrl", String)
  studyUrl: string = "";

  /** Trail/Study indetifier */
  @JsonProperty("studyIdentifier", String)
  studyIdentifier: string = "";

  /** Start date of the study */
  @JsonProperty("startDate", String, true)
  startDate?: string = undefined;

  /** Completion date of the study */
  @JsonProperty("estimateCompletionDate", String, true)
  estimateCompletionDate?: string = undefined;

  /** Title of the study */
  @JsonProperty("title", String, true)
  title?: string = undefined;

  /** Study Phase */
  @JsonProperty("phase", String)
  phase: string = ""; // StudyPhase

  /** Interventions */
  @JsonProperty("interventions", [Intervention], true)
  interventions?: Array<Intervention> = undefined;

  /** Conditions */
  @JsonProperty("conditions", [String], true)
  conditions?: Array<string> = undefined;

  /** Primary Purpose of the study */
  @JsonProperty("primaryPurpose", String, true)
  primaryPurpose?: string = undefined; // PrimaryPurpose

  /** Study Type */
  @JsonProperty("studyType", String, true)
  studyType?: string = undefined; // StudyType

  /** Elegigility Criteria based on Age and Sex */
  @JsonProperty(
    "demogrphicElegibilityCriteria",
    DemographicElegibilityCriteria,
    true
  )
  demogrphicElegibilityCriteria?: DemographicElegibilityCriteria = undefined;

  /** List with all of the locations where participant can enrolle */
  @JsonProperty("locations", [TrialLocation], true)
  locations?: Array<TrialLocation> = undefined;

  /**
   * If true, the association was made using the variant information, if not
   * the association was made at Genomic Entity level
   */
  @JsonProperty("variantActionable", Boolean)
  variantActionable: boolean = false;
}
