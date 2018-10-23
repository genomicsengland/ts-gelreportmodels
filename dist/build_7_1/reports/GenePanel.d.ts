import JSONHelper from "../../utils/JSONHelper";
/**
 * A panel of genes
 */
export declare class GenePanel extends JSONHelper {
    /** Unique panel identifier */
    panelIdentifier?: string;
    /** Panel name used */
    panelName?: string;
    /** Panel version */
    panelVersion?: string;
    /** source i.e, PanelApp */
    source?: string;
}
