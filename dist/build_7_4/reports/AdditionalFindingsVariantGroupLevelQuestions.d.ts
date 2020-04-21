import { VariantLevelQuestions } from "./VariantLevelQuestions";
import { ShortTandemRepeatLevelQuestions } from "./ShortTandemRepeatLevelQuestions";
import { StructuralVariantLevelQuestions } from "./StructuralVariantLevelQuestions";
/**
 * The variant group level questions
 */
export declare class VariantGroupLevelQuestions {
    /**
     * This value groups variants that together could explain the phenotype
     * according to the mode of inheritance used. (e.g.: compound
     * heterozygous). All the variants in the same report sharing the same
     * value will be considered in the same group (i.e.: reported together).
     * This value is an integer unique in the whole report. These values are
     * only relevant within the same report.
     */
    variantGroup: number;
    /**
     * The variant level questions for each of the variants in the group
     */
    variantLevelQuestions?: Array<VariantLevelQuestions>;
    /**
       STR level questions for each of the variants in the group
       */
    shortTandemRepeatLevelQuestions?: Array<ShortTandemRepeatLevelQuestions>;
    /**
       Structural level questions for each of the variants in the group
       */
    structuralVariantLevelQuestions?: Array<StructuralVariantLevelQuestions>;
    /**
     * Does this patient have a positive family history relevant to this condition?
     */
    familyHistoryCondition: string;
    /**
     Was this variant previously known to be present in this patient/family?
     */
    /**
          In patient:
         */
    familyHistoryPatient: string;
    /**
         In family:
         */
    familyHistoryFamily: string;
    /**
     * Has the clinical team identified any changes to clinical care which
     * could potentially arise as a result of this variant/variant pair?
     */
    clinicalUtility: Array<string>;
}
