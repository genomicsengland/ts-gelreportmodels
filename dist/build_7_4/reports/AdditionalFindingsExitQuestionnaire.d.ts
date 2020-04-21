import { VariantGroupLevelQuestions } from "./VariantGroupLevelQuestions";
import JSONHelper from "../../utils/JSONHelper";
/**
 * The rare disease program exit questionnaire
 */
export declare class RareDiseaseExitQuestionnaire extends JSONHelper {
    /** The date when the questionnaire was submitted */
    eventDate: string;
    /** The person that submitted the questionnaire */
    reporter: string;
    /**
     * The list of variant group level variants (ungrouped variants are to be
     * set in single variant group)
     */
    variantGroupLevelQuestions: Array<VariantGroupLevelQuestions>;
}
