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
var Date_1 = require("./Date");
var ClinicalIndication_1 = require("./ClinicalIndication");
var Organisation_1 = require("./Organisation");
var ReferralTest_1 = require("./ReferralTest");
var Pedigree_1 = require("./Pedigree");
var CancerParticipant_1 = require("./CancerParticipant");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var Referral = /** @class */ (function (_super) {
    __extends(Referral, _super);
    function Referral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.referralId = '';
        _this.referralUid = '';
        _this.referralTests = [];
        _this.requester = new Organisation_1.Organisation;
        _this.orderingDate = undefined;
        _this.pedigree = undefined;
        _this.cancerParticipant = undefined;
        _this.clinicalIndication = new ClinicalIndication_1.ClinicalIndication;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('referralId', String)
    ], Referral.prototype, "referralId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('referralUid', String)
    ], Referral.prototype, "referralUid", void 0);
    __decorate([
        json2typescript_1.JsonProperty('referralTests', [ReferralTest_1.ReferralTest], true)
    ], Referral.prototype, "referralTests", void 0);
    __decorate([
        json2typescript_1.JsonProperty('requester', Organisation_1.Organisation)
    ], Referral.prototype, "requester", void 0);
    __decorate([
        json2typescript_1.JsonProperty('orderingDate', Date_1.Date, true)
    ], Referral.prototype, "orderingDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty('pedigree', Pedigree_1.Pedigree, true)
    ], Referral.prototype, "pedigree", void 0);
    __decorate([
        json2typescript_1.JsonProperty('cancerParticipant', CancerParticipant_1.CancerParticipant, true)
    ], Referral.prototype, "cancerParticipant", void 0);
    __decorate([
        json2typescript_1.JsonProperty('clinicalIndication', ClinicalIndication_1.ClinicalIndication)
    ], Referral.prototype, "clinicalIndication", void 0);
    Referral = __decorate([
        json2typescript_1.JsonObject
    ], Referral);
    return Referral;
}(JSONHelper_1.default));
exports.Referral = Referral;
;
//# sourceMappingURL=Referral.js.map