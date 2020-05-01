import { SmallVariant } from "./SmallVariant";
import { StructuralVariant } from "./StructuralVariant";
import { ChromosomalRearrangement } from "./ChromosomalRearrangement";
import { ShortTandemRepeat } from "./ShortTandemRepeat";
import { AdditionalAnalysisPanel } from "./AdditionalAnalysisPanel";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";

/**
 * A clinical report. This holds the list of reported variants by an expert
 * together with all the relevant information that identify the case and how
 * these conclusions were reached.
 */
@JsonObject
export class ClinicalReport extends JSONHelper {
  /**
   * This is the interpretation request identifier (i.e.: first number in
   * XXX-123-1)
   */
  @JsonProperty("interpretationRequestId", String)
  interpretationRequestId: string = "";

  /**
   * This is the version of the interpretation request identifier (i.e.:
   * second number in XXX-123-2)
   */
  @JsonProperty("interpretationRequestVersion", Number)
  interpretationRequestVersion: number = 0; // int

  /** Date of this report in format YYYY-MM-DD */
  @JsonProperty("reportingDate", String)
  reportingDate: string = "";

  /** Author of this report */
  @JsonProperty("user", String)
  user: string = "";

  /**
   * List of small reported variants
   */
  @JsonProperty("variants", [SmallVariant], true)
  variants?: Array<SmallVariant> = undefined;

  /**
   * List of simple structural reported variants (duplications, deletions,
   * insertions, inversions, CNVs)
   */
  @JsonProperty("structuralVariants", [StructuralVariant], true)
  structuralVariants?: Array<StructuralVariant> = undefined;

  /**
   * List of complex structural reported variants (chomosomal rearrangement)
   */
  @JsonProperty("chromosomalRearrangements", [ChromosomalRearrangement], true)
  chromosomalRearrangements?: Array<ChromosomalRearrangement> = undefined;

  /**
   * List of short tandem repeat variants
   */
  @JsonProperty("shortTandemRepeats", [ShortTandemRepeat], true)
  shortTandemRepeats?: Array<ShortTandemRepeat> = undefined;

  /**
   * Summary of the interpretation, this should reflect the positive
   * conclusions of this interpretation
   */
  @JsonProperty("genomicInterpretation", String)
  genomicInterpretation: string = "";

  /**
   * The list of panels analysed to generate this report
   */
  @JsonProperty("additionalAnalysisPanels", [AdditionalAnalysisPanel], true)
  additionalAnalysisPanels?: Array<AdditionalAnalysisPanel> = undefined;

  /**
   * Supporting evidence (pubmed identifiers)
   */
  @JsonProperty("references", [String], true)
  references?: Array<string> = undefined;

  /**
   * This map contains the versions of the different databases used in the
   * process, being the database names the keys and the versions the values.
   */
  @JsonProperty("referenceDatabasesVersions", Object)
  referenceDatabasesVersions: {
    [name: string]: string;
  } = {};

  /**
   * This map contains the versions of the different software systems used in
   * the process, being the software names the keys and the versions the
   * values.
   */
  @JsonProperty("softwareVersions", Object)
  softwareVersions: {
    [name: string]: string;
  } = {};
}
