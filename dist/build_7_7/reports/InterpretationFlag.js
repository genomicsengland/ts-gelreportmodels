"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretationFlag = void 0;
var json2typescript_1 = require("json2typescript");
var InterpretationFlag = /** @class */ (function () {
    function InterpretationFlag() {
        this.interpretationFlag = ""; // InterpretationFlags
        this.additionalDescription = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("interpretationFlag", String)
    ], InterpretationFlag.prototype, "interpretationFlag", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalDescription", String, true)
    ], InterpretationFlag.prototype, "additionalDescription", void 0);
    InterpretationFlag = __decorate([
        json2typescript_1.JsonObject
    ], InterpretationFlag);
    return InterpretationFlag;
}());
exports.InterpretationFlag = InterpretationFlag;
//# sourceMappingURL=InterpretationFlag.js.map