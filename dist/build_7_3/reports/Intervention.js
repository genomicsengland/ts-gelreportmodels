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
 * A process or action that is the focus of a clinical study.
 * Ref. https://prsinfo.clinicaltrials.gov/definitions.html
 */
var Intervention = /** @class */ (function () {
    function Intervention() {
        /** Intervention type, i.e drug */
        this.interventionType = ""; // InterventionType
        /** Intervention name: Placebo */
        this.interventionName = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("interventionType", String)
    ], Intervention.prototype, "interventionType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interventionName", String)
    ], Intervention.prototype, "interventionName", void 0);
    Intervention = __decorate([
        json2typescript_1.JsonObject
    ], Intervention);
    return Intervention;
}());
exports.Intervention = Intervention;
//# sourceMappingURL=Intervention.js.map