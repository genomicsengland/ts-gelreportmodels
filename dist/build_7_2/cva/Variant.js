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
var VariantRepresentation_1 = require("./VariantRepresentation");
var json2typescript_1 = require("json2typescript");
/**
 * The map of variants in the different assemblies
 */
var Variant = /** @class */ (function() {
  function Variant() {
    /**
     * A list of variant representations
     */
    this.variants = [];
  }
  __decorate(
    [
      json2typescript_1.JsonProperty("variants", [
        VariantRepresentation_1.VariantRepresentation
      ])
    ],
    Variant.prototype,
    "variants",
    void 0
  );
  Variant = __decorate([json2typescript_1.JsonObject], Variant);
  return Variant;
})();
exports.Variant = Variant;
//# sourceMappingURL=Variant.js.map
