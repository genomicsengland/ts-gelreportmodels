import { VersionControl } from './VersionControl';
import { DiseasePenetrance } from './DiseasePenetrance';
import { AnalysisPanel } from './AnalysisPanel';
import { PedigreeMember } from './PedigreeMember';
import JSONHelper from '../../utils/JSONHelper';
/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
export declare class Pedigree extends JSONHelper {
    /**
     * Model version number
     */
    versionControl?: VersionControl;
    /**
     * LDP Code (Local Delivery Partner)
     */
    LDPCode?: string;
    /**
     * Family identifier which internally translate to a sample set
     */
    familyId: string;
    /**
     * List of members of a pedigree
     */
    members: Array<PedigreeMember>;
    /**
     * List of panels
     */
    analysisPanels?: Array<AnalysisPanel>;
    /**
     * List of disease penetrances
     */
    diseasePenetrances?: Array<DiseasePenetrance>;
    /**
     * Flag indicating if a pedigree is ready for analysis
     */
    readyForAnalysis: boolean;
    /**
     * The famili quality control status
     */
    familyQCState?: string;
}
