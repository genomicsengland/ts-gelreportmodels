import {
  CancerSomaticVariantLevelQuestions,
  CancerGermlineVariantLevelQuestions,
  CancerCaseLevelQuestions
} from "../reports";
export declare class ReportEventQuestionnaireCancer {
  cancerSomaticVariantLevelQuestions: CancerSomaticVariantLevelQuestions;
  cancerGermlineVariantLevelQuestions: CancerGermlineVariantLevelQuestions;
  cancercaseLevelQuestions: CancerCaseLevelQuestions;
  additionalComments?: string;
  otherActionableVariants?: string;
}
