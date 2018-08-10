import { PrognosisClassification } from './PrognosisClassification';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Prognosis {
    /** URL where reference information for this prognosis can be found */
    @JsonProperty('referenceUrl', String)
    referenceUrl: string = '';

    /**
     * Prognosis classification (defined as favourable or unfavourable),
     * in the case that the direction of the prognosis is not known
     * altered_prognosis should be used
     */
    @JsonProperty('prognosis', String, true)
    prognosis?: string = undefined;  // PrognosisClassification

    /** Source if known */
    @JsonProperty('source', String, true)
    source?: string = undefined;

    /** References */
    @JsonProperty('references', [String], true)
    references?: Array<string> = undefined;

    /** Full description of the associated prognosis */
    @JsonProperty('description', String, true)
    description?: string = undefined;

    /**
     * If true, the association was made at the variant level, if not the
     * association was made at Genomic Entity level
     */
    @JsonProperty('variantActionable', Boolean)
    variantActionable: boolean = false;
};
