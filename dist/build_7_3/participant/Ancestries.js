"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChiSquare1KGenomesPhase3Pop_1 = require("./ChiSquare1KGenomesPhase3Pop");
var json2typescript_1 = require("json2typescript");
/** Ancestries, defined as Ethnic category(ies) and Chi-square test */
var Ancestries = /** @class */ (function () {
    function Ancestries() {
        /** Mother's Ethnic Origin */
        this.mothersEthnicOrigin = undefined; // EthnicCategory
        /** Father's Ethnic Origin */
        this.fathersEthnicOrigin = undefined; // EthnicCategory
        /** Father's Ethnic Origin Description */
        this.fathersOtherRelevantAncestry = undefined;
        /**
         * Chi-square test for goodness of fit of this sample to 1000 Genomes
         * Phase 3 populations
         */
        this.chiSquare1KGenomesPhase3Pop = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('mothersEthnicOrigin', String, true)
    ], Ancestries.prototype, "mothersEthnicOrigin", void 0);
    __decorate([
        json2typescript_1.JsonProperty('mothersOtherRelevantAncestry', String, true)
    ], Ancestries.prototype, "mothersOtherRelevantAncestry", void 0);
    __decorate([
        json2typescript_1.JsonProperty('fathersEthnicOrigin', String, true)
    ], Ancestries.prototype, "fathersEthnicOrigin", void 0);
    __decorate([
        json2typescript_1.JsonProperty('fathersOtherRelevantAncestry', String, true)
    ], Ancestries.prototype, "fathersOtherRelevantAncestry", void 0);
    __decorate([
        json2typescript_1.JsonProperty('chiSquare1KGenomesPhase3Pop', [ChiSquare1KGenomesPhase3Pop_1.ChiSquare1KGenomesPhase3Pop], true)
    ], Ancestries.prototype, "chiSquare1KGenomesPhase3Pop", void 0);
    Ancestries = __decorate([
        json2typescript_1.JsonObject
    ], Ancestries);
    return Ancestries;
}());
exports.Ancestries = Ancestries;
;
//# sourceMappingURL=Ancestries.js.map