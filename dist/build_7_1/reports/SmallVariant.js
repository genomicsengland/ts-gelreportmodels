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
var VariantCoordinates_1 = require("./VariantCoordinates");
var VariantCall_1 = require("./VariantCall");
var ReportEvent_1 = require("./ReportEvent");
var VariantAttributes_1 = require("./VariantAttributes");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
/**
 * A reported variant
 */
var SmallVariant = /** @class */ (function (_super) {
    __extends(SmallVariant, _super);
    function SmallVariant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The variant coordinates. Chromosome is either 1-22, X, Y, MT or any
         * other contif in the reference genome, no "chr" prefix is expected.
         * Position is 1- based. Reference and alternate should never be empty or
         * any character representing emptiness (e.g.: . or -), a VCF-like indel
         * representation is expected.
         */
        _this.variantCoordinates = new VariantCoordinates_1.VariantCoordinates;
        /**
         * List of variant calls across all samples under analysis for this variant
         */
        _this.variantCalls = [];
        /**
         * The list of report events for this variant across multiple modes of
         * inheritance and panels
         */
        _this.reportEvents = [];
        _this.variantAttributes = undefined;
        return _this;
    }
    __decorate([
        json2typescript_1.JsonProperty('variantCoordinates', VariantCoordinates_1.VariantCoordinates)
    ], SmallVariant.prototype, "variantCoordinates", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantCalls', [VariantCall_1.VariantCall])
    ], SmallVariant.prototype, "variantCalls", void 0);
    __decorate([
        json2typescript_1.JsonProperty('reportEvents', [ReportEvent_1.ReportEvent])
    ], SmallVariant.prototype, "reportEvents", void 0);
    __decorate([
        json2typescript_1.JsonProperty('variantAttributes', VariantAttributes_1.VariantAttributes, true)
    ], SmallVariant.prototype, "variantAttributes", void 0);
    SmallVariant = __decorate([
        json2typescript_1.JsonObject
    ], SmallVariant);
    return SmallVariant;
}(JSONHelper_1.default));
exports.SmallVariant = SmallVariant;
;
//# sourceMappingURL=SmallVariant.js.map