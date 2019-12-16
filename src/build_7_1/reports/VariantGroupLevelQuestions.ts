import { VariantLevelQuestions } from "./VariantLevelQuestions";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The variant group level questions
 */
@JsonObject
export class VariantGroupLevelQuestions {
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
  @JsonProperty("variantLevelQuestions", [VariantLevelQuestions])
  variantLevelQuestions: Array<VariantLevelQuestions> = [];

  /**
   * Is evidence for this variant/variant pair sufficient to use it for
   * clinical purposes such as prenatal diagnosis or predictive testing?
   */
  @JsonProperty("actionability", String)
  actionability: string = ""; // Actionability

  /**
   * Has the clinical team identified any changes to clinical care which
   * could potentially arise as a result of this variant/variant pair?
   */
  @JsonProperty("clinicalUtility", [String])
  clinicalUtility: Array<string> = []; // ClinicalUtility

  /**
   * Did you report the variant(s) as being partially or completely causative
   * of the family's presenting phenotype(s)?
   */
  @JsonProperty("phenotypesSolved", String)
  phenotypesSolved: string = ""; // PhenotypesSolved

  /**
   * If you indicated that the variant(s) only partially explained the
   * family’s presenting phenotypes, please indicate which HPO terms you are
   * confident that they DO explain
   */
  @JsonProperty("phenotypesExplained", [String], true)
  phenotypesExplained?: Array<string> = undefined;
}
