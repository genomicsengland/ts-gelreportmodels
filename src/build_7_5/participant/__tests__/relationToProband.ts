import { getPedigree } from "../../tests";
import { defaultValues } from "../../tests/pedigree";
import { Pedigree } from "../Pedigree";
import { PedigreeMember } from "../PedigreeMember";
import { FamiliarRelationship } from "../FamiliarRelationship";

const getPedigreeJSON = (members: Array<PedigreeMember>) => {
  let pedigree = new Pedigree();
  pedigree.members = members;
  return pedigree.toJSON();
};

test("get proband", () => {
  const proband = getPedigree();
  const father = getPedigree(defaultValues.defaultFatherValues);
  let pedigreeJSON = getPedigreeJSON([proband, father]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.getProband().pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
});

test("get single member", () => {
  const proband = getPedigree();
  let pedigreeJSON = getPedigreeJSON([proband]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);
  expect(pedigree.getProband().pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
});

test("get single member", () => {
  const father = getPedigree(defaultValues.defaultFatherValues);
  let fatherJSON = getPedigreeJSON([father]);
  const pedigree = Pedigree.fromJSON(fatherJSON);
  expect(pedigree.getProband()).toBeUndefined();
});

test("relation to proband: test father", () => {
  const proband = getPedigree();
  const father = getPedigree(defaultValues.defaultFatherValues);
  let pedigreeJSON = getPedigreeJSON([proband, father]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
});

test("relation to proband: test mother", () => {
  const proband = getPedigree();
  const mother = getPedigree(defaultValues.defaultMotherValues);
  let pedigreeJSON = getPedigreeJSON([proband, mother]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Mother
  );
});

test("relation to proband: test offspring", () => {
  const proband = getPedigree();
  const offspring = getPedigree(defaultValues.defaultOffspringValues);
  let pedigreeJSON = getPedigreeJSON([proband, offspring]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultOffspringValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Daughter
  );
});

test("relation to proband: test spouse", () => {
  const proband = getPedigree();
  const offspring = getPedigree(defaultValues.defaultOffspringValues);
  const spouse = getPedigree(defaultValues.defaultSpouseValues);
  let pedigreeJSON = getPedigreeJSON([proband, offspring, spouse]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultOffspringValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Daughter
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultSpouseValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.Spouse
  );
});

test("relation to proband: test unrelated", () => {
  const proband = getPedigree();
  const unrelated = getPedigree(defaultValues.defaultUnrelatedValues);
  let pedigreeJSON = getPedigreeJSON([proband, unrelated]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultUnrelatedValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Unrelated
  );
});

test("relation to proband: test grandfather", () => {
  const proband = getPedigree();
  const parent = getPedigree(defaultValues.defaultFatherValues);
  const grandParent = getPedigree(
    defaultValues.defaultPaternalGrandFatherValues
  );
  let pedigreeJSON = getPedigreeJSON([proband, parent, grandParent]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.PaternalGrandfather
  );
});

test("relation to proband: test paternal uncle", () => {
  const proband = getPedigree();
  const parent = getPedigree(defaultValues.defaultFatherValues);
  const grandParent = getPedigree(
    defaultValues.defaultPaternalGrandFatherValues
  );
  const uncle = getPedigree(defaultValues.defaultPaternalUncleValues);
  let pedigreeJSON = getPedigreeJSON([proband, parent, grandParent, uncle]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.PaternalGrandfather
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    defaultValues.defaultPaternalUncleValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship.PaternalUncle
  );
});

test("relation to proband: test maternal aunt", () => {
  const proband = getPedigree();
  const parent = getPedigree(defaultValues.defaultMotherValues);
  const grandParent = getPedigree(
    defaultValues.defaultMaternalGrandMotherValues
  );
  const aunt = getPedigree(defaultValues.defaultMaternalAunt);
  let pedigreeJSON = getPedigreeJSON([proband, parent, grandParent, aunt]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Mother
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultMaternalGrandMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.MaternalGrandmother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    defaultValues.defaultMaternalAunt.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship.MaternalAunt
  );
});

test("relation to proband: test paternal first cousin", () => {
  const proband = getPedigree();
  const parent = getPedigree(defaultValues.defaultFatherValues);
  const grandParent = getPedigree(
    defaultValues.defaultPaternalGrandFatherValues
  );
  const uncle = getPedigree(defaultValues.defaultPaternalUncleValues);
  const cousin = getPedigree(defaultValues.defaultFirstCousinValues);
  let pedigreeJSON = getPedigreeJSON([
    proband,
    parent,
    grandParent,
    uncle,
    cousin
  ]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultPaternalGrandFatherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.PaternalGrandfather
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    defaultValues.defaultPaternalUncleValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship.PaternalUncle
  );
  expect(pedigree.members[4].pedigreeId).toEqual(
    defaultValues.defaultFirstCousinValues.pedigreeId
  );
  expect(pedigree.members[4].relationToProband).toBe(
    FamiliarRelationship.PaternalCousinBrother
  );
});

test("relation to proband: test sibling", () => {
  const proband = getPedigree();
  const father = getPedigree(defaultValues.defaultFatherValues);
  const mother = getPedigree(defaultValues.defaultMotherValues);
  const sibling = getPedigree(defaultValues.defaultSiblingValues);
  let pedigreeJSON = getPedigreeJSON([proband, father, mother, sibling]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.Mother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    defaultValues.defaultSiblingValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship.FullSibling
  );
});

test("relation to proband: test sibling", () => {
  const proband = getPedigree();
  const father = getPedigree(defaultValues.defaultFatherValues);
  const mother = getPedigree(defaultValues.defaultMotherValues);
  const siblingM = getPedigree(defaultValues.defaultSiblingMValues);
  let pedigreeJSON = getPedigreeJSON([proband, father, mother, siblingM]);
  const pedigree = Pedigree.fromJSON(pedigreeJSON);

  expect(pedigree.members[0].pedigreeId).toEqual(
    defaultValues.defaultProbandValues.pedigreeId
  );
  expect(pedigree.members[0].relationToProband).toBe("Proband");
  expect(pedigree.members[1].pedigreeId).toEqual(
    defaultValues.defaultFatherValues.pedigreeId
  );
  expect(pedigree.members[1].relationToProband).toBe(
    FamiliarRelationship.Father
  );
  expect(pedigree.members[2].pedigreeId).toEqual(
    defaultValues.defaultMotherValues.pedigreeId
  );
  expect(pedigree.members[2].relationToProband).toBe(
    FamiliarRelationship.Mother
  );
  expect(pedigree.members[3].pedigreeId).toEqual(
    defaultValues.defaultSiblingMValues.pedigreeId
  );
  expect(pedigree.members[3].relationToProband).toBe(
    FamiliarRelationship.FullSiblingM
  );
});
