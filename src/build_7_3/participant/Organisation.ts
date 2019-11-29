import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Organisation {
    @JsonProperty('organisationId', String)
    organisationId: string = '';

    @JsonProperty('organisationCode', String)
    organisationCode: string = '';

    @JsonProperty('organisationName', String)
    organisationName: string = '';

    @JsonProperty('organisationNationalGroupingId', String)
    organisationNationalGroupingId: string = '';

    @JsonProperty('organisationNationalGroupingName', String)
    organisationNationalGroupingName: string = '';
};
