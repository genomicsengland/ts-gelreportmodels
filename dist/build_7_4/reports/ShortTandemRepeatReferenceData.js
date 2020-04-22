"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var ShortTandemRepeatReferenceData = /** @class */ (function () {
    function ShortTandemRepeatReferenceData() {
        this.repeatedSequence = "";
        this.pathogenic_number_of_repeats_threshold = 0; // type:int
        this.normal_number_of_repeats_threshold = 0; // type:int
    }
    __decorate([
        json2typescript_1.JsonProperty("repeatedSequence", String)
    ], ShortTandemRepeatReferenceData.prototype, "repeatedSequence", void 0);
    __decorate([
        json2typescript_1.JsonProperty("pathogenic_number_of_repeats_threshold", Number)
    ], ShortTandemRepeatReferenceData.prototype, "pathogenic_number_of_repeats_threshold", void 0);
    __decorate([
        json2typescript_1.JsonProperty("normal_number_of_repeats_threshold", Number)
    ], ShortTandemRepeatReferenceData.prototype, "normal_number_of_repeats_threshold", void 0);
    ShortTandemRepeatReferenceData = __decorate([
        json2typescript_1.JsonObject
    ], ShortTandemRepeatReferenceData);
    return ShortTandemRepeatReferenceData;
}());
exports.ShortTandemRepeatReferenceData = ShortTandemRepeatReferenceData;
//# sourceMappingURL=ShortTandemRepeatReferenceData.js.map