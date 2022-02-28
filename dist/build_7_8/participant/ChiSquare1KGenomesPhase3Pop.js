"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiSquare1KGenomesPhase3Pop = void 0;
var json2typescript_1 = require("json2typescript");
/**
 * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase 3
 * populations
 */
var ChiSquare1KGenomesPhase3Pop = /** @class */ (function () {
    function ChiSquare1KGenomesPhase3Pop() {
        /** 1K Super Population */
        this.kgSuperPopCategory = ""; // KgSuperPopCategory
        /** 1K Population */
        this.kgPopCategory = undefined; // KgPopCategory
        /**
         * Chi-square test for goodness of fit of this sample to this 1000 Genomes
         * Phase 3 population
         */
        this.chiSquare = 0; // double
    }
    __decorate([
        json2typescript_1.JsonProperty("kgSuperPopCategory", String)
    ], ChiSquare1KGenomesPhase3Pop.prototype, "kgSuperPopCategory", void 0);
    __decorate([
        json2typescript_1.JsonProperty("kgPopCategory", String, true)
    ], ChiSquare1KGenomesPhase3Pop.prototype, "kgPopCategory", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chiSquare", Number, true)
    ], ChiSquare1KGenomesPhase3Pop.prototype, "chiSquare", void 0);
    ChiSquare1KGenomesPhase3Pop = __decorate([
        json2typescript_1.JsonObject
    ], ChiSquare1KGenomesPhase3Pop);
    return ChiSquare1KGenomesPhase3Pop;
}());
exports.ChiSquare1KGenomesPhase3Pop = ChiSquare1KGenomesPhase3Pop;
//# sourceMappingURL=ChiSquare1KGenomesPhase3Pop.js.map