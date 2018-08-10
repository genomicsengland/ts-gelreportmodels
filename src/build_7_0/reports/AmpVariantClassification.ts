import {JsonObject, JsonProperty } from "json2typescript";
import { AmpClincialOrExperimentalEvidence } from './AmpClincialOrExperimentalEvidence';
import { AmpEvidence } from './AmpEvidence';
import { AmpTier } from './AmpTier';

/**
 * Full Variant classification acording to AMP guideline, including all
 * supporting evidences and the final assessment
 */
@JsonObject
export class AmpVariantClassification {
    /** List of AMP evidences */
    @JsonProperty('ampEvidences', [AmpEvidence])
    ampEvidences: Array<AmpEvidence> = [];

    /** Final Clasification taken in account the evidences */
    @JsonProperty('ampTier', String)
    ampTier: string = '';  // AmpTier

    /** Clinical or Experimental evicence */
    @JsonProperty('ampClincialOrExperimentalEvidence', [AmpClincialOrExperimentalEvidence])
    ampClincialOrExperimentalEvidence: Array<AmpClincialOrExperimentalEvidence> = [];

    /** Final Assessment */
    @JsonProperty('assessment', [String], true)
    assessment?: string = undefined;
};