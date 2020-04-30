"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Date = /** @class */ (function () {
    function Date() {
        this.year = 0;
        this.month = undefined;
        this.day = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("year", Number)
    ], Date.prototype, "year", void 0);
    __decorate([
        json2typescript_1.JsonProperty("month", Number)
    ], Date.prototype, "month", void 0);
    __decorate([
        json2typescript_1.JsonProperty("day", Number)
    ], Date.prototype, "day", void 0);
    Date = __decorate([
        json2typescript_1.JsonObject
    ], Date);
    return Date;
}());
exports.Date = Date;
//# sourceMappingURL=Date.js.map