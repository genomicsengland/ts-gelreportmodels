"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Karyotype = exports.Aneuploidy = void 0;
var json2typescript_1 = require("json2typescript");
var Aneuploidy = /** @class */ (function () {
    function Aneuploidy() {
        /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
        this.iscn = undefined;
        /** The assembly */
        this.assembly = "";
        /** Chromosome involved in the aneuploidy */
        this.chromosome = "";
        /** Wheter the aneuploidy is for the whole chromosme or just a fragment */
        this.complete = false;
        /** Coordinates can be specified to indicate the part of the chromosome affected */
        this.coordinates = undefined;
        /** Number of copies */
        this.numberOfCopies = 0;
    }
    __decorate([
        json2typescript_1.JsonProperty("iscn", String, true)
    ], Aneuploidy.prototype, "iscn", void 0);
    __decorate([
        json2typescript_1.JsonProperty("assembly", String)
    ], Aneuploidy.prototype, "assembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chromosome", String)
    ], Aneuploidy.prototype, "chromosome", void 0);
    __decorate([
        json2typescript_1.JsonProperty("complete", Boolean)
    ], Aneuploidy.prototype, "complete", void 0);
    __decorate([
        json2typescript_1.JsonProperty("coordinates", json2typescript_1.Any, true)
    ], Aneuploidy.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("numberOfCopies", Number)
    ], Aneuploidy.prototype, "numberOfCopies", void 0);
    Aneuploidy = __decorate([
        json2typescript_1.JsonObject
    ], Aneuploidy);
    return Aneuploidy;
}());
exports.Aneuploidy = Aneuploidy;
var Karyotype = /** @class */ (function () {
    function Karyotype() {
        /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
        this.iscn = undefined;
        /** Full description of the karyotype */
        this.description = undefined;
        /** List of aneuploidies */
        this.aneuploidies = undefined;
        /** Number of copies */
        this.numberOfChromosomes = 0;
        /** Kariotypic sex */
        this.personKaryotipicSex = "";
        /** Participant identifier */
        this.participantId = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("iscn", String, true)
    ], Karyotype.prototype, "iscn", void 0);
    __decorate([
        json2typescript_1.JsonProperty("description", String, true)
    ], Karyotype.prototype, "description", void 0);
    __decorate([
        json2typescript_1.JsonProperty("aneuploidies", [Aneuploidy], true)
    ], Karyotype.prototype, "aneuploidies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("numberOfChromosomes", Number)
    ], Karyotype.prototype, "numberOfChromosomes", void 0);
    __decorate([
        json2typescript_1.JsonProperty("personKaryotipicSex", String)
    ], Karyotype.prototype, "personKaryotipicSex", void 0);
    __decorate([
        json2typescript_1.JsonProperty("participantId", String)
    ], Karyotype.prototype, "participantId", void 0);
    Karyotype = __decorate([
        json2typescript_1.JsonObject
    ], Karyotype);
    return Karyotype;
}());
exports.Karyotype = Karyotype;
//# sourceMappingURL=Karyotype.js.map