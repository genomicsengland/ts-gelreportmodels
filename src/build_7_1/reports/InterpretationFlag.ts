import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class InterpretationFlag {
    @JsonProperty('interpretationFlag', String)
    interpretationFlag: string = '';  // InterpretationFlags
    
    @JsonProperty('additionalDescription', String, true)
    additionalDescription?: string = undefined;
};
