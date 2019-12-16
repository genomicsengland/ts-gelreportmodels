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
var ClinicalIndication = /** @class */ (function (_super) {
    __extends(ClinicalIndication, _super);
    function ClinicalIndication() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clinicalIndicationUid = "";
        _this.clinicalIndicationCode = "";
        _this.clinicalIndicationFullName = "";
        _this.clinicalIndicationVersionNumber = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty("clinicalIndicationUid", String)
    ], ClinicalIndication.prototype, "clinicalIndicationUid", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalIndicationCode", String)
    ], ClinicalIndication.prototype, "clinicalIndicationCode", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalIndicationFullName", String)
    ], ClinicalIndication.prototype, "clinicalIndicationFullName", void 0);
    __decorate([
        json2typescript_1.JsonProperty("clinicalIndicationVersionNumber", String, true)
    ], ClinicalIndication.prototype, "clinicalIndicationVersionNumber", void 0);
    ClinicalIndication = __decorate([
        json2typescript_1.JsonObject
    ], ClinicalIndication);
    return ClinicalIndication;
}(JSONHelper_1.default));
exports.ClinicalIndication = ClinicalIndication;
//# sourceMappingURL=ClinicalIndication.js.map