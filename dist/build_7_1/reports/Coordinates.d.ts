import { ConfidenceInterval } from './ConfidenceInterval';
export declare class Coordinates {
    chromosome: string;
    start: number;
    end: number;
    ciStart?: ConfidenceInterval;
    ciEnd?: ConfidenceInterval;
}
