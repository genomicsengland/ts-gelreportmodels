"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var HpoTermModifiers = /** @class */ (function () {
    function HpoTermModifiers() {
        this.laterality = undefined; // Laterality
        this.progression = undefined; // Progression
        this.severity = undefined; // Severity
        this.spatialPattern = undefined; // SpatialPattern
    }
    __decorate([
        json2typescript_1.JsonProperty('laterality', String, true)
    ], HpoTermModifiers.prototype, "laterality", void 0);
    __decorate([
        json2typescript_1.JsonProperty('progression', String, true)
    ], HpoTermModifiers.prototype, "progression", void 0);
    __decorate([
        json2typescript_1.JsonProperty('severity', String, true)
    ], HpoTermModifiers.prototype, "severity", void 0);
    __decorate([
        json2typescript_1.JsonProperty('spatialPattern', String, true)
    ], HpoTermModifiers.prototype, "spatialPattern", void 0);
    HpoTermModifiers = __decorate([
        json2typescript_1.JsonObject
    ], HpoTermModifiers);
    return HpoTermModifiers;
}());
exports.HpoTermModifiers = HpoTermModifiers;
;
//# sourceMappingURL=HpoTermModifiers.js.map