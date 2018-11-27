import { Coordinates } from "./Coordinates";
export declare class BreakPoint {
    coordinates: Coordinates;
    reference?: string;
    alternate?: string;
    info?: {
        [name: string]: string;
    };
}
