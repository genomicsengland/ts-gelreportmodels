/**
 * A tumour sample
 */
export declare class TumourSample {
    /**
     * Sample identifier (e.g, LP00012645_5GH))
     */
    sampleId: string;
    /**
     * Lab sample identifier
     */
    labSampleId: number;
    /**
     * LDP Code (Local Delivery Partner)
     */
    LDPCode: string;
    /**
     * Identifier of each one of the tumours for a participant
     */
    tumourId: string;
    /**
     * Genomics England programme phase
     */
    programmePhase?: string;
    /**
     * Disease type
     */
    diseaseType?: string;
    /**
     * Disease subtype
     */
    diseaseSubType?: string;
    /**
     * The time when the sample was recieved. In the format
     * YYYY-MM-DDTHH:MM:SS+0000
     */
    clinicalSampleDateTime?: string;
    /**
     * Tumor type
     */
    tumourType?: string;
    /**
     * Tumour content
     */
    tumourContent?: string;
    /**
     * Source of the sample
     */
    source?: string;
    /**
     * The preparation method
     */
    preparationMethod?: string;
    /**
     * The tissue source
     */
    tissueSource?: string;
    /**
     * Product of the sample
     */
    product?: string;
    /**
     * Tumour morphology as defined by ICD (at least one morphology definition
     * by either ICD, Snomed CT or Snomed RT must be provided)
     */
    morphologyICDs?: Array<string>;
    /**
     * Tumour morphology as defined by Snomed CT (at least one morphology
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    morphologySnomedCTs?: Array<string>;
    /**
     * Tumour morphology as defined by Snomed RT (at least one morphology
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    morphologySnomedRTs?: Array<string>;
    /**
     * Tumour topography as defined by ICD (at least one topography definition
     * by either ICD, Snomed CT or Snomed RT must be provided)
     */
    topographyICDs?: Array<string>;
    /**
     * Tumour topography as defined by Snomed CT (at least one topography
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    topographySnomedCTs?: Array<string>;
    /**
     * Tumour topography as defined by Snomed RT (at least one topography
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    topographySnomedRTs?: Array<string>;
}
