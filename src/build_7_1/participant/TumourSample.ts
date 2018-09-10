import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * A tumour sample
 */
@JsonObject
export class TumourSample {
    /**
     * Sample identifier (e.g, LP00012645_5GH))
     */
    @JsonProperty('sampleId', String)
    sampleId: string = '';

    /**
     * Lab sample identifier
     */
    @JsonProperty('labSampleId', Number)
    labSampleId: number = 0;

    /**
     * LDP Code (Local Delivery Partner)
     */
    @JsonProperty('LDPCode', String)
    LDPCode: string = '';

    /**
     * Identifier of each one of the tumours for a participant
     */
    @JsonProperty('tumourId', String)
    tumourId: string = '';

    /**
     * Genomics England programme phase
     */
    @JsonProperty('programmePhase', String, true)
    programmePhase?: string = undefined;  // ProgrammePhase

    /**
     * Disease type
     */
    @JsonProperty('diseaseType', String, true)
    diseaseType?: string = undefined;  // diseaseType

    /**
     * Disease subtype
     */
    @JsonProperty('diseaseSubType', String, true)
    diseaseSubType?: string = undefined;

    /**
     * The time when the sample was recieved. In the format
     * YYYY-MM-DDTHH:MM:SS+0000
     */
    @JsonProperty('clinicalSampleDateTime', String, true)
    clinicalSampleDateTime?: string = undefined;

    /**
     * Tumor type
     */
    @JsonProperty('tumourType', String, true)
    tumourType?: string = undefined;  // TumourType

    /**
     * Tumour content
     */
    @JsonProperty('tumourContent', String, true)
    tumourContent?: string = undefined;  // TumourContent

    /**
     * Source of the sample
     */
    @JsonProperty('source', String, true)
    source?: string = undefined;  // SampleSource

    /**
     * The preparation method
     */
    @JsonProperty('preparationMethod', String, true)
    preparationMethod?: string = undefined;  // PreparationMethod

    /**
     * The tissue source
     */
    @JsonProperty('tissueSource', String, true)
    tissueSource?: string = undefined;  // TissueSource

    /**
     * Product of the sample
     */
    @JsonProperty('product', String, true)
    product?: string = undefined;  // Product

    /**
     * Tumour morphology as defined by ICD (at least one morphology definition
     * by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('morphologyICDs', String, true)
    morphologyICDs?: string = undefined;

    /**
     * Tumour morphology as defined by Snomed CT (at least one morphology
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('morphologySnomedCTs', String, true)
    morphologySnomedCTs?: string = undefined;

    /**
     * Tumour morphology as defined by Snomed RT (at least one morphology
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('morphologySnomedRTs', String, true)
    morphologySnomedRTs?: string = undefined;

    /**
     * Tumour topography as defined by ICD (at least one topography definition
     * by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('topographyICDs', String, true)
    topographyICDs?: string = undefined;

    /**
     * Tumour topography as defined by Snomed CT (at least one topography
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('topographySnomedCTs', String, true)
    topographySnomedCTs?: string = undefined;

    /**
     * Tumour topography as defined by Snomed RT (at least one topography
     * definition by either ICD, Snomed CT or Snomed RT must be provided)
     */
    @JsonProperty('topographySnomedRTs', String, true)
    topographySnomedRTs?: string = undefined;
};
