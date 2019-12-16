import { Intervention } from "./Intervention";
import { DemographicElegibilityCriteria } from "./DemographicElegibilityCriteria";
import { TrialLocation } from "./TrialLocation";
export declare class Trial {
  /** URL where reference information for this trail can be found */
  studyUrl: string;
  /** Trail/Study indetifier */
  studyIdentifier: string;
  /** Start date of the study */
  startDate?: string;
  /** Completion date of the study */
  estimateCompletionDate?: string;
  /** Title of the study */
  title?: string;
  /** Study Phase */
  phase: string;
  /** Interventions */
  interventions?: Array<Intervention>;
  /** Conditions */
  conditions?: Array<string>;
  /** Primary Purpose of the study */
  primaryPurpose?: string;
  /** Study Type */
  studyType?: string;
  /** Elegigility Criteria based on Age and Sex */
  demogrphicElegibilityCriteria?: DemographicElegibilityCriteria;
  /** List with all of the locations where participant can enrolle */
  locations?: Array<TrialLocation>;
  /**
   * If true, the association was made using the variant information, if not
   * the association was made at Genomic Entity level
   */
  variantActionable: boolean;
}
