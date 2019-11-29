import { Phenotypes } from './Phenotypes';
import { VariantConsequence } from './VariantConsequence';
import { GenePanel } from './GenePanel';
import { GenomicEntity } from './GenomicEntity';
import { Actions } from './Actions';
import { VariantClassification } from './VariantClassification';
import { GuidelineBasedVariantClassification } from './GuidelineBasedVariantClassification';
import { AlgorithmBasedVariantClassification } from './AlgorithmBasedVariantClassification';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

@JsonObject
export class ReportEvent extends JSONHelper {
    /**
     * Unique identifier for each report event, this is unique across the whole
     * report. A report having more than one report event with the same
     * identifier is invalid. Repeating report event identifiers between
     * different reports is valid. The uniqueness of this field will be checked
     * in report validation
     */
    @JsonProperty('reportEventId', String)
    reportEventId: string = '';

    /** The list of phenotypes */
    @JsonProperty('phenotypes', Phenotypes)
    phenotypes: Phenotypes = new Phenotypes;

    /**
     * Sequence Ontology terms for relevant consequence types for this report
     * event 
     */
    @JsonProperty('variantConsequences', [VariantConsequence])
    variantConsequences: Array<VariantConsequence> = [];

    /** The panel of genes to which this report corresponds */
    @JsonProperty('genePanel', GenePanel, true)
    genePanel?: GenePanel = undefined;

    /** Mode of inheritance used to analyse the family */
    @JsonProperty('modeOfInheritance', String)
    modeOfInheritance: string = '';  // ModeOfInheritance

    /** 
     * The list of genomic features of interest for this report event. Please
     * note that one variant can overlap more that one gene/transcript. If more
     * than one gene/transcript is considered interesting for this particular
     * variant, should be reported in two different ReportEvents
     */
    @JsonProperty('genomicEntities', [GenomicEntity])
    genomicEntities: Array<GenomicEntity> = [];

    /**
     * Segregation pattern if any calculated using the genotypes information of
     * a family
     */
    @JsonProperty('segregationPattern', String, true)
    segregationPattern?: string = undefined;  // SegregationPattern

    /**
     * This is the penetrance assumed for scoring or classifying this variant
     */
    @JsonProperty('penetrance', String)
    penetrance: string = '';  // Penetrance

    /**
     * Likelihood of being a de novo variant
     */
    @JsonProperty('deNovoQualityScore', Number, true)
    deNovoQualityScore?: number = undefined;

    /** 
     * Flag to indicate if this variant using this mode of inheritance can
     * fully explain the phenotype
     */
    @JsonProperty('fullyExplainsPhenotype', Boolean, true)
    fullyExplainsPhenotype?: boolean = undefined;

    /**
     * This value groups variants that together could explain the phenotype
     * according to the mode of inheritance used. (e.g.: compound
     * heterozygous). All the variants in the same report sharing the same
     * value will be considered in the same group (i.e.: reported together).
     * This value is an integer unique in the whole report. These values are
     * only relevant within the same report.
     */
    @JsonProperty('groupOfVariants', Number, true)
    groupOfVariants?: number = undefined;

    /**
     * This is the description of why this variant would be reported, for
     * example that it affects the protein in this way and that this gene has
     * been implicated in this disorder in these publications. Publications
     * should be provided as PMIDs using the format [PMID:8075643]. Other
     * sources can be used in the same manner, e.g. [OMIM:163500]. Brackets 
     * need to be included.
     */
    @JsonProperty('eventJustification', String, true)
    eventJustification?: string = undefined;

    /** The role of this variant in cancer if any */
    @JsonProperty('roleInCancer', [String], true)
    roleInCancer?: Array<string> = undefined;  // RoleInCancer

    /** Actions can be taken on the variant if any */
    @JsonProperty('actions', Actions, true)
    actions?: Actions = undefined;

    /**
     * This is the score provided to reflect a variant's likelihood of
     * explaining the phenotype using a specific mode of Inheritance. This may
     * be the result of different scoring systems
     */
    @JsonProperty('score', Number, true)
    score?: number = undefined;

    /**
     * Other scores that the interpretation provider may add (for example
     * phenotypically informed or family informed scores)
     */
    @JsonProperty('vendorSpecificScores', Object, true)
    vendorSpecificScores?: {
        [name: string]: number;
    } = undefined;

    /** Variant classification */
    @JsonProperty('variantClassification', VariantClassification, true)
    variantClassification?: VariantClassification = undefined;

    /** Guidelines based Variant classification */
    @JsonProperty('guidelineBasedVariantClassification', GuidelineBasedVariantClassification, true)
    guidelineBasedVariantClassification?: GuidelineBasedVariantClassification = undefined;

    /** Algorithm based variant classifications */
    @JsonProperty('algorithmBasedVariantClassifications', [AlgorithmBasedVariantClassification], true)
    algorithmBasedVariantClassifications?: Array<AlgorithmBasedVariantClassification> = undefined;

    /**
     * The tier where this variant has been classified. Tier is a property of
     * the model of inheritance and therefore is subject to change depending on
     * the inheritance assumptions
     */
    @JsonProperty('tier', String, true)
    tier?: string = undefined;  // Tier

    /** The Domain where this variant has been classified. */
    @JsonProperty('domain', String, true)
    domain?: string = undefined;  // Domain

    /** attributes below are not in GelReportModels but are required for CVA frontend */
    @JsonProperty('author', String, true)
    author?: string = undefined;

    @JsonProperty('interpretationService', String, true)
    interpretationService?: string = undefined;
};
