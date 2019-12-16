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
var json2typescript_1 = require("json2typescript");
var Organisation = /** @class */ (function() {
  function Organisation() {
    this.organisationId = "";
    this.organisationCode = "";
    this.organisationName = "";
    this.organisationNationalGroupingId = "";
    this.organisationNationalGroupingName = "";
  }
  __decorate(
    [json2typescript_1.JsonProperty("organisationId", String)],
    Organisation.prototype,
    "organisationId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("organisationCode", String)],
    Organisation.prototype,
    "organisationCode",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("organisationName", String)],
    Organisation.prototype,
    "organisationName",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("organisationNationalGroupingId", String)],
    Organisation.prototype,
    "organisationNationalGroupingId",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("organisationNationalGroupingName", String)
    ],
    Organisation.prototype,
    "organisationNationalGroupingName",
    void 0
  );
  Organisation = __decorate([json2typescript_1.JsonObject], Organisation);
  return Organisation;
})();
exports.Organisation = Organisation;
//# sourceMappingURL=Organisation.js.map
