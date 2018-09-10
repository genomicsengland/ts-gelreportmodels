import { DrugResponse } from './DrugResponse';
import { Intervention } from './Intervention';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Therapy {
    /**
     * URL where reference information for this therapy association can be found
     * */
    @JsonProperty('referenceUrl', String)
    referenceUrl: string = '';

    /** Source */
    @JsonProperty('source', String, true)
    source?: string = undefined;

    /** References */
    @JsonProperty('references', [String], true)
    references?: Array<string>;

    /** Drug responses */
    @JsonProperty('drugResponse', [DrugResponse], true)
    drugResponse?: Array<DrugResponse> = undefined;

    /** Any other clinical intervention */
    @JsonProperty('otherInterventions', [Intervention], true)
    otherInterventions?: Array<Intervention> = [];

    /**
     * If true, the association was made at the variant level, if not the
     * association was made at Genomic Entity level
     */
    @JsonProperty('variantActionable', Boolean)
    variantActionable: boolean = false; 
};
