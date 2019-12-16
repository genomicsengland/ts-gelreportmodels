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
/**
 * The ontology to which a standard term belongs
 */
var Ontology = /** @class */ (function() {
  function Ontology() {
    /** The ontology to which a standard term belongs */
    this.version = "";
    /** The ontology to which a standard term belongs */
    this.name = "";
  }
  __decorate(
    [json2typescript_1.JsonProperty("version", String)],
    Ontology.prototype,
    "version",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("name", String)],
    Ontology.prototype,
    "name",
    void 0
  );
  Ontology = __decorate([json2typescript_1.JsonObject], Ontology);
  return Ontology;
})();
exports.Ontology = Ontology;
//# sourceMappingURL=Ontology.js.map
