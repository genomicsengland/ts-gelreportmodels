/**
 * This is quite GEL specific. This is the way is stored in ModelCatalogue and
 * PanelApp. Currently all specific disease titles are assigned to a disease
 * subgroup so really only specificDisease needs to be completed but we add the
 * others for generality
 */
export declare class Disorder {
  /** This is Level2 Title for this disorder */
  diseaseGroup?: string;
  /** This is Level3 Title for this disorder */
  diseaseSubGroup?: string;
  /** This is Level4 Title for this disorder */
  specificDisease?: string;
  /** Age of onset in years */
  ageOfOnset?: number;
}
