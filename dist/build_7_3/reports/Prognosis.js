"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Prognosis = /** @class */ (function () {
    function Prognosis() {
        /** URL where reference information for this prognosis can be found */
        this.referenceUrl = '';
        /**
         * Prognosis classification (defined as favourable or unfavourable),
         * in the case that the direction of the prognosis is not known
         * altered_prognosis should be used
         */
        this.prognosis = undefined; // PrognosisClassification
        /** Source if known */
        this.source = undefined;
        /** References */
        this.references = undefined;
        /** Full description of the associated prognosis */
        this.description = undefined;
        /**
         * If true, the association was made at the variant level, if not the
         * association was made at Genomic Entity level
         */
        this.variantActionable = false;
    }
    __decorate([
        json2typescript_1.JsonProperty('referenceUrl', String)
    ], Prognosis.prototype, "referenceUrl", void 0);
    __decorate([
        json2typescript_1.JsonProperty('prognosis', String, true)
    ], Prognosis.prototype, "prognosis", void 0);
    __decorate([
        json2typescript_1.JsonProperty('source', String, true)
    ], Prognosis.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty('references', [String], true)
    ], Prognosis.prototype, "references", void 0);
    __decorate([
        json2typescript_1.JsonProperty('description', String, true)
    ], Prognosis.prototype, "description", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantActionable', Boolean)
    ], Prognosis.prototype, "variantActionable", void 0);
    Prognosis = __decorate([
        json2typescript_1.JsonObject
    ], Prognosis);
    return Prognosis;
}());
exports.Prognosis = Prognosis;
;
//# sourceMappingURL=Prognosis.js.map