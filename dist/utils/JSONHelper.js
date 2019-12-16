"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var JSONHelper = /** @class */ (function () {
    function JSONHelper() {
    }
    JSONHelper.fromJSON = function (json) {
        var jsonConvert = new json2typescript_1.JsonConvert(json2typescript_1.OperationMode.ENABLE, json2typescript_1.ValueCheckingMode.ALLOW_NULL);
        var cls = jsonConvert.deserialize(json, this);
        if (cls.postConstruct) {
            cls.postConstruct();
        }
        return cls;
    };
    JSONHelper.prototype.toJSON = function () {
        var jsonConvert = new json2typescript_1.JsonConvert(json2typescript_1.OperationMode.ENABLE, json2typescript_1.ValueCheckingMode.ALLOW_NULL);
        return jsonConvert.serialize(this);
    };
    return JSONHelper;
}());
exports.default = JSONHelper;
//# sourceMappingURL=JSONHelper.js.map