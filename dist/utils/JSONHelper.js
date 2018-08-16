"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var JSONHelper = /** @class */ (function () {
    function JSONHelper() {
    }
    JSONHelper.fromJSON = function (json) {
        var jsonConvert = new json2typescript_1.JsonConvert();
        return jsonConvert.deserialize(json, this);
    };
    ;
    return JSONHelper;
}());
exports.default = JSONHelper;
;
//# sourceMappingURL=JSONHelper.js.map