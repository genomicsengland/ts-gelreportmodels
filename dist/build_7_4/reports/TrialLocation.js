"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialLocation = void 0;
var json2typescript_1 = require("json2typescript");
var TrialLocation = /** @class */ (function () {
    function TrialLocation() {
        this.name = undefined;
        this.city = undefined;
        this.country = undefined;
        this.zip = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("name", String, true)
    ], TrialLocation.prototype, "name", void 0);
    __decorate([
        json2typescript_1.JsonProperty("city", String, true)
    ], TrialLocation.prototype, "city", void 0);
    __decorate([
        json2typescript_1.JsonProperty("country", String, true)
    ], TrialLocation.prototype, "country", void 0);
    __decorate([
        json2typescript_1.JsonProperty("zip", String, true)
    ], TrialLocation.prototype, "zip", void 0);
    TrialLocation = __decorate([
        json2typescript_1.JsonObject
    ], TrialLocation);
    return TrialLocation;
}());
exports.TrialLocation = TrialLocation;
//# sourceMappingURL=TrialLocation.js.map