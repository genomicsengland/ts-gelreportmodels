"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HpoTermModifiers_1 = require("./HpoTermModifiers");
var json2typescript_1 = require("json2typescript");
/**
 * This defines an HPO term and its modifiers (possibly multiple). If HPO term
 * presence is unknown we don't have a entry on the list
 */
var HpoTerm = /** @class */ (function () {
    function HpoTerm() {
        /**
         * Identifier of the HPO term
         */
        this.term = "";
        /**
         * This is whether the term is present in the participant (default is
         * unknown) yes=term is present in participant, no=term is not present
         */
        this.termPresence = undefined; // TernaryOption
        /**
         * hpoBuildNumber
         */
        this.hpoBuildNumber = undefined;
        /**
         * Modifier associated with the HPO term
         */
        this.modifiers = undefined;
        /**
         * Age of onset in months
         */
        this.ageOfOnset = undefined; // AgeOfOnset
    }
    __decorate([
        json2typescript_1.JsonProperty("term", String)
    ], HpoTerm.prototype, "term", void 0);
    __decorate([
        json2typescript_1.JsonProperty("termPresence", String, true)
    ], HpoTerm.prototype, "termPresence", void 0);
    __decorate([
        json2typescript_1.JsonProperty("termPresence", String, true)
    ], HpoTerm.prototype, "hpoBuildNumber", void 0);
    __decorate([
        json2typescript_1.JsonProperty("modifiers", [HpoTermModifiers_1.HpoTermModifiers], true)
    ], HpoTerm.prototype, "modifiers", void 0);
    __decorate([
        json2typescript_1.JsonProperty("ageOfOnset", String, true)
    ], HpoTerm.prototype, "ageOfOnset", void 0);
    HpoTerm = __decorate([
        json2typescript_1.JsonObject
    ], HpoTerm);
    return HpoTerm;
}());
exports.HpoTerm = HpoTerm;
//# sourceMappingURL=HpoTerm.js.map