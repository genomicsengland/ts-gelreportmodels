import { Phenotypes } from './Phenotypes';
import { VariantConsequence } from './VariantConsequence';
import { GenePanel } from './GenePanel';
import { GenomicEntity } from './GenomicEntity';
import { Actions } from './Actions';
import { VariantClassification } from './VariantClassification';
import { GuidelineBasedVariantClassification } from './GuidelineBasedVariantClassification';
import { AlgorithmBasedVariantClassification } from './AlgorithmBasedVariantClassification';
import JSONHelper from '../../utils/JSONHelper';
export declare class ReportEvent extends JSONHelper {
    /**
     * Unique identifier for each report event, this is unique across the whole
     * report. A report having more than one report event with the same
     * identifier is invalid. Repeating report event identifiers between
     * different reports is valid. The uniqueness of this field will be checked
     * in report validation
     */
    reportEventId: string;
    /** The list of phenotypes */
    phenotypes: Phenotypes;
    /**
     * Sequence Ontology terms for relevant consequence types for this report
     * event
     */
    variantConsequences: Array<VariantConsequence>;
    /** The panel of genes to which this report corresponds */
    genePanel?: GenePanel;
    /** Mode of inheritance used to analyse the family */
    modeOfInheritance: string;
    /**
     * The list of genomic features of interest for this report event. Please
     * note that one variant can overlap more that one gene/transcript. If more
     * than one gene/transcript is considered interesting for this particular
     * variant, should be reported in two different ReportEvents
     */
    genomicEntities: Array<GenomicEntity>;
    /**
     * Segregation pattern if any calculated using the genotypes information of
     * a family
     */
    segregationPattern?: string;
    /**
     * This is the penetrance assumed for scoring or classifying this variant
     */
    penetrance: string;
    /**
     * Likelihood of being a de novo variant
     */
    deNovoQualityScore?: number;
    /**
     * Flag to indicate if this variant using this mode of inheritance can
     * fully explain the phenotype
     */
    fullyExplainsPhenotype?: boolean;
    /**
     * This value groups variants that together could explain the phenotype
     * according to the mode of inheritance used. (e.g.: compound
     * heterozygous). All the variants in the same report sharing the same
     * value will be considered in the same group (i.e.: reported together).
     * This value is an integer unique in the whole report. These values are
     * only relevant within the same report.
     */
    groupOfVariants?: number;
    /**
     * This is the description of why this variant would be reported, for
     * example that it affects the protein in this way and that this gene has
     * been implicated in this disorder in these publications. Publications
     * should be provided as PMIDs using the format [PMID:8075643]. Other
     * sources can be used in the same manner, e.g. [OMIM:163500]. Brackets
     * need to be included.
     */
    eventJustification?: string;
    /** The role of this variant in cancer if any */
    roleInCancer?: Array<string>;
    /** Actions can be taken on the variant if any */
    actions?: Actions;
    /**
     * This is the score provided to reflect a variant's likelihood of
     * explaining the phenotype using a specific mode of Inheritance. This may
     * be the result of different scoring systems
     */
    score?: number;
    /**
     * Other scores that the interpretation provider may add (for example
     * phenotypically informed or family informed scores)
     */
    vendorSpecificScores?: {
        [name: string]: number;
    };
    /** Variant classification */
    variantClassification?: VariantClassification;
    /** Guidelines based Variant classification */
    guidelineBasedVariantClassification?: GuidelineBasedVariantClassification;
    /** Algorithm based variant classifications */
    algorithmBasedVariantClassifications?: Array<AlgorithmBasedVariantClassification>;
    /**
     * The tier where this variant has been classified. Tier is a property of
     * the model of inheritance and therefore is subject to change depending on
     * the inheritance assumptions
     */
    tier?: string;
    /** The Domain where this variant has been classified. */
    domain?: string;
    /** attributes below are not in GelReportModels but are required for CVA frontend */
    author?: string;
    interpretationService?: string;
}
