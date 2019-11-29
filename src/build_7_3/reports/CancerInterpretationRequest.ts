import { ReportVersionControl } from './ReportVersionControl';
import { CancerParticipant } from '../participant/CancerParticipant';
import { OtherFamilyHistory } from './OtherFamilyHistory';
import { InterpretationFlag } from './InterpretationFlag';
import { File } from './File';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

/**
 * This record represents basic information for this report
 */
@JsonObject
export class CancerInterpretationRequest extends JSONHelper {
    /**
     * Model version number
     */
    @JsonProperty('versionControl', ReportVersionControl)
    versionControl: ReportVersionControl = new ReportVersionControl;

    /**
     * Identifier for this interpretation request
     */
    @JsonProperty('interpretationRequestId', String)
    interpretationRequestId: string = '';

    /**
     * Version for this interpretation request
     */
    @JsonProperty('interpretationRequestVersion', Number)
    interpretationRequestVersion: number = 0; // type:int

    /**
     * Internal study identifier
     */
    @JsonProperty('internalStudyId', String)
    internalStudyId: string = '';

    /**
     * This is the version of the assembly used to align the reads
     */
    @JsonProperty('genomeAssembly', String)
    genomeAssembly: string = '';  // Assembly

    /**
     * The genome shall be assigned to the workspaces(projects or domains
     * with a predefined set of users) to control user access
     */
    @JsonProperty('workspace', [String])
    workspace: Array<string> = [];

    /**
     * BAMs Files
     */
    @JsonProperty('bams', [File], true)
    bams?: Array<File> = undefined;

    /**
     * VCFs Files where SVs and CNVs are represented
     */
    @JsonProperty('vcfs', [File], true)
    vcfs?: Array<File> = undefined;

    /**
     * BigWig Files
     */
    @JsonProperty('bigWigs', [File], true)
    bigWigs?: Array<File> = undefined;

    /**
     * Variant Annotation File
     */
    @JsonProperty('annotationFile', File, true)
    annotationFile?: File = undefined;

    /**
     * Other files that may be vendor specific
     * map of key: type of file, value: record of type File
     */
    @JsonProperty('otherFiles', Object, true)
    otherFiles?: {
        [name: string]: File;
    } = undefined;

    /**
     * Cancer Particiapnt Data.
     */
    @JsonProperty('cancerParticipant', CancerParticipant, true)
    cancerParticipant?: CancerParticipant = undefined;

    /**
     * It is paternal or maternal with reference to the participant.
     */
    @JsonProperty('otherFamilyHistory', OtherFamilyHistory, true)
    otherFamilyHistory?: OtherFamilyHistory = undefined;

    /**
     * This map of key: panel_name, value: (map of key: gene, value: (map
     * of metrics of key: metric name, value: float))
     * That is: a map of tables of genes and metrics
     */
    @JsonProperty('genePanelsCoverage', Object, true)
    genePanelsCoverage?: {
        [name: string]: {
            [name: string]: {
                [name: string]: number; // type:float
            };
        };
    } = undefined;

    /**
     * Flags about this case relevant for interpretation
     */
    @JsonProperty('interpretationFlags', [InterpretationFlag], true)
    interpretationFlags: Array<InterpretationFlag> = [];

    /**
     * Additional information
     */
    @JsonProperty('additionalInfo', Object, true)
    additionalInfo?: {
        [name: string]: string;
    };
};
