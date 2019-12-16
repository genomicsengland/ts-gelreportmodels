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
 * Family history for secondary findings. Arrays of strings describing
 * discrete family history phenotypes. Usually: `EndocrineTumours`,
 * `colorectal`, `BreastOvarian` and `HDOrStroke` but can be others
 */
var OtherFamilyHistory = /** @class */ (function () {
    function OtherFamilyHistory() {
        /**
         * Relevant Maternal family history
         */
        this.maternalFamilyHistory = undefined;
        /**
         * Relevant Paternal family history
         */
        this.paternalFamilyHistory = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("maternalFamilyHistory", [String], true)
    ], OtherFamilyHistory.prototype, "maternalFamilyHistory", void 0);
    __decorate([
        json2typescript_1.JsonProperty("paternalFamilyHistory", [String], true)
    ], OtherFamilyHistory.prototype, "paternalFamilyHistory", void 0);
    OtherFamilyHistory = __decorate([
        json2typescript_1.JsonObject
    ], OtherFamilyHistory);
    return OtherFamilyHistory;
}());
exports.OtherFamilyHistory = OtherFamilyHistory;
//# sourceMappingURL=OtherFamilyHistory.js.map