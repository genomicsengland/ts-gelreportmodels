import { JsonObject, JsonProperty } from 'json2typescript';
 
/** A disease penetrance definition */
@JsonObject
export class DiseasePenetrance {
    /** The disease to which the penetrance applies */
    @JsonProperty('specificDisease', String)
    specificDisease: string = '';

    /** The penetrance */
    @JsonProperty('penetrance', String)
    penetrance: string = '';  // Penetrance
};
