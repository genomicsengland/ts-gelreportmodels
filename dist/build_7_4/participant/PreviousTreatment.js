"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var Date_1 = require("./Date");
var PreviousTreatment = /** @class */ (function (_super) {
    __extends(PreviousTreatment, _super);
    function PreviousTreatment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.previousTreatmentType = undefined;
        _this.previousTreatmentName = undefined;
        _this.previousTreatmentDate = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("previousTreatmentType", String, true)
    ], PreviousTreatment.prototype, "previousTreatmentType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("previousTreatmentName", String, true)
    ], PreviousTreatment.prototype, "previousTreatmentName", void 0);
    __decorate([
        json2typescript_1.JsonProperty("previousTreatmentDate", Date_1.Date, true)
    ], PreviousTreatment.prototype, "previousTreatmentDate", void 0);
    PreviousTreatment = __decorate([
        json2typescript_1.JsonObject
    ], PreviousTreatment);
    return PreviousTreatment;
}(JSONHelper_1.default));
exports.PreviousTreatment = PreviousTreatment;
//# sourceMappingURL=PreviousTreatment.js.map