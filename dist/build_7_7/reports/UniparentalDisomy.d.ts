export declare class UniparentalDisomyFragment {
    /** Coordinates can be specified to indicate the part of the chromosome affected */
    coordinates?: string;
    /** indicates whether the UPD event involves `isodisomy`, `heterodisomy` or `both` */
    uniparentalDisomyType: string;
}
export declare class IdentityByDescent {
    relatedSample: string;
    ibd0: number;
    ibd1: number;
    ibd2: number;
    pihat: number;
}
export declare class UniparentalDisomyEvidences {
    ibds?: IdentityByDescent[];
}
export declare class UniparentalDisomy {
    /** The assembly */
    assembly: string;
    /** Chromosome where two homologues were inherited from one parent */
    chromosome: string;
    /** indicates Whether the UPD event involves an entire chromosome or part of a chromosome */
    complete?: boolean;
    /** The parent who contributed two chromosomes was the mother (maternal) or the father (paternal) */
    origin: string;
    /** List of all of the UPD fragments for this UPD event */
    uniparentalDisomyFragments?: UniparentalDisomyFragment[];
    /** Participant affected by this UPD */
    participantId: string;
    uniparentalDisomyEvidences?: UniparentalDisomyEvidences;
}
