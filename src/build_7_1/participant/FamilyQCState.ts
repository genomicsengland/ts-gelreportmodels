/**
 * FamilyQCState
 */
export enum FamilyQCState {
    noState = 'noState',
    passedMedicalReviewReadyForInterpretation = 'passedMedicalReviewReadyForInterpretation',
    passedMedicalReviewNotReadyForInterpretation = 'passedMedicalReviewNotReadyForInterpretation',
    queryToGel = 'queryToGel',
    queryToGMC = 'queryToGMC',
    failed = 'failed'
};
