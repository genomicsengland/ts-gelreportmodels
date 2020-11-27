"use strict";
/**
 * Pedigree members to be used in testing
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPedigree = exports.defaultValues = exports.defaultFirstCousinValues = exports.defaultPaternalUncleValues = exports.defaultUnrelatedValues = exports.defaultSiblingMValues = exports.defaultSpouseValues = exports.defaultOffspringValues = exports.defaultSiblingValues = exports.defaultPaternalGrandFatherValues = exports.defaultPaternalGrandMotherValues = exports.defaultFatherValues = exports.defaultMaternalGrandFatherValues = exports.defaultMaternalAunt = exports.defaultMaternalGrandMotherValues = exports.defaultMotherValues = exports.defaultProbandValues = void 0;
var participant_1 = require("../participant");
exports.defaultProbandValues = {
    pedigreeId: 1,
    motherId: 2,
    fatherId: 3,
    sex: participant_1.Sex.FEMALE,
    isProband: true
};
exports.defaultMotherValues = {
    pedigreeId: 2,
    motherId: 4,
    fatherId: 5,
    sex: participant_1.Sex.FEMALE
};
exports.defaultMaternalGrandMotherValues = {
    pedigreeId: 4,
    sex: participant_1.Sex.FEMALE
};
exports.defaultMaternalAunt = {
    pedigreeId: 13,
    motherId: 4,
    sex: participant_1.Sex.FEMALE
};
exports.defaultMaternalGrandFatherValues = {
    pedigreeId: 5,
    sex: participant_1.Sex.MALE
};
exports.defaultFatherValues = {
    pedigreeId: 3,
    motherId: 6,
    fatherId: 7,
    sex: participant_1.Sex.MALE
};
exports.defaultPaternalGrandMotherValues = {
    pedigreeId: 6,
    sex: participant_1.Sex.FEMALE
};
exports.defaultPaternalGrandFatherValues = {
    pedigreeId: 7,
    sex: participant_1.Sex.MALE
};
exports.defaultSiblingValues = {
    pedigreeId: 8,
    motherId: 2,
    fatherId: 3,
    sex: participant_1.Sex.MALE
};
exports.defaultOffspringValues = {
    pedigreeId: 9,
    motherId: 1,
    fatherId: 10,
    sex: participant_1.Sex.FEMALE
};
exports.defaultSpouseValues = {
    pedigreeId: 10,
    sex: participant_1.Sex.MALE
};
exports.defaultSiblingMValues = {
    pedigreeId: 11,
    motherId: 2,
    fatherId: 12,
    sex: participant_1.Sex.MALE
};
exports.defaultUnrelatedValues = {
    pedigreeId: 12,
    sex: participant_1.Sex.MALE,
    motherId: undefined,
    fatherId: undefined
};
exports.defaultPaternalUncleValues = {
    pedigreeId: 14,
    fatherId: 7,
    sex: participant_1.Sex.MALE
};
exports.defaultFirstCousinValues = {
    pedigreeId: 15,
    fatherId: 14,
    sex: participant_1.Sex.MALE
};
exports.defaultValues = {
    defaultProbandValues: exports.defaultProbandValues,
    defaultMotherValues: exports.defaultMotherValues,
    defaultMaternalGrandMotherValues: exports.defaultMaternalGrandMotherValues,
    defaultMaternalAunt: exports.defaultMaternalAunt,
    defaultMaternalGrandFatherValues: exports.defaultMaternalGrandFatherValues,
    defaultFatherValues: exports.defaultFatherValues,
    defaultPaternalGrandMotherValues: exports.defaultPaternalGrandMotherValues,
    defaultPaternalGrandFatherValues: exports.defaultPaternalGrandFatherValues,
    defaultSiblingValues: exports.defaultSiblingValues,
    defaultOffspringValues: exports.defaultOffspringValues,
    defaultSpouseValues: exports.defaultSpouseValues,
    defaultSiblingMValues: exports.defaultSiblingMValues,
    defaultUnrelatedValues: exports.defaultUnrelatedValues,
    defaultPaternalUncleValues: exports.defaultPaternalUncleValues,
    defaultFirstCousinValues: exports.defaultFirstCousinValues
};
var getPedigree = function (values) {
    if (values === void 0) { values = exports.defaultProbandValues; }
    var pedigree = new participant_1.PedigreeMember();
    for (var val in values) {
        pedigree[val] = values[val];
    }
    return pedigree;
};
exports.getPedigree = getPedigree;
//# sourceMappingURL=pedigree.js.map