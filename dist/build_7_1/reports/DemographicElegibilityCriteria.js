"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AgeRange_1 = require("./AgeRange");
var json2typescript_1 = require("json2typescript");
var DemographicElegibilityCriteria = /** @class */ (function () {
    function DemographicElegibilityCriteria() {
        this.sex = ''; // Sex
        this.ageRange = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('sex', String)
    ], DemographicElegibilityCriteria.prototype, "sex", void 0);
    __decorate([
        json2typescript_1.JsonProperty('ageRange', AgeRange_1.AgeRange, true)
    ], DemographicElegibilityCriteria.prototype, "ageRange", void 0);
    DemographicElegibilityCriteria = __decorate([
        json2typescript_1.JsonObject
    ], DemographicElegibilityCriteria);
    return DemographicElegibilityCriteria;
}());
exports.DemographicElegibilityCriteria = DemographicElegibilityCriteria;
;
//# sourceMappingURL=DemographicElegibilityCriteria.js.map