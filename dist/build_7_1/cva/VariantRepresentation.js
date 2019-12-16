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
var biodata_1 = require("../biodata");
var VariantRepresentation = /** @class */ (function() {
  function VariantRepresentation() {
    this.assembly = ""; // Assembly
    this.annotatorVersion = undefined;
    this.annotationsVersion = undefined;
    this.variant = new biodata_1.VariantAvro();
  }
  __decorate(
    [json2typescript_1.JsonProperty("assembly", String)],
    VariantRepresentation.prototype,
    "assembly",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("annotatorVersion", String, true)],
    VariantRepresentation.prototype,
    "annotatorVersion",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("annotationsVersion", String, true)],
    VariantRepresentation.prototype,
    "annotationsVersion",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("variant", biodata_1.VariantAvro)],
    VariantRepresentation.prototype,
    "variant",
    void 0
  );
  VariantRepresentation = __decorate(
    [json2typescript_1.JsonObject],
    VariantRepresentation
  );
  return VariantRepresentation;
})();
exports.VariantRepresentation = VariantRepresentation;
//# sourceMappingURL=VariantRepresentation.js.map
