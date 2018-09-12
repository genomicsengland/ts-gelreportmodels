import { JsonConvert, ValueCheckingMode, OperationMode } from "json2typescript";

export default class JSONHelper {
    static fromJSON(json: {}) {
        const jsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL);
        const cls = jsonConvert.deserialize(json, this);

        if (cls.postConstruct) {
            cls.postConstruct();
        }

        return cls;
    };

    toJSON() {
        const jsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL);
        return jsonConvert.serialize(this);
    }
};
