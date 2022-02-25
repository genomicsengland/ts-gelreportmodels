import { SmallVariant } from "./SmallVariant";
import { StructuralVariant } from "./StructuralVariant";
import { ChromosomalRearrangement } from "./ChromosomalRearrangement";
import { ShortTandemRepeat } from "./ShortTandemRepeat";
import { ReportVersionControl } from "./ReportVersionControl";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";
import { Karyotype } from "./Karyotype";
import { UniparentalDisomy } from "./UniparentalDisomy";

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
@JsonObject
export class InterpretedGenome extends JSONHelper {
  /**
   * Model version number
   */
  @JsonProperty("versionControl", ReportVersionControl)
  versionControl: ReportVersionControl = new ReportVersionControl();

  /**
   * Identifier for this interpretation request
   */
  @JsonProperty("interpretationRequestId", String)
  interpretationRequestId: string = "";

  /**
   * Version for this interpretation request
   */
  @JsonProperty("interpretationRequestVersion", Number)
  interpretationRequestVersion: number = 0; // type:int

  /**
   * Name of the interpretation service
   */
  @JsonProperty("interpretationService", String)
  interpretationService: string = "";

  /**
   * URL where the results can be accessed in the company's web interface
   */
  @JsonProperty("reportUrl", String, true)
  reportUrl?: string = undefined;

  /**
   * List of small reported variants
   */
  @JsonProperty("variants", [SmallVariant], true)
  variants?: Array<SmallVariant> = undefined;

  /**
   * List of simple structural reported variants (duplications,
   * deletions, insertions, inversions, CNVs)
   */
  @JsonProperty("structuralVariants", [StructuralVariant], true)
  structuralVariants?: Array<StructuralVariant> = undefined;

  /**
   * List of complex structural reported variants (chomosomal
   * rearrangement)
   */
  @JsonProperty("chromosomalRearrangements", [ChromosomalRearrangement], true)
  chromosomalRearrangements?: Array<ChromosomalRearrangement> = undefined;

  /**
   * List of short tandem repeat variants
   */
  @JsonProperty("shortTandemRepeats", [ShortTandemRepeat], true)
  shortTandemRepeats?: Array<ShortTandemRepeat> = undefined;

  /**
   * List of uniparental disomies across all the individuals in this report
   */
  @JsonProperty("uniparentalDisomies", [UniparentalDisomy], true)
  uniparentalDisomies?: Array<UniparentalDisomy> = undefined;

  /**
   * List of inferred karyotypes across all the individuals in this report
   */
  @JsonProperty("karyotypes", [Karyotype], true)
  karyotypes?: Array<Karyotype> = undefined;

  /**
   * This map contains the versions of the different databases used in
   * the process, being the database names the keys and the versions the
   * values.
   */
  @JsonProperty("referenceDatabasesVersions", Object)
  referenceDatabasesVersions: {
    [name: string]: string;
  } = {};

  /**
   * This map contains the versions of the different software systems
   * used in the process, being the software names the keys and the
   * versions the values.
   */
  @JsonProperty("softwareVersions", Object)
  softwareVersions: {
    [name: string]: string;
  } = {};

  /**
   * Comments about the report
   */
  @JsonProperty("comments", [String], true)
  comments?: Array<string> = undefined;
}
