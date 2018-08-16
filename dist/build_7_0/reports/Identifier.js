"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var Identifier = /** @class */ (function () {
    function Identifier() {
        /** Source i.e, esenmbl */
        this.source = '';
        /** identifier */
        this.identifier = '';
    }
    __decorate([
        json2typescript_1.JsonProperty('source', String)
    ], Identifier.prototype, "source", void 0);
    __decorate([
        json2typescript_1.JsonProperty('identifier', String)
    ], Identifier.prototype, "identifier", void 0);
    Identifier = __decorate([
        json2typescript_1.JsonObject
    ], Identifier);
    return Identifier;
}());
exports.Identifier = Identifier;
//# sourceMappingURL=Identifier.js.map