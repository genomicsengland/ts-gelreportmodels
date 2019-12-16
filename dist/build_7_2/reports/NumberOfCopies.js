"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var NumberOfCopies = /** @class */ (function () {
    function NumberOfCopies() {
        /** Number of copies given by the caller in one of the allele */
        this.numberOfCopies = 0;
        this.confidenceIntervalMaximum = undefined;
        this.confidenceIntervalMinimum = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("numberOfCopies", Number)
    ], NumberOfCopies.prototype, "numberOfCopies", void 0);
    __decorate([
        json2typescript_1.JsonProperty("confidenceIntervalMaximum", Number)
    ], NumberOfCopies.prototype, "confidenceIntervalMaximum", void 0);
    __decorate([
        json2typescript_1.JsonProperty("confidenceIntervalMinimum", Number)
    ], NumberOfCopies.prototype, "confidenceIntervalMinimum", void 0);
    NumberOfCopies = __decorate([
        json2typescript_1.JsonObject
    ], NumberOfCopies);
    return NumberOfCopies;
}());
exports.NumberOfCopies = NumberOfCopies;
//# sourceMappingURL=NumberOfCopies.js.map