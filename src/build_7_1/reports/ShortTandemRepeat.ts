import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { ShortTandemRepeatReferenceData } from './ShortTandemRepeatReferenceData';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ShortTandemRepeat {
    @JsonProperty('coordinates', Coordinates)
    coordinates: Coordinates = new Coordinates;

    @JsonProperty('reportEvents', [ReportEvent])
    reportEvents: Array<ReportEvent> = [];

    /** array of genotypes for the samples */
    @JsonProperty('variantCalls', [VariantCall])
    variantCalls: Array<VariantCall> = [];

    @JsonProperty('variantAttributes', VariantAttributes, true)
    variantAttributes?: VariantAttributes = undefined;

    @JsonProperty('shortTandemRepeatReferenceData', ShortTandemRepeatReferenceData, true)
    shortTandemRepeatReferenceData?: ShortTandemRepeatReferenceData;
};
