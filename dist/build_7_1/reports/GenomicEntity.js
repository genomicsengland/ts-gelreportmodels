"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Identifier_1 = require("./Identifier");
var json2typescript_1 = require("json2typescript");
/** A genomic feature */
var GenomicEntity = /** @class */ (function () {
    function GenomicEntity() {
        /** The type of the genomic entity */
        this.type = ''; // GenomicEntityType
        /** Ensembl identifier for the feature (e.g, ENST00000544455) */
        this.ensemblId = undefined;
        /** The HGNC gene symbol. This field is optional, BUT it should be filled if possible */
        this.geneSymbol = undefined;
        /** Others identifiers for this genomic feature */
        this.otherIds = [];
    }
    __decorate([
        json2typescript_1.JsonProperty('type', String)
    ], GenomicEntity.prototype, "type", void 0);
    __decorate([
        json2typescript_1.JsonProperty('ensemblId', String, true)
    ], GenomicEntity.prototype, "ensemblId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('geneSymbol', String, true)
    ], GenomicEntity.prototype, "geneSymbol", void 0);
    __decorate([
        json2typescript_1.JsonProperty('otherIds', [Identifier_1.Identifier])
    ], GenomicEntity.prototype, "otherIds", void 0);
    GenomicEntity = __decorate([
        json2typescript_1.JsonObject
    ], GenomicEntity);
    return GenomicEntity;
}());
exports.GenomicEntity = GenomicEntity;
;
//# sourceMappingURL=GenomicEntity.js.map