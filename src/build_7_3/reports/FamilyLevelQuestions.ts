import { JsonObject, JsonProperty } from "json2typescript";

/**
 * The family level questions
 */
@JsonObject
export class FamilyLevelQuestions {
  /** Have the results reported here explained the genetic basis of the
   * family’s presenting phenotype(s)?
   */
  @JsonProperty("caseSolvedFamily", String)
  caseSolvedFamily: string = ""; // CaseSolvedFamily

  /**
   * Have you done any segregation testing in non-participating family members?
   */
  @JsonProperty("segregationQuestion", String)
  segregationQuestion: string = ""; // SegregationQuestion

  /** Comments regarding report */
  @JsonProperty("additionalComments", String)
  additionalComments: string = "";
}
