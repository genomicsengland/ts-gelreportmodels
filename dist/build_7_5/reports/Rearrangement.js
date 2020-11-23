"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rearrangement = void 0;
var Coordinates_1 = require("./Coordinates");
var json2typescript_1 = require("json2typescript");
var Rearrangement = /** @class */ (function () {
    function Rearrangement() {
        this.leftCoordinates = new Coordinates_1.Coordinates();
        this.rightCoordinates = new Coordinates_1.Coordinates();
        this.orientation = ""; // Orientation
        this.leftInsSeq = undefined;
        this.rightInsSeq = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("leftCoordinates", Coordinates_1.Coordinates)
    ], Rearrangement.prototype, "leftCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("rightCoordinates", Coordinates_1.Coordinates)
    ], Rearrangement.prototype, "rightCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("orientation", String)
    ], Rearrangement.prototype, "orientation", void 0);
    __decorate([
        json2typescript_1.JsonProperty("leftInsSeq", String, true)
    ], Rearrangement.prototype, "leftInsSeq", void 0);
    __decorate([
        json2typescript_1.JsonProperty("rightInsSeq", String, true)
    ], Rearrangement.prototype, "rightInsSeq", void 0);
    Rearrangement = __decorate([
        json2typescript_1.JsonObject
    ], Rearrangement);
    return Rearrangement;
}());
exports.Rearrangement = Rearrangement;
//# sourceMappingURL=Rearrangement.js.map