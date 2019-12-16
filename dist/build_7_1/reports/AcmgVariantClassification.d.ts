import { AcmgEvidence } from "./AcmgEvidence";
/**
 * Full record for the ACMG variant clasiffication, including all selectedd
 * evidences and the final classification.
 */
export declare class AcmgVariantClassification {
  acmgEvidences: Array<AcmgEvidence>;
  clinicalSignificance: string;
  assesment?: string;
}
