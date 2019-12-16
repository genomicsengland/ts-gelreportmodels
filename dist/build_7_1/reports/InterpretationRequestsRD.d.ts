import { ReportVersionControl } from "./ReportVersionControl";
import { File } from "./File";
import { OtherFamilyHistory } from "./OtherFamilyHistory";
import { Pedigree } from "../participant";
import { InterpretationFlag } from "./InterpretationFlag";
import JSONHelper from "../../utils/JSONHelper";
export declare class InterpretationRequestsRD extends JSONHelper {
  /**
   * Model version number
   */
  versionControl: ReportVersionControl;
  /**
   * Identifier for this interpretation request
   */
  interpretationRequestId: string;
  /**
   * Version for this interpretation request
   */
  interpretationRequestVersion: number;
  /**
   * Internal study identifier
   */
  internalStudyId: string;
  /**
   * This is the version of the assembly used to align the reads
   */
  genomeAssembly: string;
  /**
   * The genome shall be assigned to the workspaces(projects or domains
   * with a predefined set of users) to control user access
   */
  workspace: Array<string>;
  /**
   * BAMs Files
   */
  bams?: Array<File>;
  /**
   * VCFs Files where SVs and CNVs are represented
   */
  vcfs?: Array<File>;
  /**
   * BigWig Files
   */
  bigWigs?: Array<File>;
  /**
   * Variant Annotation File
   */
  annotationFile?: File;
  /**
   * Other files that may be vendor specific
   * map of key: type of file, value: record of type File
   */
  otherFiles?: {
    [name: string]: File;
  };
  /**
   * Pedigree of the family.
   */
  pedigree: Pedigree;
  /**
   * It is paternal or maternal with reference to the participant.
   */
  otherFamilyHistory?: OtherFamilyHistory;
  /**
   * This map of key: panel_name, value: (map of key: gene, value: (map
   * of metrics of key: metric name, value: float))
   * That is: a map of tables of genes and metrics
   */
  genePanelsCoverage?: {
    [name: string]: {
      [name: string]: {
        [name: string]: number;
      };
    };
  };
  /**
   * Flags about this case relevant for interpretation
   */
  interpretationFlags: Array<InterpretationFlag>;
  /**
   * Additional information
   */
  additionalInfo?: {
    [name: string]: string;
  };
}
