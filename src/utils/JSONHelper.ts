import { JsonConvert } from "json2typescript";

export default class JSONHelper {
    static fromJSON(json: {}) {
        let jsonConvert: JsonConvert = new JsonConvert();
        return jsonConvert.deserialize(json, this);
    };
};
