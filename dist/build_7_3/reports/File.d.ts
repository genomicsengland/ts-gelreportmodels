/**
 * This defines a file This record is uniquely defined by the sample
 * identfier and an URI Currently sample identifier can be a single string
 * or a list of strings if multiple samples are associated with the same
 * file
 */
export declare class File {
  /**
   * Unique identifier(s) of the sample. For example in a multisample vcf
   * this would have an array of all the sample identifiers
   */
  sampleId?: Array<string>;
  /**
   * URI path of the file
   */
  uriFile: string;
  /**
   * The type of the file
   */
  fileType: string;
  /**
   * The MD5 checksum
   */
  md5Sum?: string;
}
