"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Trial_1 = require("./Trial");
var Prognosis_1 = require("./Prognosis");
var Therapy_1 = require("./Therapy");
var json2typescript_1 = require("json2typescript");
/** Clinical actions */
var Actions = /** @class */ (function() {
  function Actions() {
    this.trials = undefined;
    this.prognosis = undefined;
    this.therapies = undefined;
  }
  __decorate(
    [json2typescript_1.JsonProperty("trials", [Trial_1.Trial], true)],
    Actions.prototype,
    "trials",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("prognosis", [Prognosis_1.Prognosis], true)
    ],
    Actions.prototype,
    "prognosis",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("therapies", [Therapy_1.Therapy], true)],
    Actions.prototype,
    "therapies",
    void 0
  );
  Actions = __decorate([json2typescript_1.JsonObject], Actions);
  return Actions;
})();
exports.Actions = Actions;
//# sourceMappingURL=Actions.js.map
