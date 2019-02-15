import { CancerCaseLevelQuestions } from './CancerCaseLevelQuestions';
import { CancerSomaticVariantLevelQuestions } from './CancerSomaticVariantLevelQuestions';
import { CancerGermlineVariantLevelQuestions } from './CancerGermlineVariantLevelQuestions';
import { AdditionalVariantsQuestions } from './AdditionalVariantsQuestions';
import JSONHelper from '../../utils/JSONHelper';
import { CancerPharmacogenomicsVariantLevelQuestion } from './CancerPharmacogenomicsVariantLevelQuestion';
/**
 * The cancer program exit questionnaire
 */
export declare class CancerExitQuestionnaire extends JSONHelper {
    /**
     * The date when the questionnaire was submitted
     */
    eventDate: string;
    /**
     * The person that submitted the questionnaire
     */
    reporter: string;
    /**
     * The case level questions
     */
    caseLevelQuestions: CancerCaseLevelQuestions;
    /**
     * The questions for somatic variants
     */
    somaticVariantLevelQuestions?: Array<CancerSomaticVariantLevelQuestions>;
    /**
     * The questions for germline variants
     */
    germlineVariantLevelQuestions?: Array<CancerGermlineVariantLevelQuestions>;
    pharmacogenomicsVariantLevelQuestions?: Array<CancerPharmacogenomicsVariantLevelQuestion>;
    /**
     * Please enter any additional comments you may have about the case here.
     */
    additionalComments?: string;
    /**
     * Other actionable variants or entities. Please provide other (potentially)
     * actionable entities: e.g domain 3 small variants or SV/CNV, mutational
     * signatures, mutational burden
     */
    otherActionableVariants?: Array<AdditionalVariantsQuestions>;
}
