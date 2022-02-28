"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var json2typescript_1 = require("json2typescript");
var User = /** @class */ (function () {
    function User() {
        /**
         *Azure Active Directory immutable user OID
         */
        this.userid = undefined;
        /**
         * User email address
         */
        this.email = "";
        /**
         * Username
         */
        this.username = "";
        this.role = undefined;
        this.groups = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("userid", String, true)
    ], User.prototype, "userid", void 0);
    __decorate([
        json2typescript_1.JsonProperty("email", String)
    ], User.prototype, "email", void 0);
    __decorate([
        json2typescript_1.JsonProperty("username", String)
    ], User.prototype, "username", void 0);
    __decorate([
        json2typescript_1.JsonProperty("role", String, true)
    ], User.prototype, "role", void 0);
    __decorate([
        json2typescript_1.JsonProperty("groups", [String], true)
    ], User.prototype, "groups", void 0);
    User = __decorate([
        json2typescript_1.JsonObject
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map