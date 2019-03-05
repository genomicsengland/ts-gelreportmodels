"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
/**
 * A tumour sample
 */
var TumourSample = /** @class */ (function () {
    function TumourSample() {
        /**
         * Sample identifier (e.g, LP00012645_5GH))
         */
        this.sampleId = '';
        /**
         * Lab sample identifier
         */
        this.labSampleId = 0;
        /**
         * LDP Code (Local Delivery Partner)
         */
        this.LDPCode = '';
        /**
         * Identifier of each one of the tumours for a participant
         */
        this.tumourId = '';
        /**
         * Genomics England programme phase
         */
        this.programmePhase = undefined; // ProgrammePhase
        /**
         * Disease type
         */
        this.diseaseType = undefined; // diseaseType
        /**
         * Disease subtype
         */
        this.diseaseSubType = undefined;
        /**
         * The time when the sample was recieved. In the format
         * YYYY-MM-DDTHH:MM:SS+0000
         */
        this.clinicalSampleDateTime = undefined;
        /**
         * Tumor type
         */
        this.tumourType = undefined; // TumourType
        /**
         * Tumour content
         */
        this.tumourContent = undefined; // TumourContent
        /**
         * Source of the sample
         */
        this.source = undefined; // SampleSource
        /**
         * The preparation method
         */
        this.preparationMethod = undefined; // PreparationMethod
        /**
         * The tissue source
         */
        this.tissueSource = undefined; // TissueSource
        /**
         * Product of the sample
         */
        this.product = undefined; // Product
        /**
         * Tumour morphology as defined by ICD (at least one morphology definition
         * by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.morphologyICDs = undefined;
        /**
         * Tumour morphology as defined by Snomed CT (at least one morphology
         * definition by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.morphologySnomedCTs = undefined;
        /**
         * Tumour morphology as defined by Snomed RT (at least one morphology
         * definition by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.morphologySnomedRTs = undefined;
        /**
         * Tumour topography as defined by ICD (at least one topography definition
         * by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.topographyICDs = undefined;
        /**
         * Tumour topography as defined by Snomed CT (at least one topography
         * definition by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.topographySnomedCTs = undefined;
        /**
         * Tumour topography as defined by Snomed RT (at least one topography
         * definition by either ICD, Snomed CT or Snomed RT must be provided)
         */
        this.topographySnomedRTs = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('sampleId', String)
    ], TumourSample.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('labSampleId', Number)
    ], TumourSample.prototype, "labSampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('LDPCode', String)
    ], TumourSample.prototype, "LDPCode", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourId', String)
    ], TumourSample.prototype, "tumourId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('programmePhase', String, true)
    ], TumourSample.prototype, "programmePhase", void 0);
    __decorate([
        json2typescript_1.JsonProperty('diseaseType', String, true)
    ], TumourSample.prototype, "diseaseType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('diseaseSubType', String, true)
    ], TumourSample.prototype, "diseaseSubType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('clinicalSampleDateTime', String, true)
    ], TumourSample.prototype, "clinicalSampleDateTime", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourType', String, true)
    ], TumourSample.prototype, "tumourType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourContent', String, true)
    ], TumourSample.prototype, "tumourContent", void 0);
    __decorate([
        json2typescript_1.JsonProperty('source', String, true)
    ], TumourSample.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty('preparationMethod', String, true)
    ], TumourSample.prototype, "preparationMethod", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tissueSource', String, true)
    ], TumourSample.prototype, "tissueSource", void 0);
    __decorate([
        json2typescript_1.JsonProperty('product', String, true)
    ], TumourSample.prototype, "product", void 0);
    __decorate([
        json2typescript_1.JsonProperty('morphologyICDs', String, true)
    ], TumourSample.prototype, "morphologyICDs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('morphologySnomedCTs', String, true)
    ], TumourSample.prototype, "morphologySnomedCTs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('morphologySnomedRTs', String, true)
    ], TumourSample.prototype, "morphologySnomedRTs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('topographyICDs', String, true)
    ], TumourSample.prototype, "topographyICDs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('topographySnomedCTs', String, true)
    ], TumourSample.prototype, "topographySnomedCTs", void 0);
    __decorate([
        json2typescript_1.JsonProperty('topographySnomedRTs', String, true)
    ], TumourSample.prototype, "topographySnomedRTs", void 0);
    TumourSample = __decorate([
        json2typescript_1.JsonObject
    ], TumourSample);
    return TumourSample;
}());
exports.TumourSample = TumourSample;
;
//# sourceMappingURL=TumourSample.js.map