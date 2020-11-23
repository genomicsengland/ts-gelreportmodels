"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugResponse = void 0;
var json2typescript_1 = require("json2typescript");
var DrugResponse = /** @class */ (function () {
    function DrugResponse() {
        this.TreatmentAgent = "";
        this.drugResponseClassification = ""; // DrugResponseClassification
    }
    __decorate([
        json2typescript_1.JsonProperty("TreatmentAgent", String)
    ], DrugResponse.prototype, "TreatmentAgent", void 0);
    __decorate([
        json2typescript_1.JsonProperty("drugResponseClassification", String)
    ], DrugResponse.prototype, "drugResponseClassification", void 0);
    DrugResponse = __decorate([
        json2typescript_1.JsonObject
    ], DrugResponse);
    return DrugResponse;
}());
exports.DrugResponse = DrugResponse;
//# sourceMappingURL=DrugResponse.js.map