"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
/** A disease penetrance definition */
var DiseasePenetrance = /** @class */ (function () {
    function DiseasePenetrance() {
        /** The disease to which the penetrance applies */
        this.specificDisease = '';
        /** The penetrance */
        this.penetrance = ''; // Penetrance
    }
    __decorate([
        json2typescript_1.JsonProperty('specificDisease', String)
    ], DiseasePenetrance.prototype, "specificDisease", void 0);
    __decorate([
        json2typescript_1.JsonProperty('penetrance', String)
    ], DiseasePenetrance.prototype, "penetrance", void 0);
    DiseasePenetrance = __decorate([
        json2typescript_1.JsonObject
    ], DiseasePenetrance);
    return DiseasePenetrance;
}());
exports.DiseasePenetrance = DiseasePenetrance;
;
//# sourceMappingURL=DiseasePenetrance.js.map