"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DrugResponse_1 = require("./DrugResponse");
var Intervention_1 = require("./Intervention");
var json2typescript_1 = require("json2typescript");
var Therapy = /** @class */ (function () {
    function Therapy() {
        /**
         * URL where reference information for this therapy association can be found
         * */
        this.referenceUrl = "";
        /** Source */
        this.source = undefined;
        /** Drug responses */
        this.drugResponse = undefined;
        /** Any other clinical intervention */
        this.otherInterventions = [];
        /**
         * If true, the association was made at the variant level, if not the
         * association was made at Genomic Entity level
         */
        this.variantActionable = false;
    }
    __decorate([
        json2typescript_1.JsonProperty("referenceUrl", String)
    ], Therapy.prototype, "referenceUrl", void 0);
    __decorate([
        json2typescript_1.JsonProperty("source", String, true)
    ], Therapy.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty("references", [String], true)
    ], Therapy.prototype, "references", void 0);
    __decorate([
        json2typescript_1.JsonProperty("drugResponse", [DrugResponse_1.DrugResponse], true)
    ], Therapy.prototype, "drugResponse", void 0);
    __decorate([
        json2typescript_1.JsonProperty("otherInterventions", [Intervention_1.Intervention], true)
    ], Therapy.prototype, "otherInterventions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantActionable", Boolean)
    ], Therapy.prototype, "variantActionable", void 0);
    Therapy = __decorate([
        json2typescript_1.JsonObject
    ], Therapy);
    return Therapy;
}());
exports.Therapy = Therapy;
//# sourceMappingURL=Therapy.js.map