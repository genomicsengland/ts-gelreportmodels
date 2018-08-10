import { JsonObject, JsonProperty } from "json2typescript";

/**
 * This is quite GEL specific. This is the way is stored in ModelCatalogue and
 * PanelApp. Currently all specific disease titles are assigned to a disease
 * subgroup so really only specificDisease needs to be completed but we add the
 * others for generality
 */
@JsonObject
export class Disorder {
    /** This is Level2 Title for this disorder */
    @JsonProperty('diseaseGroup', String, true)
    diseaseGroup?: string = undefined;

    /** This is Level3 Title for this disorder */
    @JsonProperty('diseaseSubGroup', String, true)
    diseaseSubGroup?: string = undefined;

    /** This is Level4 Title for this disorder */
    @JsonProperty('specificDisease', String, true)
    specificDisease?: string = undefined;

    /** Age of onset in years */
    @JsonProperty('ageOfOnset', Number, true)
    ageOfOnset?: number = undefined; // type:double
};
