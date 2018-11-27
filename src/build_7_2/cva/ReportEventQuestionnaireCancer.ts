import { JsonObject, JsonProperty } from "json2typescript";
import { CancerSomaticVariantLevelQuestions, CancerGermlineVariantLevelQuestions, CancerCaseLevelQuestions } from "../reports";

@JsonObject
export class ReportEventQuestionnaireCancer {
    @JsonProperty('cancerSomaticVariantLevelQuestions', CancerSomaticVariantLevelQuestions)
    cancerSomaticVariantLevelQuestions: CancerSomaticVariantLevelQuestions = new CancerSomaticVariantLevelQuestions;

    @JsonProperty('cancerGermlineVariantLevelQuestions', CancerGermlineVariantLevelQuestions)
    cancerGermlineVariantLevelQuestions: CancerGermlineVariantLevelQuestions = new CancerGermlineVariantLevelQuestions;

    @JsonProperty('cancercaseLevelQuestions', CancerCaseLevelQuestions)
    cancercaseLevelQuestions: CancerCaseLevelQuestions = new CancerCaseLevelQuestions;

    @JsonProperty('additionalComments', String, true)
    additionalComments?: string = undefined;

    @JsonProperty('otherActionableVariants', String, true)
    otherActionableVariants?: string = undefined;
};
