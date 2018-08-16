"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var StandardPhenotype_1 = require("./StandardPhenotype");
var json2typescript_1 = require("json2typescript");
/**
 * Oontology term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
 */
var Phenotypes = /** @class */ (function () {
    function Phenotypes() {
        /** The non standardised phenotypes (i.e.: may be free text) */
        this.nonStandardPhenotype = undefined;
        /** The standardised phenotypes (i.e.: controlled terminology) */
        this.standardPhenotypes = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('nonStandardPhenotype', [String], true)
    ], Phenotypes.prototype, "nonStandardPhenotype", void 0);
    __decorate([
        json2typescript_1.JsonProperty('standardPhenotypes', [StandardPhenotype_1.StandardPhenotype], true)
    ], Phenotypes.prototype, "standardPhenotypes", void 0);
    Phenotypes = __decorate([
        json2typescript_1.JsonObject
    ], Phenotypes);
    return Phenotypes;
}());
exports.Phenotypes = Phenotypes;
;
//# sourceMappingURL=Phenotypes.js.map