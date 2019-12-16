"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** It is a representation of the zygosity */
var Zygosity;
(function(Zygosity) {
  /** reference_homozygous: 0/0, 0|0 */
  Zygosity["reference_homozygous"] = "reference_homozygous";
  /** heterozygous: 0/1, 1/0, 1|0, 0|1 */
  Zygosity["heterozygous"] = "heterozygous";
  /** alternate_homozygous: 1/1, 1|1 */
  Zygosity["alternate_homozygous"] = "alternate_homozygous";
  /** missing: ./., .|. */
  Zygosity["missing"] = "missing";
  /** half_missing_reference: ./0, 0/., 0|., .|0 */
  Zygosity["half_missing_reference"] = "half_missing_reference";
  /** half_missing_alternate: ./1, 1/., 1|., .|1 */
  Zygosity["half_missing_alternate"] = "half_missing_alternate";
  /** alternate_hemizigous: 1 */
  Zygosity["alternate_hemizigous"] = "alternate_hemizigous";
  /** reference_hemizigous: 0 */
  Zygosity["reference_hemizigous"] = "reference_hemizigous";
  /** unk: Anything unexpected */
  Zygosity["unk"] = "unk";
  Zygosity["na"] = "na";
})((Zygosity = exports.Zygosity || (exports.Zygosity = {})));
//# sourceMappingURL=Zygosity.js.map
