/**
 * Chi-square test for goodness of fit of this sample to 1000 Genomes Phase 3
 * populations
 */
export declare class ChiSquare1KGenomesPhase3Pop {
  /** 1K Super Population */
  kgSuperPopCategory: string;
  /** 1K Population */
  kgPopCategory?: string;
  /**
   * Chi-square test for goodness of fit of this sample to this 1000 Genomes
   * Phase 3 population
   */
  chiSquare: number;
}
