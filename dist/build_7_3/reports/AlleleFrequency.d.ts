/**
 * The population allele frequency of a given variant in a given study and
 * optionally population
 */
export declare class AlleleFrequency {
  /** The study from where this data comes from */
  study: string;
  /** The specific population where this allele frequency belongs */
  population: string;
  /** The frequency of the alternate allele */
  alternateFrequency: number;
}
