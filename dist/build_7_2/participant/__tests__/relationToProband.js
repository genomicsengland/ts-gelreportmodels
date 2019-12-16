"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tests_1 = require("../../tests");
var pedigree_1 = require("../../tests/pedigree");
var Pedigree_1 = require("../Pedigree");
var FamiliarRelationship_1 = require("../FamiliarRelationship");
var getPedigreeJSON = function(members) {
  var pedigree = new Pedigree_1.Pedigree();
  pedigree.members = members;
  return pedigree.toJSON();
};
test("get proband", function() {
  var proband = tests_1.getPedigree();
  var father = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, father]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.getProband().pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
});
test("relation to proband: test father", function() {
  var proband = tests_1.getPedigree();
  var father = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, father]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
});
test("relation to proband: test mother", function() {
  var proband = tests_1.getPedigree();
  var mother = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultMotherValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, mother]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Mother
  );
});
test("relation to proband: test offspring", function() {
  var proband = tests_1.getPedigree();
  var offspring = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultOffspringValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, offspring]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultOffspringValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Daughter
  );
});
test("relation to proband: test spouse", function() {
  var proband = tests_1.getPedigree();
  var offspring = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultOffspringValues
  );
  var spouse = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultSpouseValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, offspring, spouse]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultOffspringValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Daughter
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultSpouseValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Spouse
  );
});
test("relation to proband: test unrelated", function() {
  var proband = tests_1.getPedigree();
  var unrelated = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultUnrelatedValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, unrelated]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultUnrelatedValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Unrelated
  );
});
test("relation to proband: test grandfather", function() {
  var proband = tests_1.getPedigree();
  var parent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var grandParent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, parent, grandParent]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalGrandfather
  );
});
test("relation to proband: test paternal uncle", function() {
  var proband = tests_1.getPedigree();
  var parent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var grandParent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues
  );
  var uncle = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultPaternalUncleValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, parent, grandParent, uncle]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalGrandfather
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultPaternalUncleValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalUncle
  );
});
test("relation to proband: test maternal aunt", function() {
  var proband = tests_1.getPedigree();
  var parent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultMotherValues
  );
  var grandParent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultMaternalGrandMotherValues
  );
  var aunt = tests_1.getPedigree(pedigree_1.defaultValues.defaultMaternalAunt);
  var pedigreeJSON = getPedigreeJSON([proband, parent, grandParent, aunt]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Mother
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMaternalGrandMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.MaternalGrandmother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMaternalAunt.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.MaternalAunt
  );
});
test("relation to proband: test paternal first cousin", function() {
  var proband = tests_1.getPedigree();
  var parent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var grandParent = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues
  );
  var uncle = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultPaternalUncleValues
  );
  var cousin = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFirstCousinValues
  );
  var pedigreeJSON = getPedigreeJSON([
    proband,
    parent,
    grandParent,
    uncle,
    cousin
  ]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalGrandfather
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultPaternalUncleValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalUncle
  );
  expect(pedigree.members[4].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFirstCousinValues.pedigreeId
  );
  expect(pedigree.members[4].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.PaternalCousinBrother
  );
});
test("relation to proband: test sibling", function() {
  var proband = tests_1.getPedigree();
  var father = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var mother = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultMotherValues
  );
  var sibling = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultSiblingValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, father, mother, sibling]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Mother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultSiblingValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.FullSibling
  );
});
test("relation to proband: test sibling", function() {
  var proband = tests_1.getPedigree();
  var father = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultFatherValues
  );
  var mother = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultMotherValues
  );
  var siblingM = tests_1.getPedigree(
    pedigree_1.defaultValues.defaultSiblingMValues
  );
  var pedigreeJSON = getPedigreeJSON([proband, father, mother, siblingM]);
  var pedigree = Pedigree_1.Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.members[0].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe(undefined);
  expect(pedigree.members[1].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.Mother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    pedigree_1.defaultValues.defaultSiblingMValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship_1.FamiliarRelationship.FullSiblingM
  );
});
//# sourceMappingURL=relationToProband.js.map
