"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates_1 = require("./Coordinates");
var ReportEvent_1 = require("./ReportEvent");
var VariantCall_1 = require("./VariantCall");
var VariantAttributes_1 = require("./VariantAttributes");
var ShortTandemRepeatReferenceData_1 = require("./ShortTandemRepeatReferenceData");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var lodash_1 = require("lodash");
var GenomicEntityType_1 = require("./GenomicEntityType");
var ShortTandemRepeat = /** @class */ (function(_super) {
  __extends(ShortTandemRepeat, _super);
  function ShortTandemRepeat() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.coordinates = new Coordinates_1.Coordinates();
    _this.reportEvents = [];
    /** array of genotypes for the samples */
    _this.variantCalls = [];
    _this.variantAttributes = undefined;
    _this.shortTandemRepeatReferenceData = undefined;
    return _this;
  }
  ShortTandemRepeat.prototype.getTiers = function() {
    var tiers = new Set();
    this.reportEvents.forEach(function(re) {
      if (re.tier) {
        tiers.add(re.tier);
      }
    });
    return Array.from(tiers);
  };
  ShortTandemRepeat.prototype.getSTRs = function() {
    var strs = new Set();
    this.reportEvents.forEach(function(re) {
      re.genomicEntities.forEach(function(ge) {
        if (
          ge.type === GenomicEntityType_1.GenomicEntityType.genomic_region &&
          ge.otherIds.length > 0
        ) {
          ge.otherIds.forEach(function(id) {
            strs.add(id.identifier);
          });
        }
      });
    });
    return Array.from(strs);
  };
  ShortTandemRepeat.prototype.getGenes = function() {
    var genes = new Set();
    this.reportEvents.forEach(function(re) {
      re.genomicEntities.forEach(function(ge) {
        if (
          ge.type === GenomicEntityType_1.GenomicEntityType.gene &&
          ge.geneSymbol
        ) {
          genes.add(ge.geneSymbol);
        }
      });
    });
    return Array.from(genes);
  };
  ShortTandemRepeat.prototype.getGenesAndEnsembl = function() {
    var genes = new Set();
    this.reportEvents.forEach(function(re) {
      re.genomicEntities.forEach(function(ge) {
        if (
          ge.type === GenomicEntityType_1.GenomicEntityType.gene &&
          ge.geneSymbol
        ) {
          var symbol = ge.geneSymbol;
          if (ge.ensemblId) {
            symbol = ge.geneSymbol + " (" + ge.ensemblId + ")";
          }
          genes.add(symbol);
        }
      });
    });
    return Array.from(genes);
  };
  ShortTandemRepeat.prototype.getPanels = function() {
    var panels = [];
    this.reportEvents.forEach(function(re) {
      if (re.genePanel) {
        var gp_1 = re.genePanel;
        var panelAdded =
          panels.filter(function(p) {
            return lodash_1.isEqual(p, gp_1);
          }).length > 0;
        if (!panelAdded) {
          panels.push(gp_1);
        }
      }
    });
    return panels;
  };
  __decorate(
    [json2typescript_1.JsonProperty("coordinates", Coordinates_1.Coordinates)],
    ShortTandemRepeat.prototype,
    "coordinates",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("reportEvents", [
        ReportEvent_1.ReportEvent
      ])
    ],
    ShortTandemRepeat.prototype,
    "reportEvents",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("variantCalls", [
        VariantCall_1.VariantCall
      ])
    ],
    ShortTandemRepeat.prototype,
    "variantCalls",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "variantAttributes",
        VariantAttributes_1.VariantAttributes,
        true
      )
    ],
    ShortTandemRepeat.prototype,
    "variantAttributes",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "shortTandemRepeatReferenceData",
        ShortTandemRepeatReferenceData_1.ShortTandemRepeatReferenceData,
        true
      )
    ],
    ShortTandemRepeat.prototype,
    "shortTandemRepeatReferenceData",
    void 0
  );
  ShortTandemRepeat = __decorate(
    [json2typescript_1.JsonObject],
    ShortTandemRepeat
  );
  return ShortTandemRepeat;
})(JSONHelper_1.default);
exports.ShortTandemRepeat = ShortTandemRepeat;
//# sourceMappingURL=ShortTandemRepeat.js.map
