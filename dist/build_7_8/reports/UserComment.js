"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComment = void 0;
var User_1 = require("./User");
var json2typescript_1 = require("json2typescript");
var UserComment = /** @class */ (function () {
    function UserComment() {
        /**
         * Comment text
         */
        this.comment = "";
        /**
         * User who created comment
         */
        this.user = undefined;
        /**
         * Date and time comment was created (ISO 8601 datetime with seconds and timezone e.g. 2020-11-23T15:52:36+00:00)
         */
        this.timestamp = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("comment", String)
    ], UserComment.prototype, "comment", void 0);
    __decorate([
        json2typescript_1.JsonProperty("user", User_1.User, true)
    ], UserComment.prototype, "user", void 0);
    __decorate([
        json2typescript_1.JsonProperty("timestamp", String, true)
    ], UserComment.prototype, "timestamp", void 0);
    UserComment = __decorate([
        json2typescript_1.JsonObject
    ], UserComment);
    return UserComment;
}());
exports.UserComment = UserComment;
//# sourceMappingURL=UserComment.js.map