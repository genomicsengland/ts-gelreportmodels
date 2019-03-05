import { JsonObject, JsonProperty } from "json2typescript";
import { Morphology } from "./Morphology";
import { Topography } from "./Topography";
import JSONHelper from "../../utils/JSONHelper";

/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
@JsonObject
export class Tumour extends JSONHelper {
    @JsonProperty('tumourId', String)
    tumourId: string = '';

    @JsonProperty('tumourLocalId', String)
    tumourLocalId: string = '';

    @JsonProperty('tumourType', String)
    tumourType: string = '';

    @JsonProperty('tumourParentId', String, true)
    tumourParentId?: string = undefined;

    @JsonProperty('tumourDiagnosisDate', Date, true)
    tumourDiagnosisDate?: Date = new Date;

    @JsonProperty('tumourDescription', String, true)
    tumourDescription?: string = undefined;

    @JsonProperty('tumourMorphologies', [Morphology], true)
    tumourMorphologies?: Morphology[] = undefined;

    @JsonProperty('tumourTopographies', [Topography], true)
    tumourTopographies?: Topography[] = undefined;

    @JsonProperty('tumourPrimaryTopographies', [Topography], true)
    tumourPrimaryTopographies?: Topography[] = undefined;

    @JsonProperty('tumourGrade', String, true)
    tumourGrade?: string = undefined;

    @JsonProperty('tumourStage', String, true)
    tumourStage?: string = undefined;

    @JsonProperty('tumourPrognosticScore', String, true)
    tumourPrognosticScore?: string = undefined;

    @JsonProperty('tumourPresentation', String, true)
    tumourPresentation?: string = undefined;

    @JsonProperty('primaryOrMetastatic', String, true)
    primaryOrMetastatic?: string = undefined;
};
