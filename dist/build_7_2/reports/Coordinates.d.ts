import { ConfidenceInterval } from "./ConfidenceInterval";
export declare class Coordinates {
    assembly: string;
    chromosome: string;
    start: number;
    end: number;
    ciStart?: ConfidenceInterval;
    ciEnd?: ConfidenceInterval;
    toVerboseId(): string;
}
