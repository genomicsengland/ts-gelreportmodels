"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json2typescript_1 = require("json2typescript");
/**
 * The family level questions
 */
var FamilyLevelQuestions = /** @class */ (function () {
    function FamilyLevelQuestions() {
        /** Have the results reported here explained the genetic basis of the
         * family’s presenting phenotype(s)?
         */
        this.caseSolvedFamily = ""; // CaseSolvedFamily
        /**
         * Have you done any segregation testing in non-participating family members?
         */
        this.segregationQuestion = ""; // SegregationQuestion
        /** Comments regarding report */
        this.additionalComments = "";
    }
    __decorate([
        json2typescript_1.JsonProperty("caseSolvedFamily", String)
    ], FamilyLevelQuestions.prototype, "caseSolvedFamily", void 0);
    __decorate([
        json2typescript_1.JsonProperty("segregationQuestion", String)
    ], FamilyLevelQuestions.prototype, "segregationQuestion", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalComments", String)
    ], FamilyLevelQuestions.prototype, "additionalComments", void 0);
    FamilyLevelQuestions = __decorate([
        json2typescript_1.JsonObject
    ], FamilyLevelQuestions);
    return FamilyLevelQuestions;
}());
exports.FamilyLevelQuestions = FamilyLevelQuestions;
//# sourceMappingURL=FamilyLevelQuestions.js.map