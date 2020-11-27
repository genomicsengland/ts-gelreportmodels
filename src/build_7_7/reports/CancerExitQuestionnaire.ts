import { CancerCaseLevelQuestions } from "./CancerCaseLevelQuestions";
import { CancerSomaticVariantLevelQuestions } from "./CancerSomaticVariantLevelQuestions";
import { CancerGermlineVariantLevelQuestions } from "./CancerGermlineVariantLevelQuestions";
import { AdditionalVariantsQuestions } from "./AdditionalVariantsQuestions";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";
import { CancerPharmacogenomicsVariantLevelQuestion } from "./CancerPharmacogenomicsVariantLevelQuestion";

/**
 * The cancer program exit questionnaire
 */
@JsonObject
export class CancerExitQuestionnaire extends JSONHelper {
  /**
   * The date when the questionnaire was submitted
   */
  @JsonProperty("eventDate", String)
  eventDate: string = "";

  /**
   * The person that submitted the questionnaire
   */
  @JsonProperty("reporter", String)
  reporter: string = "";

  /**
   * The case level questions
   */
  @JsonProperty("caseLevelQuestions", CancerCaseLevelQuestions)
  caseLevelQuestions: CancerCaseLevelQuestions = new CancerCaseLevelQuestions();

  /**
   * The questions for somatic variants
   */
  @JsonProperty(
    "somaticVariantLevelQuestions",
    [CancerSomaticVariantLevelQuestions],
    true
  )
  somaticVariantLevelQuestions?: Array<CancerSomaticVariantLevelQuestions> = [];

  /**
   * The questions for germline variants
   */
  @JsonProperty(
    "germlineVariantLevelQuestions",
    [CancerGermlineVariantLevelQuestions],
    true
  )
  germlineVariantLevelQuestions?: Array<
    CancerGermlineVariantLevelQuestions
  > = [];

  @JsonProperty(
    "pharmacogenomicsVariantLevelQuestions",
    [CancerPharmacogenomicsVariantLevelQuestion],
    true
  )
  pharmacogenomicsVariantLevelQuestions?: Array<
    CancerPharmacogenomicsVariantLevelQuestion
  > = [];

  /**
   * Please enter any additional comments you may have about the case here.
   */

  @JsonProperty("additionalComments", String, true)
  additionalComments?: string = undefined;

  /**
   * Other actionable variants or entities. Please provide other (potentially)
   * actionable entities: e.g domain 3 small variants or SV/CNV, mutational
   * signatures, mutational burden
   */
  @JsonProperty("otherActionableVariants", [AdditionalVariantsQuestions], true)
  otherActionableVariants?: Array<AdditionalVariantsQuestions> = undefined;
}
