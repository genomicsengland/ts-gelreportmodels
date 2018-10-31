import { ShortTandemRepeat } from '..';
import { ReportEvent } from '../ReportEvent';
import { GenomicEntity } from '../GenomicEntity';
import { GenomicEntityType } from '../GenomicEntityType';
import { GenePanel } from '../GenePanel';

test('Unique tiers', () => {
    const str = new ShortTandemRepeat;
    
    const re1 = new ReportEvent;
    re1.tier = 'TIER1';

    const re2 = new ReportEvent;
    re2.tier = 'TIER2';

    str.reportEvents = [
        re1, re2
    ];

    expect(str.getTiers()).toEqual(['TIER1', 'TIER2']);

    re2.tier = 'TIER1';
    str.reportEvents = [
        re1, re2
    ];
    expect(str.getTiers()).toEqual(['TIER1']);
});

test('Unique genes', () => {
    const str = new ShortTandemRepeat;

    const re1 = new ReportEvent;
    const genomicEntity = new GenomicEntity;
    genomicEntity.type = GenomicEntityType.gene;
    genomicEntity.geneSymbol = 'gene1';
    re1.genomicEntities = [genomicEntity, ];
    
    const re2 = new ReportEvent;
    const genomicEntity2 = new GenomicEntity;
    genomicEntity2.type = GenomicEntityType.gene;
    genomicEntity2.geneSymbol = 'gene2';
    re2.genomicEntities = [genomicEntity2, ];

    str.reportEvents = [
        re1, re2
    ];

    expect(str.getGenes()).toEqual(['gene1', 'gene2'])
});

test('Unique STRs', () => {
    const str = new ShortTandemRepeat;

    const re1 = new ReportEvent;
    const genomicEntity = new GenomicEntity;
    genomicEntity.type = GenomicEntityType.genomic_region;
    genomicEntity.otherIds = [{identifier: 'STR1_AT', source: 'other'}];
    re1.genomicEntities = [genomicEntity, ];
    
    const re2 = new ReportEvent;
    const genomicEntity2 = new GenomicEntity;
    genomicEntity2.type = GenomicEntityType.genomic_region;
    genomicEntity2.otherIds = [{identifier: 'STR2_AT', source: 'other'}];
    re2.genomicEntities = [genomicEntity2, ];

    str.reportEvents = [
        re1, re2
    ];
    
    expect(str.getSTRs()).toEqual(['STR1_AT', 'STR2_AT']);
});

test('Unique panels', () => {
    const str = new ShortTandemRepeat;

    const re1 = new ReportEvent;
    const genePanel1 = new GenePanel;
    genePanel1.panelIdentifier = '1234';
    genePanel1.panelName = 'Gene Panel Name';
    genePanel1.panelVersion = '1.1';
    genePanel1.source = 'panelApp';
    re1.genePanel = genePanel1;

    const re2 = new ReportEvent;
    const genePanel2 = new GenePanel;
    genePanel2.panelIdentifier = '1235';
    genePanel2.panelName = 'Gene Panel Name 2';
    genePanel2.panelVersion = '1.1';
    genePanel2.source = 'panelApp';
    re2.genePanel = genePanel2;

    str.reportEvents = [
        re1, re2
    ];
    
    expect(str.getPanels()).toEqual([genePanel1, genePanel2]);

    const re3 = new ReportEvent;
    const genePanel3 = new GenePanel;
    genePanel3.panelIdentifier = '1234';
    genePanel3.panelName = 'Gene Panel Name';
    genePanel3.panelVersion = '1.1';
    genePanel3.source = 'panelApp';
    re3.genePanel = genePanel3;

    str.reportEvents = [
        re1, re3
    ];
    
    expect(str.getPanels().map(p => p.toJSON())).toEqual([genePanel1.toJSON()])
});
