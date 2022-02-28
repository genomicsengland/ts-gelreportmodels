"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var json2typescript_1 = require("json2typescript");
var Comment = /** @class */ (function () {
    function Comment() {
        this.text = "";
        this.date = "";
        this.userid = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("text", String)
    ], Comment.prototype, "text", void 0);
    __decorate([
        json2typescript_1.JsonProperty("date", String)
    ], Comment.prototype, "date", void 0);
    __decorate([
        json2typescript_1.JsonProperty("userid", String)
    ], Comment.prototype, "userid", void 0);
    Comment = __decorate([
        json2typescript_1.JsonObject
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map