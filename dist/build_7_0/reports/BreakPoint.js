"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Coordinates_1 = require("./Coordinates");
var BreakPoint = /** @class */ (function () {
    function BreakPoint() {
        this.coordinates = new Coordinates_1.Coordinates;
        this.reference = undefined;
        this.alternate = undefined;
        this.info = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty('coordinates', Coordinates_1.Coordinates)
    ], BreakPoint.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reference', String, true)
    ], BreakPoint.prototype, "reference", void 0);
    __decorate([
        json2typescript_1.JsonProperty('alternate', String, true)
    ], BreakPoint.prototype, "alternate", void 0);
    __decorate([
        json2typescript_1.JsonProperty('info', Object, true)
    ], BreakPoint.prototype, "info", void 0);
    BreakPoint = __decorate([
        json2typescript_1.JsonObject
    ], BreakPoint);
    return BreakPoint;
}());
exports.BreakPoint = BreakPoint;
;
//# sourceMappingURL=BreakPoint.js.map