import { FamilyLevelQuestions } from './FamilyLevelQuestions';
import { VariantGroupLevelQuestions } from './VariantGroupLevelQuestions';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

/**
 * The rare disease program exit questionnaire
 */
@JsonObject
export class RareDiseaseExitQuestionnaire extends JSONHelper {
    /** The date when the questionnaire was submitted */
    @JsonProperty('eventDate', String)
    eventDate: string = '';

    /** The person that submitted the questionnaire */
    @JsonProperty('reporter', String)
    reporter: string = '';

    /** The set of questions at family level */
    @JsonProperty('familyLevelQuestions', FamilyLevelQuestions)
    familyLevelQuestions: FamilyLevelQuestions = new FamilyLevelQuestions;

    /**
     * The list of variant group level variants (ungrouped variants are to be
     * set in single variant group)
     */
    @JsonProperty('variantGroupLevelQuestions', [VariantGroupLevelQuestions])
    variantGroupLevelQuestions: Array<VariantGroupLevelQuestions> = [];
};
