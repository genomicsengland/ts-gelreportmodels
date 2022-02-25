import { VariantLevelQuestions } from "./VariantLevelQuestions";
import { JsonObject, JsonProperty } from "json2typescript";
import { ShortTandemRepeatLevelQuestions } from "./ShortTandemRepeatLevelQuestions";
import { StructuralVariantLevelQuestions } from "./StructuralVariantLevelQuestions";

/**
 * The variant group level questions
 */
@JsonObject
export class AdditionalFindingsVariantGroupLevelQuestions {
  /**
   * This value groups variants that together could explain the phenotype
   * according to the mode of inheritance used. (e.g.: compound
   * heterozygous). All the variants in the same report sharing the same
   * value will be considered in the same group (i.e.: reported together).
   * This value is an integer unique in the whole report. These values are
   * only relevant within the same report.
   */
  @JsonProperty("variantGroup", Number)
  variantGroup: number = 0; // int

  /**
   * The variant level questions for each of the variants in the group
   */
  @JsonProperty("variantLevelQuestions", [VariantLevelQuestions], true)
  variantLevelQuestions?: Array<VariantLevelQuestions> = undefined;

  /**
     STR level questions for each of the variants in the group
     */
  @JsonProperty(
    "shortTandemRepeatLevelQuestions",
    [ShortTandemRepeatLevelQuestions],
    true
  )
  shortTandemRepeatLevelQuestions?: Array<
    ShortTandemRepeatLevelQuestions
  > = undefined;

  /**
     Structural level questions for each of the variants in the group
     */
  @JsonProperty(
    "structuralVariantLevelQuestions",
    [StructuralVariantLevelQuestions],
    true
  )
  structuralVariantLevelQuestions?: Array<
    StructuralVariantLevelQuestions
  > = undefined;

  /**
   * Does this patient have a positive family history relevant to this condition?
   */
  @JsonProperty("familyHistoryCondition", String)
  familyHistoryCondition: string = "";

  /**
   Was this variant previously known to be present in this patient/family?
   */
  /**
        In patient:
       */
  @JsonProperty("familyHistoryPatient", String)
  familyHistoryPatient: string = "";

  /**
       In family:
       */
  @JsonProperty("familyHistoryFamily", String)
  familyHistoryFamily: string = "";

  /**
   * Has the clinical team identified any changes to clinical care which
   * could potentially arise as a result of this variant/variant pair?
   */
  @JsonProperty("clinicalUtility", [String])
  clinicalUtility: Array<string> = []; // ClinicalUtility
}
