"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var ReportEvent_1 = require("../ReportEvent");
var GenomicEntity_1 = require("../GenomicEntity");
var GenomicEntityType_1 = require("../GenomicEntityType");
var GenePanel_1 = require("../GenePanel");
test('Unique tiers', function () {
    var str = new __1.ShortTandemRepeat;
    var re1 = new ReportEvent_1.ReportEvent;
    re1.tier = 'TIER1';
    var re2 = new ReportEvent_1.ReportEvent;
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
test('Unique genes', function () {
    var str = new __1.ShortTandemRepeat;
    var re1 = new ReportEvent_1.ReportEvent;
    var genomicEntity = new GenomicEntity_1.GenomicEntity;
    genomicEntity.type = GenomicEntityType_1.GenomicEntityType.gene;
    genomicEntity.geneSymbol = 'gene1';
    re1.genomicEntities = [genomicEntity,];
    var re2 = new ReportEvent_1.ReportEvent;
    var genomicEntity2 = new GenomicEntity_1.GenomicEntity;
    genomicEntity2.type = GenomicEntityType_1.GenomicEntityType.gene;
    genomicEntity2.geneSymbol = 'gene2';
    re2.genomicEntities = [genomicEntity2,];
    str.reportEvents = [
        re1, re2
    ];
    expect(str.getGenes()).toEqual(['gene1', 'gene2']);
});
test('Unique STRs', function () {
    var str = new __1.ShortTandemRepeat;
    var re1 = new ReportEvent_1.ReportEvent;
    var genomicEntity = new GenomicEntity_1.GenomicEntity;
    genomicEntity.type = GenomicEntityType_1.GenomicEntityType.genomic_region;
    genomicEntity.otherIds = [{ identifier: 'STR1_AT', source: 'other' }];
    re1.genomicEntities = [genomicEntity,];
    var re2 = new ReportEvent_1.ReportEvent;
    var genomicEntity2 = new GenomicEntity_1.GenomicEntity;
    genomicEntity2.type = GenomicEntityType_1.GenomicEntityType.genomic_region;
    genomicEntity2.otherIds = [{ identifier: 'STR2_AT', source: 'other' }];
    re2.genomicEntities = [genomicEntity2,];
    str.reportEvents = [
        re1, re2
    ];
    expect(str.getSTRs()).toEqual(['STR1_AT', 'STR2_AT']);
});
test('Unique panels', function () {
    var str = new __1.ShortTandemRepeat;
    var re1 = new ReportEvent_1.ReportEvent;
    var genePanel1 = new GenePanel_1.GenePanel;
    genePanel1.panelIdentifier = '1234';
    genePanel1.panelName = 'Gene Panel Name';
    genePanel1.panelVersion = '1.1';
    genePanel1.source = 'panelApp';
    re1.genePanel = genePanel1;
    var re2 = new ReportEvent_1.ReportEvent;
    var genePanel2 = new GenePanel_1.GenePanel;
    genePanel2.panelIdentifier = '1235';
    genePanel2.panelName = 'Gene Panel Name 2';
    genePanel2.panelVersion = '1.1';
    genePanel2.source = 'panelApp';
    re2.genePanel = genePanel2;
    str.reportEvents = [
        re1, re2
    ];
    expect(str.getPanels()).toEqual([genePanel1, genePanel2]);
    var re3 = new ReportEvent_1.ReportEvent;
    var genePanel3 = new GenePanel_1.GenePanel;
    genePanel3.panelIdentifier = '1234';
    genePanel3.panelName = 'Gene Panel Name';
    genePanel3.panelVersion = '1.1';
    genePanel3.source = 'panelApp';
    re3.genePanel = genePanel3;
    str.reportEvents = [
        re1, re3
    ];
    expect(str.getPanels().map(function (p) { return p.toJSON(); })).toEqual([genePanel1.toJSON()]);
});
//# sourceMappingURL=shortTandemRepeats.js.map