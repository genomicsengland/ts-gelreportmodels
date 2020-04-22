import { Date } from "./Date";
import { ClinicalIndication } from "./ClinicalIndication";
import { Organisation } from "./Organisation";
import { ReferralTest } from "./ReferralTest";
import { Pedigree } from "./Pedigree";
import { CancerParticipant } from "./CancerParticipant";
import JSONHelper from "../../utils/JSONHelper";
export declare class Referral extends JSONHelper {
    referralId: string;
    referralUid: string;
    referralTests: ReferralTest[];
    requester: Organisation;
    orderingDate?: Date;
    pedigree?: Pedigree;
    cancerParticipant?: CancerParticipant;
    clinicalIndication: ClinicalIndication;
}
