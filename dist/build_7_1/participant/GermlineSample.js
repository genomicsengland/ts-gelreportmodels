"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GermlineSample = void 0;
var json2typescript_1 = require("json2typescript");
/** A germline sample */
var GermlineSample = /** @class */ (function () {
    function GermlineSample() {
        /** Sample identifier (e.g, LP00012645_5GH)) */
        this.sampleId = "";
        /** Lab sample identifier */
        this.labSampleId = 0;
        /** LDP Code (Local Delivery Partner) */
        this.LDPCode = "";
        /** Source of the sample */
        this.source = undefined; // SampleSource
        /** Product of the sample */
        this.product = undefined; // Product
        /** Genomics England programme phase */
        this.programmePhase = undefined; // ProgrammePhase
        /** The time when the sample was received. In the format
         * YYYY-MM-DDTHH:MM:SS+0000 */
        this.clinicalSampleDateTime = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("sampleId", String)
    ], GermlineSample.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("labSampleId", Number)
    ], GermlineSample.prototype, "labSampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("LDPCode", String)
    ], GermlineSample.prototype, "LDPCode", void 0);
    __decorate([
        json2typescript_1.JsonProperty("source", String, true)
    ], GermlineSample.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty("product", String, true)
    ], GermlineSample.prototype, "product", void 0);
    __decorate([
        json2typescript_1.JsonProperty("preparationMethod", String, true)
    ], GermlineSample.prototype, "preparationMethod", void 0);
    __decorate([
        json2typescript_1.JsonProperty("programmePhase", String, true)
    ], GermlineSample.prototype, "programmePhase", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalSampleDateTime", String, true)
    ], GermlineSample.prototype, "clinicalSampleDateTime", void 0);
    GermlineSample = __decorate([
        json2typescript_1.JsonObject
    ], GermlineSample);
    return GermlineSample;
}());
exports.GermlineSample = GermlineSample;
//# sourceMappingURL=GermlineSample.js.map