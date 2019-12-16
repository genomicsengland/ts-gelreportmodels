"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** An enumeration for the different mode of inheritances */
var ModeOfInheritance;
(function(ModeOfInheritance) {
  /**
   * `monoallelic`: MONOALLELIC, autosomal or pseudoautosomal, imprinted
   * status unknown
   */
  ModeOfInheritance["monoallelic"] = "monoallelic";
  /**
   * `monoallelic_not_imprinted`: MONOALLELIC, autosomal or pseudoautosomal,
   * not imprinted
   */
  ModeOfInheritance["monoallelic_not_imprinted"] = "monoallelic_not_imprinted";
  /**
   * `monoallelic_maternally_imprinted`: MONOALLELIC, autosomal or
   * pseudoautosomal, maternally imprinted (paternal allele expressed)
   */
  ModeOfInheritance["monoallelic_maternally_imprinted"] =
    "monoallelic_maternally_imprinted";
  /**
   * `monoallelic_paternally_imprinted`: MONOALLELIC, autosomal or
   * pseudoautosomal, paternally imprinted (maternal allele expressed)
   */
  ModeOfInheritance["monoallelic_paternally_imprinted"] =
    "monoallelic_paternally_imprinted";
  /** `biallelic`: BIALLELIC, autosomal or pseudoautosomal */
  ModeOfInheritance["biallelic"] = "biallelic";
  /**
   * `monoallelic_and_biallelic`: BOTH monoallelic and biallelic, autosomal
   * or pseudoautosomal
   */
  ModeOfInheritance["monoallelic_and_biallelic"] = "monoallelic_and_biallelic";
  /**
   * `monoallelic_and_more_severe_biallelic`: BOTH monoallelic and biallelic,
   * autosomal or pseudoautosomal (but BIALLELIC mutations cause a more
   * SEVERE disease form), autosomal or pseudoautosomal
   */
  ModeOfInheritance["monoallelic_and_more_severe_biallelic"] =
    "monoallelic_and_more_severe_biallelic";
  /**
   * `xlinked_biallelic`: X-LINKED: hemizygous mutation in males, biallelic
   * mutations in females
   */
  ModeOfInheritance["xlinked_biallelic"] = "xlinked_biallelic";
  /**
   * `xlinked_monoallelic`: X linked: hemizygous mutation in males,
   * monoallelic mutations in females may cause disease (may be less severe,
   * later onset than males)
   */
  ModeOfInheritance["xlinked_monoallelic"] = "xlinked_monoallelic";
  /** `mitochondrial`: MITOCHONDRIAL */
  ModeOfInheritance["mitochondrial"] = "mitochondrial";
  /** `unknown`: Unknown */
  ModeOfInheritance["unknown"] = "unknown";
  ModeOfInheritance["na"] = "na";
})(
  (ModeOfInheritance =
    exports.ModeOfInheritance || (exports.ModeOfInheritance = {}))
);
//# sourceMappingURL=ModeOfInheritance.js.map
