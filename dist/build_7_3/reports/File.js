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
 * This defines a file This record is uniquely defined by the sample
 * identfier and an URI Currently sample identifier can be a single string
 * or a list of strings if multiple samples are associated with the same
 * file
 */
var File = /** @class */ (function() {
  function File() {
    /**
     * Unique identifier(s) of the sample. For example in a multisample vcf
     * this would have an array of all the sample identifiers
     */
    this.sampleId = undefined;
    /**
     * URI path of the file
     */
    this.uriFile = "";
    /**
     * The type of the file
     */
    this.fileType = ""; // FileType
    /**
     * The MD5 checksum
     */
    this.md5Sum = undefined;
  }
  __decorate(
    [json2typescript_1.JsonProperty("sampleId", [String], true)],
    File.prototype,
    "sampleId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("uriFile", String)],
    File.prototype,
    "uriFile",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("fileType", String)],
    File.prototype,
    "fileType",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("md5Sum", String, true)],
    File.prototype,
    "md5Sum",
    void 0
  );
  File = __decorate([json2typescript_1.JsonObject], File);
  return File;
})();
exports.File = File;
//# sourceMappingURL=File.js.map
