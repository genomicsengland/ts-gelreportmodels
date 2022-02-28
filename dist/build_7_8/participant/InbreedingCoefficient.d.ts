/**
 * Inbreeding coefficient
 */
export declare class InbreedingCoefficient {
    /**
     * This is the sample id against which the coefficient was estimated
     */
    sampleId: string;
    /**
     * Name of program used to calculate the coefficient
     */
    program: string;
    /**
     * Version of the programme
     */
    version: string;
    /**
     * Where various methods for estimation exist, which method was used.
     */
    estimationMethod: string;
    /**
     * Inbreeding coefficient ideally a real number in [0,1]
     */
    coefficient: number;
    /**
     * Standard error of the Inbreeding coefficient
     */
    standardError?: number;
}
