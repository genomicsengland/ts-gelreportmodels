"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tumour = void 0;
var json2typescript_1 = require("json2typescript");
var Morphology_1 = require("./Morphology");
var Topography_1 = require("./Topography");
/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
var Tumour = /** @class */ (function () {
    function Tumour() {
        this.tumourId = "";
        this.tumourLocalId = "";
        this.tumourType = "";
        this.tumourParentId = undefined;
        this.tumourDiagnosisDate = new Date();
        this.tumourDescription = undefined;
        this.tumourMorphologies = undefined;
        this.tumourTopographies = undefined;
        this.tumourPrimaryTopographies = undefined;
        this.tumourGrade = undefined;
        this.tumourStage = undefined;
        this.tumourPrognosticScore = undefined;
        this.tumourPresentation = undefined;
        this.primaryOrMetastatic = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("tumourId", String)
    ], Tumour.prototype, "tumourId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourLocalId", String)
    ], Tumour.prototype, "tumourLocalId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourType", String)
    ], Tumour.prototype, "tumourType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourParentId", String, true)
    ], Tumour.prototype, "tumourParentId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourDiagnosisDate", Date, true)
    ], Tumour.prototype, "tumourDiagnosisDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourDescription", String, true)
    ], Tumour.prototype, "tumourDescription", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourMorphologies", [Morphology_1.Morphology], true)
    ], Tumour.prototype, "tumourMorphologies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourTopographies", [Topography_1.Topography], true)
    ], Tumour.prototype, "tumourTopographies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourPrimaryTopographies", [Topography_1.Topography], true)
    ], Tumour.prototype, "tumourPrimaryTopographies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourGrade", String, true)
    ], Tumour.prototype, "tumourGrade", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourStage", String, true)
    ], Tumour.prototype, "tumourStage", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourPrognosticScore", String, true)
    ], Tumour.prototype, "tumourPrognosticScore", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourPresentation", String, true)
    ], Tumour.prototype, "tumourPresentation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("primaryOrMetastatic", String, true)
    ], Tumour.prototype, "primaryOrMetastatic", void 0);
    Tumour = __decorate([
        json2typescript_1.JsonObject
    ], Tumour);
    return Tumour;
}());
exports.Tumour = Tumour;
//# sourceMappingURL=Tumour.js.map