import { JsonObject, JsonProperty } from 'json2typescript';
import { Date } from './Date';
import { ClinicalIndication } from './ClinicalIndication';
import { Organisation } from './Organisation';
import { ReferralTest } from './ReferralTest';
import { Pedigree } from './Pedigree';
import { CancerParticipant } from './CancerParticipant';
import JSONHelper from '../../utils/JSONHelper';

@JsonObject
export class Referral extends JSONHelper {
    @JsonProperty('referralId', String)
    referralId: string = '';

    @JsonProperty('referralUid', String)
    referralUid: string = '';

    @JsonProperty('referralTests', [ReferralTest], true)
    referralTests: ReferralTest[] = [];

    @JsonProperty('requester', Organisation)
    requester: Organisation = new Organisation;

    @JsonProperty('orderingDate', Date, true)
    orderingDate?: Date = undefined;

    @JsonProperty('pedigree', Pedigree, true)
    pedigree?: Pedigree = undefined;

    @JsonProperty('cancerParticipant', CancerParticipant, true)
    cancerParticipant?: CancerParticipant = undefined;

    @JsonProperty('clinicalIndication', ClinicalIndication)
    clinicalIndication: ClinicalIndication = new ClinicalIndication;
};
