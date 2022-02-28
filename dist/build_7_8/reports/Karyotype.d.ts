import { Coordinates } from "./";
export declare class Aneuploidy {
    /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
    iscn?: string;
    /** The assembly */
    assembly: string;
    /** Chromosome involved in the aneuploidy */
    chromosome: string;
    /** Wheter the aneuploidy is for the whole chromosme or just a fragment */
    complete: boolean;
    /** Coordinates can be specified to indicate the part of the chromosome affected */
    coordinates?: Coordinates;
    /** Number of copies */
    numberOfCopies: number;
}
export declare class Karyotype {
    /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
    iscn?: string;
    /** Full description of the karyotype */
    description?: string;
    /** List of aneuploidies */
    aneuploidies?: Aneuploidy[];
    /** Number of copies */
    numberOfChromosomes: number;
    /** Kariotypic sex */
    personKaryotipicSex: string;
    /** Participant identifier */
    participantId: string;
}
