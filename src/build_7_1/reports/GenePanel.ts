import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";

/**
 * A panel of genes
 */
@JsonObject
export class GenePanel extends JSONHelper {
    /** Unique panel identifier */
    @JsonProperty('panelIdentifier', String, true)
    panelIdentifier?: string = undefined;

    /** Panel name used */
    @JsonProperty('panelName', String, true)
    panelName?: string = undefined;

    /** Panel version */
    @JsonProperty('panelVersion', String, true)
    panelVersion?: string = undefined;

    /** source i.e, PanelApp */
    @JsonProperty('source', String, true)
    source?: string = undefined;
};
