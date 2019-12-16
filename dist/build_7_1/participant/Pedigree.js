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
var VersionControl_1 = require("./VersionControl");
var DiseasePenetrance_1 = require("./DiseasePenetrance");
var AnalysisPanel_1 = require("./AnalysisPanel");
var PedigreeMember_1 = require("./PedigreeMember");
var Sex_1 = require("./Sex");
var TernaryOption_1 = require("./TernaryOption");
var FamiliarRelationship_1 = require("./FamiliarRelationship");
var json2typescript_1 = require("json2typescript");
var JSONHelper_1 = __importDefault(require("../../utils/JSONHelper"));
var js_combinatorics_1 = require("js-combinatorics");
var lodash_1 = require("lodash");
var double_ended_queue_1 = __importDefault(require("double-ended-queue"));
/**
 * This is the concept of a family with associated phenotypes as present in
 * the record RDParticipant
 */
var Pedigree = /** @class */ (function(_super) {
  __extends(Pedigree, _super);
  function Pedigree() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    /**
     * Model version number
     */
    _this.versionControl = undefined;
    /**
     * Family identifier which internally translate to a sample set
     */
    _this.familyId = "";
    /**
     * List of members of a pedigree
     */
    _this.members = [];
    /**
     * List of panels
     */
    _this.analysisPanels = undefined;
    /**
     * List of disease penetrances
     */
    _this.diseasePenetrances = undefined;
    /**
     * Flag indicating if a pedigree is ready for analysis
     */
    _this.readyForAnalysis = false;
    /**
     * The famili quality control status
     */
    _this.familyQCState = undefined; // FamilyQCState
    _this._pedigreeMap = {};
    /**
     * Get pedigree member by id
     *
     * @param pedigreeId string Pedigree ID
     */
    _this.getPedigreeById = function(pedigreeId) {
      if (Object.keys(_this._pedigreeMap).length === 0) {
        _this.members.forEach(function(member) {
          if (member.pedigreeId) {
            _this._pedigreeMap[member.pedigreeId] = member;
          }
        });
      }
      return _this._pedigreeMap[pedigreeId];
    };
    /**
     * Check if a member is a parent of the provided family member
     *
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    _this.isParent = function(m1, m2) {
      if (m1.sex === Sex_1.Sex.FEMALE) {
        if (m2.motherId && m1.pedigreeId && m1.pedigreeId === m2.motherId) {
          return FamiliarRelationship_1.FamiliarRelationship.Mother;
        }
      }
      if (m1.sex === Sex_1.Sex.MALE) {
        if (m2.fatherId && m1.pedigreeId && m1.pedigreeId === m2.fatherId) {
          return FamiliarRelationship_1.FamiliarRelationship.Father;
        }
      }
    };
    /**
     * Check if a member is a child of the provided family member
     *
     * @param m1 member to check
     * @param m1 related member
     * @returns string FamiliarRelationship value | null
     */
    _this.isChild = function(m1, m2) {
      // get pedigree ID
      var parentPedigreeId =
        m2.sex === Sex_1.Sex.MALE
          ? m1.fatherId
          : m2.sex === Sex_1.Sex.FEMALE
          ? m1.motherId
          : undefined;
      if (
        parentPedigreeId &&
        m2.pedigreeId &&
        m2.pedigreeId === parentPedigreeId
      ) {
        switch (m1.sex) {
          case Sex_1.Sex.MALE:
            return FamiliarRelationship_1.FamiliarRelationship.Son;
          case Sex_1.Sex.FEMALE:
            return FamiliarRelationship_1.FamiliarRelationship.Daughter;
          default:
            return FamiliarRelationship_1.FamiliarRelationship
              .ChildOfUnknownSex;
        }
      }
    };
    /**
     * Check if a member is a sibling of the provided family member
     *
     * @param m1 member to check
     * @param m2 family member to check
     * @return string FamiliarRelationship's value | null
     */
    _this.isSibling = function(m1, m2) {
      if (
        m1.fatherId &&
        m2.fatherId &&
        m1.motherId &&
        m1.fatherId &&
        m1.fatherId === m2.fatherId &&
        m1.motherId === m2.motherId
      ) {
        if (m1.twinGroup && m2.twinGroup && m1.twinGroup === m2.twinGroup) {
          if (m1.monozygotic === TernaryOption_1.TernaryOption.yes) {
            return FamiliarRelationship_1.FamiliarRelationship.TwinsMonozygous;
          } else if (m2.monozygotic === TernaryOption_1.TernaryOption.no) {
            return FamiliarRelationship_1.FamiliarRelationship.TwinsDizygous;
          } else {
            return FamiliarRelationship_1.FamiliarRelationship.TwinsUnknown;
          }
        } else {
          return FamiliarRelationship_1.FamiliarRelationship.FullSibling;
        }
      } else if (
        m1.fatherId &&
        m2.fatherId &&
        m1.fatherId === m2.fatherId &&
        m1.motherId !== m2.motherId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.FullSiblingF;
      } else if (
        m1.motherId &&
        m2.motherId &&
        m1.motherId === m2.motherId &&
        m1.fatherId !== m2.fatherId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.FullSiblingM;
      }
    };
    /**
     * Check if member (m1) is uncle or aunt of the second member (m2)
     *
     * @param m1 member to check
     * @param m2 family member
     * @returns relationship or null
     */
    _this.isUncleOrAunt = function(m1, m2) {
      if (m2.motherId) {
        var m2Mother = _this.getPedigreeById(m2.motherId);
        if (m2Mother && _this.isSibling(m1, m2Mother) && m2Mother !== m1) {
          switch (m1.sex) {
            case Sex_1.Sex.MALE:
              return FamiliarRelationship_1.FamiliarRelationship.MaternalUncle;
            case Sex_1.Sex.FEMALE:
              return FamiliarRelationship_1.FamiliarRelationship.MaternalAunt;
            default:
              return FamiliarRelationship_1.FamiliarRelationship
                .MaternalUncleOrAunt;
          }
        }
      }
      if (m2.fatherId) {
        var m2Father = _this.getPedigreeById(m2.fatherId);
        if (m2Father && _this.isSibling(m1, m2Father) && m2Father !== m1) {
          switch (m1.sex) {
            case Sex_1.Sex.MALE:
              return FamiliarRelationship_1.FamiliarRelationship.PaternalUncle;
            case Sex_1.Sex.FEMALE:
              return FamiliarRelationship_1.FamiliarRelationship.PaternalAunt;
            default:
              return FamiliarRelationship_1.FamiliarRelationship
                .PaternalUncleOrAunt;
          }
        }
      }
    };
    _this.isFirstCousing = function(m1, m2) {
      var m1Mother = m1.motherId
        ? _this.getPedigreeById(m1.motherId)
        : undefined;
      var m1Father = m1.fatherId
        ? _this.getPedigreeById(m1.fatherId)
        : undefined;
      var maternalRelation = m1Mother
        ? _this.isUncleOrAunt(m1Mother, m2)
        : undefined;
      var paternalRelation = m1Father
        ? _this.isUncleOrAunt(m1Father, m2)
        : undefined;
      if (m1Mother && m1Father && maternalRelation && paternalRelation) {
        return FamiliarRelationship_1.FamiliarRelationship.DoubleFirstCousin;
      }
      if (m1Mother && maternalRelation) {
        switch (maternalRelation) {
          case FamiliarRelationship_1.FamiliarRelationship.MaternalAunt:
            return FamiliarRelationship_1.FamiliarRelationship
              .MaternalCousinSister;
          case FamiliarRelationship_1.FamiliarRelationship.PaternalAunt:
            return FamiliarRelationship_1.FamiliarRelationship
              .PaternalCousinSister;
          default:
            return FamiliarRelationship_1.FamiliarRelationship.Cousin;
        }
      }
      if (m1Father && paternalRelation) {
        switch (paternalRelation) {
          case FamiliarRelationship_1.FamiliarRelationship.PaternalUncle:
            return FamiliarRelationship_1.FamiliarRelationship
              .PaternalCousinBrother;
          case FamiliarRelationship_1.FamiliarRelationship.MaternalUncle:
            return FamiliarRelationship_1.FamiliarRelationship
              .MaternalCousinBrother;
          default:
            return FamiliarRelationship_1.FamiliarRelationship.Cousin;
        }
      }
    };
    /**
     * Check if member (m1) is a grand parent of another member (m2)
     *
     * @param m1 member
     * @param m2 member to check
     * @returns relationship or null
     */
    _this.isGrandParent = function(m1, m2) {
      var m2Mother = m2.motherId
        ? _this.getPedigreeById(m2.motherId)
        : undefined;
      var m2Father = m2.fatherId
        ? _this.getPedigreeById(m2.fatherId)
        : undefined;
      if (
        m2Mother &&
        m2Mother.motherId &&
        m2Mother.motherId === m1.pedigreeId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.MaternalGrandmother;
      }
      if (
        m2Mother &&
        m2Mother.fatherId &&
        m2Mother.fatherId === m1.pedigreeId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.MaternalGrandfather;
      }
      if (
        m2Father &&
        m2Father.motherId &&
        m2Father.motherId === m1.pedigreeId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.PaternalGrandmother;
      }
      if (
        m2Father &&
        m2Father.fatherId &&
        m2Father.fatherId === m1.pedigreeId
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.PaternalGrandfather;
      }
    };
    /**
     * Check if members are spouses
     *
     * @param m1
     * @param m2
     *
     * return "Spouse" | null
     */
    _this.isSpouse = function(m1, m2) {
      var m1Offsprings = new Set();
      var m2Offsprings = new Set();
      if (!m1.pedigreeId || !m2.pedigreeId) {
        return;
      }
      _this.members.filter(function(o) {
        if (
          (o.fatherId && o.fatherId === m1.pedigreeId) ||
          (o.motherId && o.motherId === m1.pedigreeId)
        ) {
          m1Offsprings.add(o);
        }
        if (
          (o.fatherId && o.fatherId === m2.pedigreeId) ||
          (o.motherId && o.motherId === m2.pedigreeId)
        ) {
          m2Offsprings.add(o);
        }
      });
      if (
        lodash_1.intersectionBy(
          Array.from(m1Offsprings),
          Array.from(m2Offsprings),
          "pedigreeId"
        ).length > 0
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.Spouse;
      }
    };
    /**
     * Check if members are unrelated
     *
     * @param m1
     * @param m2
     *
     * return "Unrelated" | null
     */
    _this.isUnrelated = function(m1, m2) {
      // get ancestors for both members and see if there are any overlaping
      var m1Ancestors = _this.getAncestors(m1);
      var m2Ancestors = _this.getAncestors(m2);
      if (
        !lodash_1.intersectionBy(m1Ancestors, m2Ancestors, "pedigreeId").length
      ) {
        return FamiliarRelationship_1.FamiliarRelationship.Unrelated;
      }
    };
    /**
     * Get all ancestors for the provided member
     *
     * @param member family member
     */
    _this.getAncestors = function(member) {
      var q = new double_ended_queue_1.default([member]);
      var ancestors = new Set();
      while (!q.isEmpty()) {
        var ancestor = q.pop();
        if (ancestor) {
          var mother = ancestor.motherId
            ? _this.getPedigreeById(ancestor.motherId)
            : undefined;
          if (mother) {
            q.push(mother);
            ancestors.add(mother);
          }
          var father = ancestor.fatherId
            ? _this.getPedigreeById(ancestor.fatherId)
            : undefined;
          if (father) {
            q.push(father);
            ancestors.add(father);
          }
        }
      }
      return Array.from(ancestors);
    };
    _this.getProband = function() {
      var proband = _this.members.filter(function(member) {
        return member.isProband === true;
      })[0];
      return proband;
    };
    return _this;
  }
  /**
   * Calculate relation to proband values once object has been initialized
   */
  Pedigree.prototype.postConstruct = function() {
    this.calculateRelationToProband();
  };
  /**
   * Go through each member and assign relation to proband for that member.
   *
   * Only calculate following relationships:
   *
   * - child
   * - parent
   * - uncle/aunt
   * - grand parent
   * - sibling
   * - first cousin
   * - spouse
   * - unrelated
   *
   * Same logic as in pythoncommonlibs (GelRDParticipant.get_relationship)
   */
  Pedigree.prototype.calculateRelationToProband = function() {
    var _this = this;
    var proband = this.members.filter(function(member) {
      return member.isProband;
    })[0];
    if (!proband) {
      return;
    }
    if (this.members.length === 1) {
      if (this.members[0].isProband) {
        proband.relationToProband = "Proband";
      }
      return;
    }
    // get all combinations, but remove any pair where one of the member isn't proband
    var pairs = js_combinatorics_1
      .combination(this.members, 2)
      .filter(function(pair) {
        return pair[0].isProband || pair[1].isProband ? true : false;
      });
    pairs.forEach(function(pair) {
      var _a;
      var m1 = pair[0],
        m2 = pair[1];
      if (m1 === m2) {
        return;
      }
      // make sure proband is always on the left
      if (m1 !== proband) {
        (_a = [m2, m1]), (m1 = _a[0]), (m2 = _a[1]);
      }
      var checks = [
        _this.isParent,
        _this.isChild,
        _this.isUncleOrAunt,
        _this.isGrandParent,
        _this.isSibling,
        _this.isFirstCousing,
        _this.isSpouse,
        _this.isUnrelated
      ];
      checks.some(function(check) {
        var res = check(m2, m1);
        if (res) {
          m2.relationToProband = res;
          return true;
        }
        return false;
      });
    });
  };
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "versionControl",
        VersionControl_1.VersionControl,
        true
      )
    ],
    Pedigree.prototype,
    "versionControl",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("LDPCode", String, true)],
    Pedigree.prototype,
    "LDPCode",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("familyId", String)],
    Pedigree.prototype,
    "familyId",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty("members", [
        PedigreeMember_1.PedigreeMember
      ])
    ],
    Pedigree.prototype,
    "members",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "analysisPanels",
        [AnalysisPanel_1.AnalysisPanel],
        true
      )
    ],
    Pedigree.prototype,
    "analysisPanels",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "diseasePenetrances",
        [DiseasePenetrance_1.DiseasePenetrance],
        true
      )
    ],
    Pedigree.prototype,
    "diseasePenetrances",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("readyForAnalysis", Boolean)],
    Pedigree.prototype,
    "readyForAnalysis",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("familyQCState", String, true)],
    Pedigree.prototype,
    "familyQCState",
    void 0
  );
  Pedigree = __decorate([json2typescript_1.JsonObject], Pedigree);
  return Pedigree;
})(JSONHelper_1.default);
exports.Pedigree = Pedigree;
//# sourceMappingURL=Pedigree.js.map
