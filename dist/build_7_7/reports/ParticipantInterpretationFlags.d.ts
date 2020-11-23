/**
  Interpretation flags at the participant level
*/
export declare class ParticipantInterpretationFlags {
    /**
     * The interpretation flag
     */
    interpretationFlag: string;
    /**
     * The description for the flag
     */
    additionalDescription?: string;
    /**
     * Sample Id fron which this flag was reported
     */
    SampleId: string;
    /**
     * Participant Id as appeared in the pedigree
     */
    participantId?: string;
}
