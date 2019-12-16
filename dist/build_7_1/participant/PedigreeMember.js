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
var InbreedingCoefficient_1 = require("./InbreedingCoefficient");
var Sample_1 = require("./Sample");
var ConsentStatus_1 = require("./ConsentStatus");
var Ancestries_1 = require("./Ancestries");
var HpoTerm_1 = require("./HpoTerm");
var Disorder_1 = require("./Disorder");
var json2typescript_1 = require("json2typescript");
/**
 * This defines a RD Participant (demographics and pedigree information)
 */
var PedigreeMember = /** @class */ (function() {
  function PedigreeMember() {
    /**
     * Numbering used to refer to each member of the pedigree
     */
    this.pedigreeId = undefined; // type:int
    /**
     * If this field is true, the member should be considered the proband of
     * this family
     */
    this.isProband = undefined;
    /**
     * participantId
     */
    this.participantId = undefined;
    /**
     * participantQCState
     */
    this.participantQCState = undefined; // ParticipantQCState
    /**
     * superFamily id, this id is built as a concatenation of all families id
     * in this superfamily i.e, fam10024_fam100457
     */
    this.gelSuperFamilyId = undefined;
    /**
     * Sex of the Participant
     */
    this.sex = "";
    /**
     * Karyotypic sex of the participant as previously established or by
     * looking at the GEL genome
     */
    this.personKaryotypicSex = undefined; // PersonKaryotipicSex
    /** Year of Birth */
    this.yearOfBirth = undefined; // type:int
    /** refers to the pedigreeId of the father Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    this.fatherId = undefined; // type:int
    /**
     * refers to the pedigreeId of the mother Id of the parent, if unknown then
     * no parent is referenced. Parents may need to be entered even if no data
     * is known about them in order to unambiguously reconstruct the pedigree.
     */
    this.motherId = undefined; // type:int
    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the father
     */
    this.superFatherId = undefined; // type:int
    /**
     * this id is built using the original familyId and the original pedigreeId
     * of the mother
     */
    this.superMotherId = undefined; // type:int
    /**
     * Each twin group is numbered, i.e. all members of a group of multiparous
     * births receive the same number
     */
    this.twinGroup = undefined; // type:int
    /**
     * A property of the twinning group but should be entered for all members
     */
    this.monozygotic = undefined; // TernaryOption
    /**
     * Adopted Status
     */
    this.adoptedStatus = undefined; // AdoptedStatus
    /**
     * Life Status
     */
    this.lifeStatus = undefined; // LifeStatus
    /**
     * The parents of this participant has a consanguineous relationship
     */
    this.consanguineousParents = undefined; // TernaryOption
    /**
     * Affection Status
     */
    this.affectionStatus = undefined; // AffectionStatus
    /**
     * Clinical Data (disorders). If the family member is unaffected as per
     * affectionStatus then this list is empty
     */
    this.disorderList = undefined;
    /**
     * Clinical Data (HPO terms)
     */
    this.hpoTermList = undefined;
    /**
     * Participant's ancestries, defined as Mother's/Father's Ethnic Origin and
     * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase
     * 3 populations
     */
    this.ancestries = undefined;
    /**
     * What has this participant consented to? A participant that has been
     * consented to the programme should also have sequence data associated
     * with them; however this needs to be programmatically checked
     */
    this.consentStatus = undefined;
    /**
     * This is an array containing all the samples that belong to this
     * individual, e.g ["LP00002255_GA4"]
     */
    this.samples = undefined;
    /** Inbreeding Coefficient Estimation */
    this.inbreedingCoefficient = undefined;
    /**
     * We could add a map here to store additional information for example
     * URIs to images, ECGs, etc Null by default
     */
    this.additionalInformation = undefined;
  }
  __decorate(
    [json2typescript_1.JsonProperty("pedigreeId", Number, true)],
    PedigreeMember.prototype,
    "pedigreeId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("isProband", Boolean, true)],
    PedigreeMember.prototype,
    "isProband",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("participantId", String, true)],
    PedigreeMember.prototype,
    "participantId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("participantQCState", String, true)],
    PedigreeMember.prototype,
    "participantQCState",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("gelSuperFamilyId", String, true)],
    PedigreeMember.prototype,
    "gelSuperFamilyId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("sex", String)],
    PedigreeMember.prototype,
    "sex",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("personKaryotypicSex", String, true)],
    PedigreeMember.prototype,
    "personKaryotypicSex",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("yearOfBirth", Number, true)],
    PedigreeMember.prototype,
    "yearOfBirth",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("fatherId", Number, true)],
    PedigreeMember.prototype,
    "fatherId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("motherId", Number, true)],
    PedigreeMember.prototype,
    "motherId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("superFatherId", Number, true)],
    PedigreeMember.prototype,
    "superFatherId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("superMotherId", Number, true)],
    PedigreeMember.prototype,
    "superMotherId",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("twinGroup", Number, true)],
    PedigreeMember.prototype,
    "twinGroup",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("monozygotic", String, true)],
    PedigreeMember.prototype,
    "monozygotic",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("adoptedStatus", String, true)],
    PedigreeMember.prototype,
    "adoptedStatus",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("lifeStatus", String, true)],
    PedigreeMember.prototype,
    "lifeStatus",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("consanguineousParents", String, true)],
    PedigreeMember.prototype,
    "consanguineousParents",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("affectionStatus", String, true)],
    PedigreeMember.prototype,
    "affectionStatus",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "disorderList",
        [Disorder_1.Disorder],
        true
      )
    ],
    PedigreeMember.prototype,
    "disorderList",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("hpoTermList", [HpoTerm_1.HpoTerm], true)],
    PedigreeMember.prototype,
    "hpoTermList",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "ancestries",
        Ancestries_1.Ancestries,
        true
      )
    ],
    PedigreeMember.prototype,
    "ancestries",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "consentStatus",
        ConsentStatus_1.ConsentStatus,
        true
      )
    ],
    PedigreeMember.prototype,
    "consentStatus",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("samples", [Sample_1.Sample], true)],
    PedigreeMember.prototype,
    "samples",
    void 0
  );
  __decorate(
    [
      json2typescript_1.JsonProperty(
        "inbreedingCoefficient",
        InbreedingCoefficient_1.InbreedingCoefficient,
        true
      )
    ],
    PedigreeMember.prototype,
    "inbreedingCoefficient",
    void 0
  );
  __decorate(
    [json2typescript_1.JsonProperty("additionalInformation", Object, true)],
    PedigreeMember.prototype,
    "additionalInformation",
    void 0
  );
  PedigreeMember = __decorate([json2typescript_1.JsonObject], PedigreeMember);
  return PedigreeMember;
})();
exports.PedigreeMember = PedigreeMember;
//# sourceMappingURL=PedigreeMember.js.map
