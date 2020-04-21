import { AdditionalFindingsVariantGroupLevelQuestions } from "./AdditionalFindingsVariantGroupLevelQuestions";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";

/**
 * The rare disease program exit questionnaire
 */
@JsonObject
export class AdditionalFindingsExitQuestionnaire extends JSONHelper {
  /** The date when the questionnaire was submitted */
  @JsonProperty("eventDate", String)
  eventDate: string = "";

  /** The person that submitted the questionnaire */
  @JsonProperty("reporter", String)
  reporter: string = "";

  /**
   * The list of variant group level variants (ungrouped variants are to be
   * set in single variant group)
   */
  @JsonProperty("additionalFindingsVariantGroupLevelQuestions", [AdditionalFindingsVariantGroupLevelQuestions])
  additionalFindingsVariantGroupLevelQuestions: Array<AdditionalFindingsVariantGroupLevelQuestions> = [];
}
