import { Date } from "./Date";
import { ClinicalIndicationTest } from "./ClinicalIndicationTest";
import { TumourSample } from "./TumourSample";
import { GermlineSample } from "./GermlineSample";
import { AnalysisPanel } from "./AnalysisPanel";
import { Organisation } from "./Organisation";
import { DiseasePenetrance } from "./DiseasePenetrance";
import { MatchedSamples } from "./MatchedSamples";
import JSONHelper from "../../utils/JSONHelper";
export declare class ReferralTest extends JSONHelper {
  referralTestId: string;
  referralTestOrderingDate?: Date;
  clinicalIndicationTest: ClinicalIndicationTest;
  tumourSamples?: TumourSample[];
  germlineSamples?: GermlineSample[];
  analysisPanels?: AnalysisPanel[];
  interpreter: Organisation;
  processingLab: Organisation;
  priority: string;
  pipelineStartDate?: Date;
  pipelineStadiseasePenetrancesrtDate?: DiseasePenetrance[];
  matchedSamples?: MatchedSamples[];
}
