"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Each ACMG criterion is weighted using the following terms
 */
var AcmgEvidenceWeight;
(function(AcmgEvidenceWeight) {
  /**
   * `stand_alone`: `A`, stand-alone applied for benign variant critieria
   * `(BA1)`
   */
  AcmgEvidenceWeight["stand_alone"] = "stand_alone";
  /**
   * `supporting`: `P`, supporting applied for benign variant critieria
   * `(BP1-6)` and pathogenic variant criteria `(PP1-5)`
   */
  AcmgEvidenceWeight["supporting"] = "supporting";
  /**
   * `moderate`: `M`, moderate applied for pathogenic variant critieria
   * (PM1-6)
   */
  AcmgEvidenceWeight["moderate"] = "moderate";
  /**
   * `strong`: `S`, strong applied for pathogenic variant critieria (PS1-4)
   */
  AcmgEvidenceWeight["strong"] = "strong";
  /**
   * `very_strong`: `S`, Very Stong applied for pathogenic variant critieria
   * (PVS1)
   */
  AcmgEvidenceWeight["very_strong"] = "very_strong";
})(
  (AcmgEvidenceWeight =
    exports.AcmgEvidenceWeight || (exports.AcmgEvidenceWeight = {}))
);
//# sourceMappingURL=AcmgEvidenceWeight.js.map
