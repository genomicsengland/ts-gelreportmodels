import { Assembly } from './Assembly';
import { BreakPoint } from './BreakPoint';
import { Rearrangement } from './Rearrangement';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ChromosomalRearrangement {
    @JsonProperty('breakPoints', [BreakPoint])
    breakPoints?: Array<BreakPoint> = undefined;

    @JsonProperty('rearrangements', [Rearrangement])
    rearrangements: Array<Rearrangement> = [];

    @JsonProperty('reportEvents', [ReportEvent])
    reportEvents: Array<ReportEvent> = [];
    
    /** array of genotypes for the samples */
    @JsonProperty('variantCalls', [VariantCall])
    variantCalls: Array<VariantCall> = [];

    @JsonProperty('variantAttributes', VariantAttributes, true)
    variantAttributes?: VariantAttributes = undefined;
};
