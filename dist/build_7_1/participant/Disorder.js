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
 * This is quite GEL specific. This is the way is stored in ModelCatalogue and
 * PanelApp. Currently all specific disease titles are assigned to a disease
 * subgroup so really only specificDisease needs to be completed but we add the
 * others for generality
 */
var Disorder = /** @class */ (function () {
    function Disorder() {
        /** This is Level2 Title for this disorder */
        this.diseaseGroup = undefined;
        /** This is Level3 Title for this disorder */
        this.diseaseSubGroup = undefined;
        /** This is Level4 Title for this disorder */
        this.specificDisease = undefined;
        /** Age of onset in years */
        this.ageOfOnset = undefined; // type:double
    }
    __decorate([
        json2typescript_1.JsonProperty('diseaseGroup', String, true)
    ], Disorder.prototype, "diseaseGroup", void 0);
    __decorate([
        json2typescript_1.JsonProperty('diseaseSubGroup', String, true)
    ], Disorder.prototype, "diseaseSubGroup", void 0);
    __decorate([
        json2typescript_1.JsonProperty('specificDisease', String, true)
    ], Disorder.prototype, "specificDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty('ageOfOnset', Number, true)
    ], Disorder.prototype, "ageOfOnset", void 0);
    Disorder = __decorate([
        json2typescript_1.JsonObject
    ], Disorder);
    return Disorder;
}());
exports.Disorder = Disorder;
;
//# sourceMappingURL=Disorder.js.map