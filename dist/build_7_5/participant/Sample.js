"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
var json2typescript_1 = require("json2typescript");
var Sample = /** @class */ (function () {
    function Sample() {
        /** Sample Id (e.g, LP00012645_5GH)) */
        this.sampleId = "";
        /** Lab Sample Id */
        this.labSampleId = 0;
        /** Source */
        this.source = undefined; // SampleSource
        /** Product */
        this.product = undefined; // Product
        /** preparationMethod */
        this.preparationMethod = undefined; // PreparationMethod
    }
    __decorate([
        json2typescript_1.JsonProperty("sampleId", String)
    ], Sample.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("labSampleId")
    ], Sample.prototype, "labSampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("source", String, true)
    ], Sample.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty("product", String, true)
    ], Sample.prototype, "product", void 0);
    __decorate([
        json2typescript_1.JsonProperty("preparationMethod", String, true)
    ], Sample.prototype, "preparationMethod", void 0);
    Sample = __decorate([
        json2typescript_1.JsonObject
    ], Sample);
    return Sample;
}());
exports.Sample = Sample;
//# sourceMappingURL=Sample.js.map