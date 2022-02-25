import { JsonObject, JsonProperty } from "json2typescript";

/**
  Interpretation flags at the participant level
*/
@JsonObject
export class ParticipantInterpretationFlags {
  /**
   * The interpretation flag
   */
  @JsonProperty("interpretationFlag", String)
  interpretationFlag: string = "";  // InterpretationFlags

  /**
   * The description for the flag
   */
  @JsonProperty("additionalDescription", String, true)
  additionalDescription?: string = undefined;

  /**
   * Sample Id fron which this flag was reported
   */
  @JsonProperty("SampleId", String)
  SampleId: string = "";

  /**
   * Participant Id as appeared in the pedigree
   */
  @JsonProperty("participantId", String, true)
  participantId?: string = undefined;
}
