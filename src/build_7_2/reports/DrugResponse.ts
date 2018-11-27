import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class DrugResponse {
    @JsonProperty('TreatmentAgent', String)
    TreatmentAgent: string = '';

    @JsonProperty('drugResponseClassification', String)
    drugResponseClassification: string = '';  // DrugResponseClassification
};
