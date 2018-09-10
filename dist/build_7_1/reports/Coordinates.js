"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfidenceInterval_1 = require("./ConfidenceInterval");
var json2typescript_1 = require("json2typescript");
var Coordinates = /** @class */ (function () {
    function Coordinates() {
        this.chromosome = '';
        this.start = 0; // int
        this.end = 0; // end
        this.ciStart = undefined;
        this.ciEnd = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('chromosome', String)
    ], Coordinates.prototype, "chromosome", void 0);
    __decorate([
        json2typescript_1.JsonProperty('start', Number)
    ], Coordinates.prototype, "start", void 0);
    __decorate([
        json2typescript_1.JsonProperty('end', Number)
    ], Coordinates.prototype, "end", void 0);
    __decorate([
        json2typescript_1.JsonProperty('ciStart', ConfidenceInterval_1.ConfidenceInterval, true)
    ], Coordinates.prototype, "ciStart", void 0);
    __decorate([
        json2typescript_1.JsonProperty('ciEnd', ConfidenceInterval_1.ConfidenceInterval, true)
    ], Coordinates.prototype, "ciEnd", void 0);
    Coordinates = __decorate([
        json2typescript_1.JsonObject
    ], Coordinates);
    return Coordinates;
}());
exports.Coordinates = Coordinates;
;
//# sourceMappingURL=Coordinates.js.map