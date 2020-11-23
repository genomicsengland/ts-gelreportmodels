/* Types of files:
 * `BAM`: alignment
 * `gVCF`: genomic VCF for variants
 * `VCF_small`: VCF file for SNV and indel
 * `VCF_somatic_small`: VCF file for somatic SNV and indel
 * `VCF_CNV`: VCF file for copy number variants
 * `VCF_somatic_CNV`: VCF file somatic for copy number variants
 * `VCF_SV`: VCF file for structural variants only
 * `VCF_somatic_SV`: VCF file for somatic structural variants only
 * `VCF_SV_CNV`: VCF file for CNV and SVs
 * `SVG`: an SVG for example of a pedigree
 * `ANN`: a Json File for the annotation file from openCBschema/IDLs/variantAnnotation.avdl
 * `BigWig`: a bigwig file with the genome coverage
 * `MD5Sum`: a MD5Sum file
 * `ROH`: a BED file with Regions of homozygosity
 * `OTHER`: other unspecified file type
 * `PARTITION`: Canvas output of coverage in high density areas
 * `VARIANT_FREQUENCIES`: b-allele frequencies
 * `COVERAGE`: whole genome coverage metrics in JSON format
 */
export enum FileType {
  BAM = "BAM",
  gVCF = "gVCF",
  VCF_small = "VCF_small",
  VCF_somatic_small = "VCF_somatic_small",
  VCF_CNV = "VCF_CNV",
  VCF_somatic_CNV = "VCF_somatic_CNV",
  VCF_SV = "VCF_SV",
  VCF_somatic_SV = "VCF_somatic_SV",
  VCF_SV_CNV = "VCF_SV_CNV",
  SVG = "SVG",
  ANN = "ANN",
  BigWig = "BigWig",
  MD5Sum = "MD5Sum",
  ROH = "ROH",
  OTHER = "OTHER",
  PARTITION = "PARTITION",
  VARIANT_FREQUENCIES = "VARIANT_FREQUENCIES",
  COVERAGE = "COVERAGE"
}
