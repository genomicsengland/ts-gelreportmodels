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
 * Inbreeding coefficient
 */
var InbreedingCoefficient = /** @class */ (function () {
    function InbreedingCoefficient() {
        /**
         * This is the sample id against which the coefficient was estimated
         */
        this.sampleId = "";
        /**
         * Name of program used to calculate the coefficient
         */
        this.program = "";
        /**
         * Version of the programme
         */
        this.version = "";
        /**
         * Where various methods for estimation exist, which method was used.
         */
        this.estimationMethod = "";
        /**
         * Inbreeding coefficient ideally a real number in [0,1]
         */
        this.coefficient = 0; // double
        /**
         * Standard error of the Inbreeding coefficient
         */
        this.standardError = undefined; // double
    }
    __decorate([
        json2typescript_1.JsonProperty("sampleId", String)
    ], InbreedingCoefficient.prototype, "sampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("program", String)
    ], InbreedingCoefficient.prototype, "program", void 0);
    __decorate([
        json2typescript_1.JsonProperty("version", String)
    ], InbreedingCoefficient.prototype, "version", void 0);
    __decorate([
        json2typescript_1.JsonProperty("estimationMethod", String)
    ], InbreedingCoefficient.prototype, "estimationMethod", void 0);
    __decorate([
        json2typescript_1.JsonProperty("coefficient", Number)
    ], InbreedingCoefficient.prototype, "coefficient", void 0);
    __decorate([
        json2typescript_1.JsonProperty("standardError", Number, true)
    ], InbreedingCoefficient.prototype, "standardError", void 0);
    InbreedingCoefficient = __decorate([
        json2typescript_1.JsonObject
    ], InbreedingCoefficient);
    return InbreedingCoefficient;
}());
exports.InbreedingCoefficient = InbreedingCoefficient;
//# sourceMappingURL=InbreedingCoefficient.js.map