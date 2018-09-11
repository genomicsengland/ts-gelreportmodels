import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * AcmgEvidence. This should be buit for each one of the evidences assing to a
 * variants following the ACMG guidelines. An AcmgEvidence, should map with
 * one of the criteria defined, i.e, PVS1, BA1, PM1...
 */
@JsonObject
export class AcmgEvidence {
    /**
     * Evidence category as defined in ACMG guidelines
     */
    @JsonProperty('category', String)
    category: string = '';  // AcmgEvidenceCategory

    /**
     * Evidence type: bening or pathogenic
     */
    @JsonProperty('type', String)
    type: string = '';  // AcmgEvidenceType

    /**
     * Weight categories as described in ACMG guideline
     */
    @JsonProperty('weight', String)
    weight: string = '';  // AcmgEvidenceWeight

    /**
     * modifier of the strength, together define each creteria, i.e the 2 in PM2
     */
    @JsonProperty('modifier', Number)
    modifier: number = 0;

    /**
     * Description of the evidence
     */
    @JsonProperty('description', String, true)
    description?: string = undefined;
};
