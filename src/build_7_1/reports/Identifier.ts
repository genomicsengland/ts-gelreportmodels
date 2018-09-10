import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Identifier {
    /** Source i.e, esenmbl */
    @JsonProperty('source', String)
    source: string = '';

    /** identifier */
    @JsonProperty('identifier', String)
    identifier: string = '';
}
