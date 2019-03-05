import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

@JsonObject
export class ClinicalIndication extends JSONHelper {
    @JsonProperty('clinicalIndicationUid', String)
    clinicalIndicationUid: string = '';

    @JsonProperty('clinicalIndicationCode', String)
    clinicalIndicationCode: string = '';

    @JsonProperty('clinicalIndicationFullName', String)
    clinicalIndicationFullName: string = '';

    @JsonProperty('clinicalIndicationVersionNumber', String, true)
    clinicalIndicationVersionNumber?: string = undefined;
};
