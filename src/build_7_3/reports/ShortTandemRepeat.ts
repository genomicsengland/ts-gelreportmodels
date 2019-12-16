import { Coordinates } from "./Coordinates";
import { ReportEvent } from "./ReportEvent";
import { VariantCall } from "./VariantCall";
import { VariantAttributes } from "./VariantAttributes";
import { ShortTandemRepeatReferenceData } from "./ShortTandemRepeatReferenceData";
import { JsonObject, JsonProperty } from "json2typescript";
import JSONHelper from "../../utils/JSONHelper";
import { GenePanel } from "./GenePanel";
import { isEqual } from "lodash";
import { GenomicEntityType } from "./GenomicEntityType";

@JsonObject
export class ShortTandemRepeat extends JSONHelper {
  @JsonProperty("coordinates", Coordinates)
  coordinates: Coordinates = new Coordinates();

  @JsonProperty("reportEvents", [ReportEvent])
  reportEvents: Array<ReportEvent> = [];

  /** array of genotypes for the samples */
  @JsonProperty("variantCalls", [VariantCall])
  variantCalls: Array<VariantCall> = [];

  @JsonProperty("variantAttributes", VariantAttributes, true)
  variantAttributes?: VariantAttributes = undefined;

  @JsonProperty(
    "shortTandemRepeatReferenceData",
    ShortTandemRepeatReferenceData,
    true
  )
  shortTandemRepeatReferenceData?: ShortTandemRepeatReferenceData = undefined;

  getTiers(): string[] {
    let tiers = new Set();
    this.reportEvents.forEach(re => {
      if (re.tier) {
        tiers.add(re.tier);
      }
    });

    return Array.from(tiers);
  }

  getSTRs() {
    let strs = new Set();
    this.reportEvents.forEach(re => {
      re.genomicEntities.forEach(ge => {
        if (
          ge.type === GenomicEntityType.genomic_region &&
          ge.otherIds.length > 0
        ) {
          ge.otherIds.forEach(id => {
            strs.add(id.identifier);
          });
        }
      });
    });

    return Array.from(strs);
  }

  getGenes() {
    let genes = new Set();
    this.reportEvents.forEach(re => {
      re.genomicEntities.forEach(ge => {
        if (ge.type === GenomicEntityType.gene && ge.geneSymbol) {
          genes.add(ge.geneSymbol);
        }
      });
    });

    return Array.from(genes);
  }

  getGenesAndEnsembl() {
    let genes = new Set();
    this.reportEvents.forEach(re => {
      re.genomicEntities.forEach(ge => {
        if (ge.type === GenomicEntityType.gene && ge.geneSymbol) {
          let symbol = ge.geneSymbol;
          if (ge.ensemblId) {
            symbol = `${ge.geneSymbol} (${ge.ensemblId})`;
          }

          genes.add(symbol);
        }
      });
    });

    return Array.from(genes);
  }

  getPanels() {
    const panels: GenePanel[] = [];

    this.reportEvents.forEach(re => {
      if (re.genePanel) {
        const gp = re.genePanel;
        const panelAdded = panels.filter(p => isEqual(p, gp)).length > 0;
        if (!panelAdded) {
          panels.push(gp);
        }
      }
    });

    return panels;
  }
}
