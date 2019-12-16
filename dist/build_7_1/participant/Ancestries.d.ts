import { ChiSquare1KGenomesPhase3Pop } from "./ChiSquare1KGenomesPhase3Pop";
/** Ancestries, defined as Ethnic category(ies) and Chi-square test */
export declare class Ancestries {
  /** Mother's Ethnic Origin */
  mothersEthnicOrigin?: string;
  /** Mother's Ethnic Origin Description */
  mothersOtherRelevantAncestry?: string;
  /** Father's Ethnic Origin */
  fathersEthnicOrigin?: string;
  /** Father's Ethnic Origin Description */
  fathersOtherRelevantAncestry?: string;
  /**
   * Chi-square test for goodness of fit of this sample to 1000 Genomes
   * Phase 3 populations
   */
  chiSquare1KGenomesPhase3Pop?: Array<ChiSquare1KGenomesPhase3Pop>;
}
