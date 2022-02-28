"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniparentalDisomyDetails = exports.UniparentalDisomy = exports.UniparentalDisomyEvidences = exports.IdentityByDescent = exports.UniparentalDisomyFragment = void 0;
var json2typescript_1 = require("json2typescript");
// import JSONHelper from "../../utils/JSONHelper";
var Coordinates_1 = require("./Coordinates");
var UniparentalDisomyFragment = /** @class */ (function () {
    function UniparentalDisomyFragment() {
        /** Coordinates can be specified to indicate the part of the chromosome affected */
        this.coordinates = undefined;
        /** indicates whether the UPD event involves `isodisomy`, `heterodisomy` or `both` */
        this.uniparentalDisomyType = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("coordinates", Coordinates_1.Coordinates, true)
    ], UniparentalDisomyFragment.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("uniparentalDisomyType", String)
    ], UniparentalDisomyFragment.prototype, "uniparentalDisomyType", void 0);
    UniparentalDisomyFragment = __decorate([
        json2typescript_1.JsonObject
    ], UniparentalDisomyFragment);
    return UniparentalDisomyFragment;
}());
exports.UniparentalDisomyFragment = UniparentalDisomyFragment;
var IdentityByDescent = /** @class */ (function () {
    function IdentityByDescent() {
        this.relatedSample = "";
        this.ibd0 = 0;
        this.ibd1 = 0;
        this.ibd2 = 0;
        this.pihat = 0;
    }
    __decorate([
        json2typescript_1.JsonProperty("relatedSample", String)
    ], IdentityByDescent.prototype, "relatedSample", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ibd0", Number)
    ], IdentityByDescent.prototype, "ibd0", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ibd1", Number)
    ], IdentityByDescent.prototype, "ibd1", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ibd2", Number)
    ], IdentityByDescent.prototype, "ibd2", void 0);
    __decorate([
        json2typescript_1.JsonProperty("pihat", Number)
    ], IdentityByDescent.prototype, "pihat", void 0);
    IdentityByDescent = __decorate([
        json2typescript_1.JsonObject
    ], IdentityByDescent);
    return IdentityByDescent;
}());
exports.IdentityByDescent = IdentityByDescent;
var UniparentalDisomyEvidences = /** @class */ (function () {
    function UniparentalDisomyEvidences() {
        this.ibds = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("ibds", [IdentityByDescent], true)
    ], UniparentalDisomyEvidences.prototype, "ibds", void 0);
    UniparentalDisomyEvidences = __decorate([
        json2typescript_1.JsonObject
    ], UniparentalDisomyEvidences);
    return UniparentalDisomyEvidences;
}());
exports.UniparentalDisomyEvidences = UniparentalDisomyEvidences;
var UniparentalDisomy = /** @class */ (function () {
    function UniparentalDisomy() {
        /** The assembly */
        this.assembly = "";
        /** Chromosome where two homologues were inherited from one parent */
        this.chromosome = "";
        /** indicates Whether the UPD event involves an entire chromosome or part of a chromosome */
        this.complete = undefined;
        /** The parent who contributed two chromosomes was the mother (maternal) or the father (paternal) */
        this.origin = "";
        /** List of all of the UPD fragments for this UPD event */
        this.uniparentalDisomyFragments = undefined;
        /** Participant affected by this UPD */
        this.participantId = "";
        this.uniparentalDisomyEvidences = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("assembly", String)
    ], UniparentalDisomy.prototype, "assembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chromosome", String)
    ], UniparentalDisomy.prototype, "chromosome", void 0);
    __decorate([
        json2typescript_1.JsonProperty("complete", Boolean, true)
    ], UniparentalDisomy.prototype, "complete", void 0);
    __decorate([
        json2typescript_1.JsonProperty("origin", String) // UniparentalDisomyOrigin
    ], UniparentalDisomy.prototype, "origin", void 0);
    __decorate([
        json2typescript_1.JsonProperty("uniparentalDisomyFragments", [UniparentalDisomyFragment], true)
    ], UniparentalDisomy.prototype, "uniparentalDisomyFragments", void 0);
    __decorate([
        json2typescript_1.JsonProperty("participantId", String)
    ], UniparentalDisomy.prototype, "participantId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("uniparentalDisomyEvidences", UniparentalDisomyEvidences, true)
    ], UniparentalDisomy.prototype, "uniparentalDisomyEvidences", void 0);
    UniparentalDisomy = __decorate([
        json2typescript_1.JsonObject
    ], UniparentalDisomy);
    return UniparentalDisomy;
}());
exports.UniparentalDisomy = UniparentalDisomy;
var UniparentalDisomyDetails = /** @class */ (function () {
    function UniparentalDisomyDetails() {
        /**
         * Reference assembly
         */
        this.assembly = "";
        /**
         * Chromosome where two homologues were inherited from one parent
         */
        this.chromosome = "";
        /**
         * indicates whether UPD event involves an entire chromosome
         */
        this.complete = undefined;
        /**
        The parent who contributed two chromosomes was the mother (maternal) or the father (paternal)
        */
        this.origin = "";
        /**
        List of all of the UPD fragments for this UPD event
        */
        this.uniparentalDisomyFragments = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("assembly", String)
    ], UniparentalDisomyDetails.prototype, "assembly", void 0);
    __decorate([
        json2typescript_1.JsonProperty("chromosome", String)
    ], UniparentalDisomyDetails.prototype, "chromosome", void 0);
    __decorate([
        json2typescript_1.JsonProperty("complete", Boolean, true)
    ], UniparentalDisomyDetails.prototype, "complete", void 0);
    __decorate([
        json2typescript_1.JsonProperty("origin", String) // UniparentalDisomyOrigin
    ], UniparentalDisomyDetails.prototype, "origin", void 0);
    __decorate([
        json2typescript_1.JsonProperty("uniparentalDisomyFragments", UniparentalDisomyFragment, true)
    ], UniparentalDisomyDetails.prototype, "uniparentalDisomyFragments", void 0);
    UniparentalDisomyDetails = __decorate([
        json2typescript_1.JsonObject
    ], UniparentalDisomyDetails);
    return UniparentalDisomyDetails;
}());
exports.UniparentalDisomyDetails = UniparentalDisomyDetails;
//# sourceMappingURL=UniparentalDisomy.js.map