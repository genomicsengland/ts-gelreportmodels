import { SampleSource } from './SampleSource';
import { Product } from './Product';
import { PreparationMethod } from './PreparationMethod';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Sample {
    /** Sample Id (e.g, LP00012645_5GH)) */
    @JsonProperty('sampleId', String)
    sampleId: string = '';

    /** Lab Sample Id */
    @JsonProperty('labSampleId', Number)
    labSampleId: number = 0; // type:int

    /** Source */
    @JsonProperty('source', String, true)
    source?: string = undefined;  // SampleSource

    /** Product */
    @JsonProperty('product', String, true)
    product?: string = undefined;  // Product

    /** preparationMethod */
    @JsonProperty('preparationMethod', String, true)
    preparationMethod?: string = undefined;  // PreparationMethod
};
