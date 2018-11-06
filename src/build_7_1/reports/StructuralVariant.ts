import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';

@JsonObject
export class StructuralVariant extends JSONHelper {
    @JsonProperty('variantType', String)
    variantType: string = '';  // StructuralVariantType

    @JsonProperty('coordinates', Coordinates)
    coordinates: Coordinates = new Coordinates;

    @JsonProperty('leftInsSeq', String, true)
    leftInsSeq?: string = undefined;

    @JsonProperty('rightInsSeq', String, true)
    rightInsSeq?: string = undefined;

    @JsonProperty('reportEvents', [ReportEvent])
    reportEvents: Array<ReportEvent> = [];

    /** array of genotypes for the samples */
    @JsonProperty('variantCalls', [VariantCall])
    variantCalls: Array<VariantCall> = [];

    @JsonProperty('variantAttributes', VariantAttributes, true)
    variantAttributes?: VariantAttributes = undefined;
};
