import { Coordinates } from './Coordinates';
import { ReportEvent } from './ReportEvent';
import { VariantCall } from './VariantCall';
import { VariantAttributes } from './VariantAttributes';
import { ShortTandemRepeatReferenceData } from './ShortTandemRepeatReferenceData';
import { JsonObject, JsonProperty } from 'json2typescript';
import JSONHelper from '../../utils/JSONHelper';
import { GenePanel } from './GenePanel';
import { isEqual } from 'lodash';
import { GenomicEntityType } from './GenomicEntityType';

@JsonObject
export class ShortTandemRepeat extends JSONHelper {
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

    tiers: Set<string> = new Set();
    strs: Set<string> = new Set();
    genes: Set<string> = new Set();
    panels: Set<GenePanel> = new Set();

    postConstruct() {
        this.tiers = new Set();
        this.strs = new Set();
        this.genes = new Set();
        const panels: {}[] = [];

        this.reportEvents.forEach(re => {
            if (re.tier) {
                this.tiers.add(re.tier);
            }

            re.genomicEntities.forEach(ge => {
                if (ge.type === GenomicEntityType.gene && ge.geneSymbol) {
                    this.genes.add(ge.geneSymbol);
                } else if (ge.type === GenomicEntityType.genomic_region && ge.otherIds.length > 0) {
                    ge.otherIds.forEach(id => {
                        this.strs.add(id.identifier);
                    });
                }
            }); 

            if (re.genePanel) {
                const gp = re.genePanel.toJSON();
                const panelAdded = panels.filter(p => isEqual(p, gp)).length > 0
                if (!panelAdded) {
                    panels.push(gp)
                }
            }
        });

        this.panels = new Set(panels.map(p => GenePanel.fromJSON(p)));
    }
};
