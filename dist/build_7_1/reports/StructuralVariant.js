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
var Coordinates_1 = require("./Coordinates");
var ReportEvent_1 = require("./ReportEvent");
var VariantCall_1 = require("./VariantCall");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var StructuralVariant = /** @class */ (function (_super) {
    __extends(StructuralVariant, _super);
    function StructuralVariant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.variantType = ''; // StructuralVariantType
        _this.coordinates = new Coordinates_1.Coordinates;
        _this.leftInsSeq = undefined;
        _this.rightInsSeq = undefined;
        _this.reportEvents = [];
        /** array of genotypes for the samples */
        _this.variantCalls = [];
        _this.variantAttributes = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('variantType', String)
    ], StructuralVariant.prototype, "variantType", void 0);
    __decorate([
        json2typescript_1.JsonProperty('coordinates', Coordinates_1.Coordinates)
    ], StructuralVariant.prototype, "coordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('leftInsSeq', String, true)
    ], StructuralVariant.prototype, "leftInsSeq", void 0);
    __decorate([
        json2typescript_1.JsonProperty('rightInsSeq', String, true)
    ], StructuralVariant.prototype, "rightInsSeq", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportEvents', [ReportEvent_1.ReportEvent])
    ], StructuralVariant.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantCalls', [VariantCall_1.VariantCall])
    ], StructuralVariant.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantAttributes', VariantAttributes_1.VariantAttributes, true)
    ], StructuralVariant.prototype, "variantAttributes", void 0);
    StructuralVariant = __decorate([
        json2typescript_1.JsonObject
    ], StructuralVariant);
    return StructuralVariant;
}(JSONHelper_1.default));
exports.StructuralVariant = StructuralVariant;
;
//# sourceMappingURL=StructuralVariant.js.map