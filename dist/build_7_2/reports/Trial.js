"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Intervention_1 = require("./Intervention");
var DemographicElegibilityCriteria_1 = require("./DemographicElegibilityCriteria");
var TrialLocation_1 = require("./TrialLocation");
var json2typescript_1 = require("json2typescript");
var Trial = /** @class */ (function () {
    function Trial() {
        /** URL where reference information for this trail can be found */
        this.studyUrl = "";
        /** Trail/Study indetifier */
        this.studyIdentifier = "";
        /** Start date of the study */
        this.startDate = undefined;
        /** Completion date of the study */
        this.estimateCompletionDate = undefined;
        /** Title of the study */
        this.title = undefined;
        /** Study Phase */
        this.phase = ""; // StudyPhase
        /** Interventions */
        this.interventions = undefined;
        /** Conditions */
        this.conditions = undefined;
        /** Primary Purpose of the study */
        this.primaryPurpose = undefined; // PrimaryPurpose
        /** Study Type */
        this.studyType = undefined; // StudyType
        /** Elegigility Criteria based on Age and Sex */
        this.demogrphicElegibilityCriteria = undefined;
        /** List with all of the locations where participant can enrolle */
        this.locations = undefined;
        /**
         * If true, the association was made using the variant information, if not
         * the association was made at Genomic Entity level
         */
        this.variantActionable = false;
    }
    __decorate([
        json2typescript_1.JsonProperty("studyUrl", String)
    ], Trial.prototype, "studyUrl", void 0);
    __decorate([
        json2typescript_1.JsonProperty("studyIdentifier", String)
    ], Trial.prototype, "studyIdentifier", void 0);
    __decorate([
        json2typescript_1.JsonProperty("startDate", String, true)
    ], Trial.prototype, "startDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("estimateCompletionDate", String, true)
    ], Trial.prototype, "estimateCompletionDate", void 0);
    __decorate([
        json2typescript_1.JsonProperty("title", String, true)
    ], Trial.prototype, "title", void 0);
    __decorate([
        json2typescript_1.JsonProperty("phase", String)
    ], Trial.prototype, "phase", void 0);
    __decorate([
        json2typescript_1.JsonProperty("interventions", [Intervention_1.Intervention], true)
    ], Trial.prototype, "interventions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("conditions", [String], true)
    ], Trial.prototype, "conditions", void 0);
    __decorate([
        json2typescript_1.JsonProperty("primaryPurpose", String, true)
    ], Trial.prototype, "primaryPurpose", void 0);
    __decorate([
        json2typescript_1.JsonProperty("studyType", String, true)
    ], Trial.prototype, "studyType", void 0);
    __decorate([
        json2typescript_1.JsonProperty("demogrphicElegibilityCriteria", DemographicElegibilityCriteria_1.DemographicElegibilityCriteria, true)
    ], Trial.prototype, "demogrphicElegibilityCriteria", void 0);
    __decorate([
        json2typescript_1.JsonProperty("locations", [TrialLocation_1.TrialLocation], true)
    ], Trial.prototype, "locations", void 0);
    __decorate([
        json2typescript_1.JsonProperty("variantActionable", Boolean)
    ], Trial.prototype, "variantActionable", void 0);
    Trial = __decorate([
        json2typescript_1.JsonObject
    ], Trial);
    return Trial;
}());
exports.Trial = Trial;
//# sourceMappingURL=Trial.js.map