/**
 * Pedigree members to be used in testing
 *
 */

import { PedigreeMember, Sex } from "../participant";

export const defaultProbandValues: {
  pedigreeId?: number;
  motherId?: number;
  fatherId?: number;
  sex: string;
  isProband?: boolean;
} = {
  pedigreeId: 1,
  motherId: 2,
  fatherId: 3,
  sex: Sex.FEMALE,
  isProband: true
};

export const defaultMotherValues = {
  pedigreeId: 2,
  motherId: 4,
  fatherId: 5,
  sex: Sex.FEMALE
};

export const defaultMaternalGrandMotherValues = {
  pedigreeId: 4,
  sex: Sex.FEMALE
};

export const defaultMaternalAunt = {
  pedigreeId: 13,
  motherId: 4,
  sex: Sex.FEMALE
};

export const defaultMaternalGrandFatherValues = {
  pedigreeId: 5,
  sex: Sex.MALE
};

export const defaultFatherValues = {
  pedigreeId: 3,
  motherId: 6,
  fatherId: 7,
  sex: Sex.MALE
};

export const defaultPaternalGrandMotherValues = {
  pedigreeId: 6,
  sex: Sex.FEMALE
};

export const defaultPaternalGrandFatherValues = {
  pedigreeId: 7,
  sex: Sex.MALE
};

export const defaultSiblingValues = {
  pedigreeId: 8,
  motherId: 2,
  fatherId: 3,
  sex: Sex.MALE
};

export const defaultOffspringValues = {
  pedigreeId: 9,
  motherId: 1,
  fatherId: 10,
  sex: Sex.FEMALE
};

export const defaultSpouseValues = {
  pedigreeId: 10,
  sex: Sex.MALE
};

export const defaultSiblingMValues = {
  pedigreeId: 11,
  motherId: 2,
  fatherId: 12,
  sex: Sex.MALE
};

export const defaultUnrelatedValues = {
  pedigreeId: 12,
  sex: Sex.MALE,
  motherId: undefined,
  fatherId: undefined
};

export const defaultPaternalUncleValues = {
  pedigreeId: 14,
  fatherId: 7,
  sex: Sex.MALE
};

export const defaultFirstCousinValues = {
  pedigreeId: 15,
  fatherId: 14,
  sex: Sex.MALE
};

export const defaultValues = {
  defaultProbandValues,
  defaultMotherValues,
  defaultMaternalGrandMotherValues,
  defaultMaternalAunt,
  defaultMaternalGrandFatherValues,
  defaultFatherValues,
  defaultPaternalGrandMotherValues,
  defaultPaternalGrandFatherValues,
  defaultSiblingValues,
  defaultOffspringValues,
  defaultSpouseValues,
  defaultSiblingMValues,
  defaultUnrelatedValues,
  defaultPaternalUncleValues,
  defaultFirstCousinValues
};

export const getPedigree = (values = defaultProbandValues) => {
  const pedigree = new PedigreeMember();

  for (const val in values) {
    pedigree[val] = values[val];
  }

  return pedigree;
};
