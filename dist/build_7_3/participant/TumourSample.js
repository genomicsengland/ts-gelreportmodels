"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TumourSample = void 0;
var json2typescript_1 = require("json2typescript");
var Morphology_1 = require("./Morphology");
var Topography_1 = require("./Topography");
/**
 * A tumour sample
 */
var TumourSample = /** @class */ (function () {
    function TumourSample() {
        /**
         * Sample identifier (e.g, LP00012645_5GH))
         */
        this.sampleId = "";
        /**
         * Lab sample identifier
         */
        this.labSampleId = 0;
        /**
         * LDP Code (Local Delivery Partner)
         */
        this.LDPCode = undefined;
        /**
         * Identifier of each one of the tumours for a participant
         */
        this.tumourId = undefined;
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
        this.haematologicalCancer = undefined;
        this.haematologicalCancerLineage = undefined; // HaematologicalCancerLineage
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
         * Tumour content percentage
         */
        this.tumourContentPercentage = undefined;
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
        this.sampleMorphologies = undefined;
        this.sampleTopographies = undefined;
        this.sampleUid = undefined;
        this.participantId = undefined;
        this.maskedPid = undefined;
        this.method = undefined;
        this.storageMedium = undefined; // StorageMedium
        this.sampleType = undefined;
        this.sampleState = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("sampleId", String)
    ], TumourSample.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("labSampleId")
    ], TumourSample.prototype, "labSampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("LDPCode", String, true)
    ], TumourSample.prototype, "LDPCode", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourId", String, true)
    ], TumourSample.prototype, "tumourId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("programmePhase", String, true)
    ], TumourSample.prototype, "programmePhase", void 0);
    __decorate([
        json2typescript_1.JsonProperty("diseaseType", String, true)
    ], TumourSample.prototype, "diseaseType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("diseaseSubType", String, true)
    ], TumourSample.prototype, "diseaseSubType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("haematologicalCancer", Boolean, true)
    ], TumourSample.prototype, "haematologicalCancer", void 0);
    __decorate([
        json2typescript_1.JsonProperty("haematologicalCancerLineage", String, true)
    ], TumourSample.prototype, "haematologicalCancerLineage", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalSampleDateTime", String, true)
    ], TumourSample.prototype, "clinicalSampleDateTime", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourType", String, true)
    ], TumourSample.prototype, "tumourType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourContent", String, true)
    ], TumourSample.prototype, "tumourContent", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tumourContentPercentage", Number, true)
    ], TumourSample.prototype, "tumourContentPercentage", void 0);
    __decorate([
        json2typescript_1.JsonProperty("source", String, true)
    ], TumourSample.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty("preparationMethod", String, true)
    ], TumourSample.prototype, "preparationMethod", void 0);
    __decorate([
        json2typescript_1.JsonProperty("tissueSource", String, true)
    ], TumourSample.prototype, "tissueSource", void 0);
    __decorate([
        json2typescript_1.JsonProperty("product", String, true)
    ], TumourSample.prototype, "product", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleMorphologies", [Morphology_1.Morphology], true)
    ], TumourSample.prototype, "sampleMorphologies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleTopographies", [Topography_1.Topography], true)
    ], TumourSample.prototype, "sampleTopographies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleUid", String, true)
    ], TumourSample.prototype, "sampleUid", void 0);
    __decorate([
        json2typescript_1.JsonProperty("participantId", String, true)
    ], TumourSample.prototype, "participantId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("maskedPid", String, true)
    ], TumourSample.prototype, "maskedPid", void 0);
    __decorate([
        json2typescript_1.JsonProperty("method", String, true)
    ], TumourSample.prototype, "method", void 0);
    __decorate([
        json2typescript_1.JsonProperty("storageMedium", String, true)
    ], TumourSample.prototype, "storageMedium", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleType", String, true)
    ], TumourSample.prototype, "sampleType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("sampleState", String, true)
    ], TumourSample.prototype, "sampleState", void 0);
    TumourSample = __decorate([
        json2typescript_1.JsonObject
    ], TumourSample);
    return TumourSample;
}());
exports.TumourSample = TumourSample;
//# sourceMappingURL=TumourSample.js.map