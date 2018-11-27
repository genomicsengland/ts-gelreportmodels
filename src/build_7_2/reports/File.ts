import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * This defines a file This record is uniquely defined by the sample
 * identfier and an URI Currently sample identifier can be a single string
 * or a list of strings if multiple samples are associated with the same
 * file
 */
@JsonObject
export class File {
    /**
     * Unique identifier(s) of the sample. For example in a multisample vcf
     * this would have an array of all the sample identifiers
     */
    @JsonProperty('sampleId', [String], true)
    sampleId?: Array<string> = undefined;

    /**
     * URI path of the file
     */
    @JsonProperty('uriFile', String)
    uriFile: string = '';

    /**
     * The type of the file
     */
    @JsonProperty('fileType', String)
    fileType: string = '';  // FileType

    /**
     * The MD5 checksum
     */
    @JsonProperty('md5Sum', String, true)
    md5Sum?: string = undefined;
};
