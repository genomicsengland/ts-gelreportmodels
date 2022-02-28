"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortTandemRepeatDetails = void 0;
var Coordinates_1 = require("./Coordinates");
var NumberOfCopies_1 = require("./NumberOfCopies");
var json2typescript_1 = require("json2typescript");
var ShortTandemRepeatDetails = /** @class */ (function () {
    function ShortTandemRepeatDetails() {
        /**
         *Short tandem repeat coordinates
         */
        this.shortTandemRepeatCoordinates = new Coordinates_1.Coordinates();
        /**
         * Short tandem repeat copy number for each allele
         */
        this.numberOfCopies = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("shortTandemRepeatCoordinates", Coordinates_1.Coordinates)
    ], ShortTandemRepeatDetails.prototype, "shortTandemRepeatCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty("numberOfCopies", NumberOfCopies_1.NumberOfCopies, true)
    ], ShortTandemRepeatDetails.prototype, "numberOfCopies", void 0);
    ShortTandemRepeatDetails = __decorate([
        json2typescript_1.JsonObject
    ], ShortTandemRepeatDetails);
    return ShortTandemRepeatDetails;
}());
exports.ShortTandemRepeatDetails = ShortTandemRepeatDetails;
//# sourceMappingURL=ShortTandemRepeatDetails.js.map