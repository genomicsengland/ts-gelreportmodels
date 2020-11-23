import { SmallVariant } from "./SmallVariant";
import { StructuralVariant } from "./StructuralVariant";
import { ChromosomalRearrangement } from "./ChromosomalRearrangement";
import { ShortTandemRepeat } from "./ShortTandemRepeat";
import { AdditionalAnalysisPanel } from "./AdditionalAnalysisPanel";
import JSONHelper from "../../utils/JSONHelper";
/**
 * A clinical report. This holds the list of reported variants by an expert
 * together with all the relevant information that identify the case and how
 * these conclusions were reached.
 */
export declare class AdditionalFindingsClinicalReport extends JSONHelper {
    /**
     * This is the participantId identifier (i.e.: first number in
     * XXX-123-1)
     */
    participantId: string;
    /** Date of this report in format YYYY-MM-DD */
    reportingDate: string;
    /** Author of this report */
    user: string;
    /**
     * List of small reported variants
     */
    variants?: Array<SmallVariant>;
    /**
     * List of simple structural reported variants (duplications, deletions,
     * insertions, inversions, CNVs)
     */
    structuralVariants?: Array<StructuralVariant>;
    /**
     * List of complex structural reported variants (chomosomal rearrangement)
     */
    chromosomalRearrangements?: Array<ChromosomalRearrangement>;
    /**
     * List of short tandem repeat variants
     */
    shortTandemRepeats?: Array<ShortTandemRepeat>;
    /**
     * Summary of the interpretation, this should reflect the positive
     * conclusions of this interpretation
     */
    genomicInterpretation: string;
    /**
     * The list of panels analysed to generate this report
     */
    additionalAnalysisPanels?: Array<AdditionalAnalysisPanel>;
    /**
     * Supporting evidence (pubmed identifiers)
     */
    references?: Array<string>;
    /**
     * This map contains the versions of the different databases used in the
     * process, being the database names the keys and the versions the values.
     */
    referenceDatabasesVersions: {
        [name: string]: string;
    };
    /**
     * This map contains the versions of the different software systems used in
     * the process, being the software names the keys and the versions the
     * values.
     */
    softwareVersions: {
        [name: string]: string;
    };
}
