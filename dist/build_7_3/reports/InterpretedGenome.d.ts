import { SmallVariant } from "./SmallVariant";
import { StructuralVariant } from "./StructuralVariant";
import { ChromosomalRearrangement } from "./ChromosomalRearrangement";
import { ShortTandemRepeat } from "./ShortTandemRepeat";
import { ReportVersionControl } from "./ReportVersionControl";
import JSONHelper from "../../utils/JSONHelper";
/**
 * Define the report used by Genomics England to get the clinical
 * interpretation companies results for bronze level
 */
/**
 * A interpreted genome for the rare disease program. This holds the list
 * of candidate variants reported by an interpretation service together
 * with all the relevant information that identify the case and how these
 * conclusions were reached.
 */
export declare class InterpretedGenome extends JSONHelper {
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
   * Name of the interpretation service
   */
  interpretationService: string;
  /**
   * URL where the results can be accessed in the company's web interface
   */
  reportUrl?: string;
  /**
   * List of small reported variants
   */
  variants?: Array<SmallVariant>;
  /**
   * List of simple structural reported variants (duplications,
   * deletions, insertions, inversions, CNVs)
   */
  structuralVariants?: Array<StructuralVariant>;
  /**
   * List of complex structural reported variants (chomosomal
   * rearrangement)
   */
  chromosomalRearrangements?: Array<ChromosomalRearrangement>;
  /**
   * List of short tandem repeat variants
   */
  shortTandemRepeats?: Array<ShortTandemRepeat>;
  /**
   * This map contains the versions of the different databases used in
   * the process, being the database names the keys and the versions the
   * values.
   */
  referenceDatabasesVersions: {
    [name: string]: string;
  };
  /**
   * This map contains the versions of the different software systems
   * used in the process, being the software names the keys and the
   * versions the values.
   */
  softwareVersions: {
    [name: string]: string;
  };
  /**
   * Comments about the report
   */
  comments?: Array<string>;
}
