"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Technology = /** @class */ (function () {
    function Technology() {
        this.testTechnologyId = "";
        this.testTechnologyDescription = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("testTechnologyId", String)
    ], Technology.prototype, "testTechnologyId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("testTechnologyDescription", String)
    ], Technology.prototype, "testTechnologyDescription", void 0);
    Technology = __decorate([
        json2typescript_1.JsonObject
    ], Technology);
    return Technology;
}());
exports.Technology = Technology;
//# sourceMappingURL=Technology.js.map