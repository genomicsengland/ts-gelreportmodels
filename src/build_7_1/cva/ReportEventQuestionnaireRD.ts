import { VariantLevelQuestions, VariantGroupLevelQuestions, FamilyLevelQuestions } from "../reports";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ReportEventQuestionnaireRD {
    @JsonProperty('groupOfVariants', Number, true)
    groupOfVariants?: number = undefined;  // int

    @JsonProperty('variantLevelQuestions', VariantLevelQuestions)
    variantLevelQuestions: VariantLevelQuestions = new VariantLevelQuestions;

    @JsonProperty('variantGroupLevelQuestions', VariantGroupLevelQuestions)
    variantGroupLevelQuestions: VariantGroupLevelQuestions = new VariantGroupLevelQuestions;
    
    @JsonProperty('familyLevelQuestions', FamilyLevelQuestions)
    familyLevelQuestions: FamilyLevelQuestions = new FamilyLevelQuestions;
};
