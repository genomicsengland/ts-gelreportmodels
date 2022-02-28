"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantInterpretationFlags = void 0;
var json2typescript_1 = require("json2typescript");
/**
  Interpretation flags at the participant level
*/
var ParticipantInterpretationFlags = /** @class */ (function () {
    function ParticipantInterpretationFlags() {
        /**
         * The interpretation flag
         */
        this.interpretationFlag = ""; // InterpretationFlags
        /**
         * The description for the flag
         */
        this.additionalDescription = undefined;
        /**
         * Sample Id fron which this flag was reported
         */
        this.SampleId = "";
        /**
         * Participant Id as appeared in the pedigree
         */
        this.participantId = undefined;
    }
    __decorate([
        json2typescript_1.JsonProperty("interpretationFlag", String)
    ], ParticipantInterpretationFlags.prototype, "interpretationFlag", void 0);
    __decorate([
        json2typescript_1.JsonProperty("additionalDescription", String, true)
    ], ParticipantInterpretationFlags.prototype, "additionalDescription", void 0);
    __decorate([
        json2typescript_1.JsonProperty("SampleId", String)
    ], ParticipantInterpretationFlags.prototype, "SampleId", void 0);
    __decorate([
        json2typescript_1.JsonProperty("participantId", String, true)
    ], ParticipantInterpretationFlags.prototype, "participantId", void 0);
    ParticipantInterpretationFlags = __decorate([
        json2typescript_1.JsonObject
    ], ParticipantInterpretationFlags);
    return ParticipantInterpretationFlags;
}());
exports.ParticipantInterpretationFlags = ParticipantInterpretationFlags;
//# sourceMappingURL=ParticipantInterpretationFlags.js.map