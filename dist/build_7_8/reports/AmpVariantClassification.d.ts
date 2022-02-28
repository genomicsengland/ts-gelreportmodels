import { AmpClincialOrExperimentalEvidence } from "./AmpClincialOrExperimentalEvidence";
import { AmpEvidence } from "./AmpEvidence";
/**
 * Full Variant classification acording to AMP guideline, including all
 * supporting evidences and the final assessment
 */
export declare class AmpVariantClassification {
    /** List of AMP evidences */
    ampEvidences: Array<AmpEvidence>;
    /** Final Clasification taken in account the evidences */
    ampTier: string;
    /** Clinical or Experimental evicence */
    ampClincialOrExperimentalEvidence: Array<AmpClincialOrExperimentalEvidence>;
    /** Final Assessment */
    assessment?: string;
}
