"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmBasedVariantClassification = void 0;
var json2typescript_1 = require("json2typescript");
var AlgorithmBasedVariantClassification = /** @class */ (function () {
    function AlgorithmBasedVariantClassification() {
        /** Name of the applied algorithm */
        this.algorithmName = "";
        this.classification = "";
        this.rank = undefined;
        this.score = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("algorithmName", String)
    ], AlgorithmBasedVariantClassification.prototype, "algorithmName", void 0);
    __decorate([
        json2typescript_1.JsonProperty("classification", String)
    ], AlgorithmBasedVariantClassification.prototype, "classification", void 0);
    __decorate([
        json2typescript_1.JsonProperty("rank", Number, true)
    ], AlgorithmBasedVariantClassification.prototype, "rank", void 0);
    __decorate([
        json2typescript_1.JsonProperty("score", Number, true)
    ], AlgorithmBasedVariantClassification.prototype, "score", void 0);
    AlgorithmBasedVariantClassification = __decorate([
        json2typescript_1.JsonObject
    ], AlgorithmBasedVariantClassification);
    return AlgorithmBasedVariantClassification;
}());
exports.AlgorithmBasedVariantClassification = AlgorithmBasedVariantClassification;
//# sourceMappingURL=AlgorithmBasedVariantClassification.js.map