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
var Topography = /** @class */ (function() {
  function Topography() {
    this.id = undefined;
    this.name = undefined;
    this.value = undefined;
    this.version = undefined;
  }
  __decorate(
    [json2typescript_1.JsonProperty("id", String, true)],
    Topography.prototype,
    "id",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("name", String, true)],
    Topography.prototype,
    "name",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("value", String, true)],
    Topography.prototype,
    "value",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("version", String, true)],
    Topography.prototype,
    "version",
    void 0
  );
  Topography = __decorate([json2typescript_1.JsonObject], Topography);
  return Topography;
})();
exports.Topography = Topography;
//# sourceMappingURL=Topography.js.map
