import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * The variant classification according to different properties.
 */
@JsonObject
export class VariantClassification {
    /** The variant's clinical significance. */
    @JsonProperty('clinicalSignificance', String, true)
    clinicalSignificance?: string = undefined;  // ClinicalSignificance

    /** The variant's pharmacogenomics classification. */
    @JsonProperty('drugResponseClassification', String, true)
    drugResponseClassification?: string = undefined;  // DrugResponseClassification

    /** The variant's trait association. */
    @JsonProperty('traitAssociation', String, true)
    traitAssociation?: string = undefined;  // TraitAssociation

    /** The variant's tumorigenesis classification */
    @JsonProperty('tumorigenesisClassification', String, true)
    tumorigenesisClassification?: string = undefined;  // TumorigenesisClassification

    /** The variant functional effect */
    @JsonProperty('functionalEffect', String, true)
    functionalEffect?: string = undefined;  // VariantFunctionalEffect
};
