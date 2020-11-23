"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlleleFrequency = void 0;
var json2typescript_1 = require("json2typescript");
/**
 * The population allele frequency of a given variant in a given study and
 * optionally population
 */
var AlleleFrequency = /** @class */ (function () {
    function AlleleFrequency() {
        /** The study from where this data comes from */
        this.study = "";
        /** The specific population where this allele frequency belongs */
        this.population = "";
        /** The frequency of the alternate allele */
        this.alternateFrequency = 0;
    }
    __decorate([
        json2typescript_1.JsonProperty("study", String)
    ], AlleleFrequency.prototype, "study", void 0);
    __decorate([
        json2typescript_1.JsonProperty("population", String)
    ], AlleleFrequency.prototype, "population", void 0);
    __decorate([
        json2typescript_1.JsonProperty("alternateFrequency", Number)
    ], AlleleFrequency.prototype, "alternateFrequency", void 0);
    AlleleFrequency = __decorate([
        json2typescript_1.JsonObject
    ], AlleleFrequency);
    return AlleleFrequency;
}());
exports.AlleleFrequency = AlleleFrequency;
//# sourceMappingURL=AlleleFrequency.js.map