import { VersionControl } from './VersionControl';
import { FamilyQCState } from './FamilyQCState';
import { DiseasePenetrance } from './DiseasePenetrance';
import { AnalysisPanel } from './AnalysisPanel';
import { PedigreeMember } from './PedigreeMember';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
@JsonObject
export class Pedigree extends JSONHelper {
    /**
     * Model version number
     */
    @JsonProperty('versionControl', VersionControl, true)
    versionControl?: VersionControl = undefined;

    /**
     * LDP Code (Local Delivery Partner)
     */
    @JsonProperty('LDPCode', String, true)
    LDPCode?: string;

    /**
     * Family identifier which internally translate to a sample set
     */
    @JsonProperty('familyId', String)
    familyId: string = '';

    /**
     * List of members of a pedigree
     */
    @JsonProperty('members', [PedigreeMember])
    members: Array<PedigreeMember> = [];
    
    /**
     * List of panels
     */
    @JsonProperty('analysisPanels', [AnalysisPanel], true)
    analysisPanels?: Array<AnalysisPanel> = undefined;

    /**
     * List of disease penetrances
     */
    @JsonProperty('diseasePenetrances', [DiseasePenetrance], true)
    diseasePenetrances?: Array<DiseasePenetrance> = undefined;

    /**
     * Flag indicating if a pedigree is ready for analysis
     */
    @JsonProperty('readyForAnalysis', Boolean)
    readyForAnalysis: boolean = false;

    /**
     * The famili quality control status
     */
    @JsonProperty('familyQCState', String, true)
    familyQCState?: string = undefined;  // FamilyQCState
};
