"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Some flags relevant to the interpretation of a case
 */
var InterpretationFlags;
(function(InterpretationFlags) {
  InterpretationFlags["mixed_chemistries"] = "mixed_chemistries";
  InterpretationFlags["mixedLab_preparation"] = "mixedLab_preparation";
  InterpretationFlags["low_tumour_purity"] = "low_tumour_purity";
  InterpretationFlags["uniparental_isodisomy"] = "uniparental_isodisomy";
  InterpretationFlags["uniparental_heterodisomy"] = "uniparental_heterodisomy";
  InterpretationFlags["unusual_karyotype"] = "unusual_karyotype";
  InterpretationFlags["high_cnv_count"] = "high_cnv_count";
  InterpretationFlags["high_estimate_human_contamination_fraction"] =
    "high_estimate_human_contamination_fraction";
  InterpretationFlags["mixed_recruiting_gmc"] = "mixed_recruiting_gmc";
  InterpretationFlags["suspected_mosaicism"] = "suspected_mosaicism";
  InterpretationFlags["low_quality_sample"] = "low_quality_sample";
  InterpretationFlags["ffpe_tumour_sample"] = "ffpe_tumour_sample";
  InterpretationFlags["ff_nano_tumour_sample"] = "ff_nano_tumour_sample";
  InterpretationFlags["missing_values_for_proband_in_reported_variant"] =
    "missing_values_for_proband_in_reported_variant";
  InterpretationFlags["reissued"] = "reissued";
  InterpretationFlags["supplementary_report_errors"] =
    "supplementary_report_errors";
  InterpretationFlags["internal_use_only"] = "internal_use_only";
  InterpretationFlags["high_priority"] = "high_priority";
  InterpretationFlags["other"] = "other";
})(
  (InterpretationFlags =
    exports.InterpretationFlags || (exports.InterpretationFlags = {}))
);
//# sourceMappingURL=InterpretationFlags.js.map
