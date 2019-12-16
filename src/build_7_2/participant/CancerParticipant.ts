import { GermlineSample } from "./GermlineSample";
import { ConsentStatus } from "./ConsentStatus";
import { TumourSample } from "./TumourSample";
import { MatchedSamples } from "./MatchedSamples";
import { VersionControl } from "./VersionControl";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";

@JsonObject
export class CancerParticipant extends JSONHelper {
  @JsonProperty("yearOfBirth", Number, true)
  yearOfBirth?: number = undefined; // int

  @JsonProperty("morphology", [String], true)
  morphology?: Array<string>;

  @JsonProperty("readyForAnalysis", Boolean)
  readyForAnalysis: boolean = false;

  @JsonProperty("consentStatus", ConsentStatus, true)
  consentStatus?: ConsentStatus = undefined;

  @JsonProperty("center", String, true)
  center?: string = undefined;

  @JsonProperty("individualId", String)
  individualId: string = "";

  @JsonProperty("primaryDiagnosisDisease", [String], true)
  primaryDiagnosisDisease?: Array<string> = undefined;

  @JsonProperty("primaryDiagnosisSubDisease", [String], true)
  primaryDiagnosisSubDisease?: Array<string> = undefined;

  @JsonProperty("sex", String)
  sex: string = "";

  @JsonProperty("additionalInformation", Object, true)
  additionalInformation?: {
    [name: string]: string;
  } = undefined;

  @JsonProperty("assignedICD10", [String], true)
  assignedICD10?: Array<string> = undefined;

  @JsonProperty("tumourSamples", [TumourSample], true)
  tumourSamples: Array<TumourSample> = [];

  @JsonProperty("germlineSamples", [GermlineSample])
  germlineSamples: Array<GermlineSample> = [];

  @JsonProperty("matchedSamples", [MatchedSamples])
  matchedSamples: Array<MatchedSamples> = [];

  @JsonProperty("versionControl", VersionControl, true)
  versionControl?: VersionControl = undefined;
}
