"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var AgeRange = /** @class */ (function () {
    function AgeRange() {
        this.minimumAge = 0;
        this.maximumAge = 0;
        this.timeunit = ""; // TimeUnit
    }
    __decorate([
        json2typescript_1.JsonProperty("minimumAge", Number)
    ], AgeRange.prototype, "minimumAge", void 0);
    __decorate([
        json2typescript_1.JsonProperty("maximumAge", Number)
    ], AgeRange.prototype, "maximumAge", void 0);
    __decorate([
        json2typescript_1.JsonProperty("timeunit", String)
    ], AgeRange.prototype, "timeunit", void 0);
    AgeRange = __decorate([
        json2typescript_1.JsonObject
    ], AgeRange);
    return AgeRange;
}());
exports.AgeRange = AgeRange;
//# sourceMappingURL=AgeRange.js.map