import { JsonObject, JsonProperty } from "json2typescript";
import { Date } from "./Date";
import { ClinicalIndicationTest } from "./ClinicalIndicationTest";
import { TumourSample } from "./TumourSample";
import { GermlineSample } from "./GermlineSample";
import { AnalysisPanel } from "./AnalysisPanel";
import { Organisation } from "./Organisation";
import { DiseasePenetrance } from "./DiseasePenetrance";
import { MatchedSamples } from "./MatchedSamples";
import JSONHelper from "../../utils/JSONHelper";

@JsonObject
export class ReferralTest extends JSONHelper {
  @JsonProperty("referralTestId", String)
  referralTestId: string = "";

  @JsonProperty("referralTestOrderingDate", Date, true)
  referralTestOrderingDate?: Date = new Date();

  @JsonProperty("clinicalIndicationTest", ClinicalIndicationTest)
  clinicalIndicationTest: ClinicalIndicationTest = new ClinicalIndicationTest();

  @JsonProperty("tumourSamples", [TumourSample], true)
  tumourSamples?: TumourSample[] = undefined;

  @JsonProperty("germlineSamples", [GermlineSample], true)
  germlineSamples?: GermlineSample[] = undefined;

  @JsonProperty("analysisPanels", [AnalysisPanel], true)
  analysisPanels?: AnalysisPanel[] = undefined;

  @JsonProperty("interpreter", Organisation)
  interpreter: Organisation = new Organisation();

  @JsonProperty("processingLab", Organisation)
  processingLab: Organisation = new Organisation();

  @JsonProperty("priority", String)
  priority: string = "";

  @JsonProperty("pipelineStartDate", Date, true)
  pipelineStartDate?: Date = new Date();

  @JsonProperty("diseasePenetrances", [DiseasePenetrance], true)
  pipelineStadiseasePenetrancesrtDate?: DiseasePenetrance[] = undefined;

  @JsonProperty("matchedSamples", [MatchedSamples], true)
  matchedSamples?: MatchedSamples[] = undefined;
}
