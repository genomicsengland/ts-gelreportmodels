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
var Morphology_1 = require("./Morphology");
var Topography_1 = require("./Topography");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * This defines a pair of germline and tumor, this pair should/must be
 * analyzed together
 */
var Tumour = /** @class */ (function (_super) {
    __extends(Tumour, _super);
    function Tumour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tumourId = '';
        _this.tumourLocalId = '';
        _this.tumourType = '';
        _this.tumourParentId = undefined;
        _this.tumourDiagnosisDate = new Date;
        _this.tumourDescription = undefined;
        _this.tumourMorphologies = undefined;
        _this.tumourTopographies = undefined;
        _this.tumourPrimaryTopographies = undefined;
        _this.tumourGrade = undefined;
        _this.tumourStage = undefined;
        _this.tumourPrognosticScore = undefined;
        _this.tumourPresentation = undefined;
        _this.primaryOrMetastatic = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('tumourId', String)
    ], Tumour.prototype, "tumourId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourLocalId', String)
    ], Tumour.prototype, "tumourLocalId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourType', String)
    ], Tumour.prototype, "tumourType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourParentId', String, true)
    ], Tumour.prototype, "tumourParentId", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourDiagnosisDate', Date, true)
    ], Tumour.prototype, "tumourDiagnosisDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourDescription', String, true)
    ], Tumour.prototype, "tumourDescription", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourMorphologies', [Morphology_1.Morphology], true)
    ], Tumour.prototype, "tumourMorphologies", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourTopographies', [Topography_1.Topography], true)
    ], Tumour.prototype, "tumourTopographies", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourPrimaryTopographies', [Topography_1.Topography], true)
    ], Tumour.prototype, "tumourPrimaryTopographies", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourGrade', String, true)
    ], Tumour.prototype, "tumourGrade", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourStage', String, true)
    ], Tumour.prototype, "tumourStage", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourPrognosticScore', String, true)
    ], Tumour.prototype, "tumourPrognosticScore", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tumourPresentation', String, true)
    ], Tumour.prototype, "tumourPresentation", void 0);
    __decorate([
        json2typescript_1.JsonProperty('primaryOrMetastatic', String, true)
    ], Tumour.prototype, "primaryOrMetastatic", void 0);
    Tumour = __decorate([
        json2typescript_1.JsonObject
    ], Tumour);
    return Tumour;
}(JSONHelper_1.default));
exports.Tumour = Tumour;
;
//# sourceMappingURL=Tumour.js.map