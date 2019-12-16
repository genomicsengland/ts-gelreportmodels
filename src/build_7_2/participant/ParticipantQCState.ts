/**
 * QCState Status
 */
export enum ParticipantQCState {
  noState = "noState",
  passedMedicalReviewReadyForInterpretation = "passedMedicalReviewReadyForInterpretation",
  passedMedicalReviewNotReadyForInterpretation = "passedMedicalReviewNotReadyForInterpretation",
  queryToGel = "queryToGel",
  queryToGMC = "queryToGMC",
  failed = "failed"
}
