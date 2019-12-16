/**
 * Some flags relevant to the interpretation of a case
 */
export declare enum InterpretationFlags {
  mixed_chemistries = "mixed_chemistries",
  mixedLab_preparation = "mixedLab_preparation",
  low_tumour_purity = "low_tumour_purity",
  uniparental_isodisomy = "uniparental_isodisomy",
  uniparental_heterodisomy = "uniparental_heterodisomy",
  unusual_karyotype = "unusual_karyotype",
  high_cnv_count = "high_cnv_count",
  high_estimate_human_contamination_fraction = "high_estimate_human_contamination_fraction",
  mixed_recruiting_gmc = "mixed_recruiting_gmc",
  suspected_mosaicism = "suspected_mosaicism",
  low_quality_sample = "low_quality_sample",
  ffpe_tumour_sample = "ffpe_tumour_sample",
  ff_nano_tumour_sample = "ff_nano_tumour_sample",
  missing_values_for_proband_in_reported_variant = "missing_values_for_proband_in_reported_variant",
  reissued = "reissued",
  supplementary_report_errors = "supplementary_report_errors",
  internal_use_only = "internal_use_only",
  high_priority = "high_priority",
  other = "other"
}
