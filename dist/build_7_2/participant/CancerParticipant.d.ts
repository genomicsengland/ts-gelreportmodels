import { GermlineSample } from './GermlineSample';
import { ConsentStatus } from './ConsentStatus';
import { TumourSample } from './TumourSample';
import { MatchedSamples } from './MatchedSamples';
import { VersionControl } from './VersionControl';
import JSONHelper from '../../utils/JSONHelper';
export declare class CancerParticipant extends JSONHelper {
    yearOfBirth?: number;
    morphology?: Array<string>;
    readyForAnalysis: boolean;
    consentStatus?: ConsentStatus;
    center?: string;
    individualId: string;
    primaryDiagnosisDisease?: Array<string>;
    primaryDiagnosisSubDisease?: Array<string>;
    sex: string;
    additionalInformation?: {
        [name: string]: string;
    };
    assignedICD10?: Array<string>;
    tumourSamples: Array<TumourSample>;
    germlineSamples: Array<GermlineSample>;
    matchedSamples: Array<MatchedSamples>;
    versionControl?: VersionControl;
}
