/** A germline sample */
export declare class GermlineSample {
    /** Sample identifier (e.g, LP00012645_5GH)) */
    sampleId: string;
    /** Lab sample identifier */
    labSampleId: any;
    /** LDP Code (Local Delivery Partner) */
    LDPCode?: string;
    /** Source of the sample */
    source?: string;
    /** Product of the sample */
    product?: string;
    /** Preparation method */
    preparationMethod?: string;
    /** Genomics England programme phase */
    programmePhase?: string;
    /** The time when the sample was received. In the format
     * YYYY-MM-DDTHH:MM:SS+0000 */
    clinicalSampleDateTime?: string;
    participantId?: string;
    sampleUid?: string;
    maskedPid?: string;
    method?: string;
    storageMedium?: string;
    sampleType?: string;
    sampleState?: string;
}
