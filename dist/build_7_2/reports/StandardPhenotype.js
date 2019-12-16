"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ontology_1 = require("./Ontology");
var json2typescript_1 = require("json2typescript");
/**
 * Standard phenotype term based on the OBO format (see an example here
 * http://snapshot.geneontology.org/ontology/go-basic.obo)
 */
var StandardPhenotype = /** @class */ (function () {
    function StandardPhenotype() {
        this.id = "";
        this.name = undefined;
        this.namespace = undefined;
        this.definition = undefined;
        this.comment = undefined;
        this.alternativeIds = undefined;
        this.synonyms = undefined;
        this.isA = undefined;
        /** The ontology (e.g.: HPO, OMIM, SNOMED CT) */
        this.ontology = new Ontology_1.Ontology();
        /** The match between the non standard phenotype and this term when in silico */
        this.matchScore = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("id", String)
    ], StandardPhenotype.prototype, "id", void 0);
    __decorate([
        json2typescript_1.JsonProperty("name", String, true)
    ], StandardPhenotype.prototype, "name", void 0);
    __decorate([
        json2typescript_1.JsonProperty("namespace", String, true)
    ], StandardPhenotype.prototype, "namespace", void 0);
    __decorate([
        json2typescript_1.JsonProperty("definition", String, true)
    ], StandardPhenotype.prototype, "definition", void 0);
    __decorate([
        json2typescript_1.JsonProperty("comment", String, true)
    ], StandardPhenotype.prototype, "comment", void 0);
    __decorate([
        json2typescript_1.JsonProperty("alternativeIds", String, true)
    ], StandardPhenotype.prototype, "alternativeIds", void 0);
    __decorate([
        json2typescript_1.JsonProperty("synonyms", String, true)
    ], StandardPhenotype.prototype, "synonyms", void 0);
    __decorate([
        json2typescript_1.JsonProperty("isA", String, true)
    ], StandardPhenotype.prototype, "isA", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ontology", Ontology_1.Ontology, true)
    ], StandardPhenotype.prototype, "ontology", void 0);
    __decorate([
        json2typescript_1.JsonProperty("matchScore", Number, true)
    ], StandardPhenotype.prototype, "matchScore", void 0);
    StandardPhenotype = __decorate([
        json2typescript_1.JsonObject
    ], StandardPhenotype);
    return StandardPhenotype;
}());
exports.StandardPhenotype = StandardPhenotype;
//# sourceMappingURL=StandardPhenotype.js.map