# GelReportModels Build 7 - TypeScript

## Installing

```bash
npm install git+ssh://git@github.com:genomicsengland/ts-gelreportmodels.git
```

## How to use it

```TypeScript
import { build_v7_0 } from 'ts-gelreportmodels';
let jsonData = {"fullyExplainsPhenotype": true, "vendorSpecificScores": {"PgpUkgGAGwZy": 1.5309874350036287e-308, "KHdMAZPgssbp": 3.587906588546e-309, "gRqXxCIXtUVl": 2.1283804792827127e-308, "YgNpnWpNzbcU": 6.80174352597445e-309, "WWaufBaGwLme": 1.007302092384967e-309}, "eventJustification": "RrKkDFjXJFuj", "score": 1.204108471744192e-308, "genomicEntities": [{"geneSymbol": "bEFWMeMZPOBk", "otherIds": {"kPOmaEydVueQ": "YfldgozZhkfE", "nqQAPMPgcnTa": "xvKcinvesfPd", "GbWJDZNDobwK": "kaxcyFzfoBvH", "gHiomyMnWrWz": "OSMGzhAzQRTT", "STmbdONnFNKG": "RKroNgKdqwnd"}, "ensemblId": "ImJwxeaQThic", "type": "intergenic"}, {"geneSymbol": "tgUfgpLDEwmk", "otherIds": {"BfUBwbeyiisS": "GTTMBPlMRRjP", "WPSUqGoGHRKD": "iqbZWvFaAAyq", "oJNGExXtkoaR": "hxNtFvccFswZ", "tWCtUeiEVUsL": "hhkqGTjBlLmQ", "cjWqskfOrSRZ": "CijGVhsBDXdm"}, "ensemblId": "ElOAzwQHtFln", "type": "regulatory_region"}, {"geneSymbol": "DgicskaPYZnF", "otherIds": {"oXAfYbMsjNwA": "tkmoJIFMQlCB", "QPIcfspTUkyR": "sZHEeJZuoFVC", "zBqTnChZBdGE": "NYcjGOAdwERs", "ZfbbmbkPaanZ": "mIRlIximJfyM", "CbKnXrPReMgx": "GSRoIEzAlfYQ"}, "ensemblId": "OMNuKrhFZlcI", "type": "regulatory_region"}, {"geneSymbol": "OPrDIGjlzkjG", "otherIds": {"WWRvHpbitwcE": "hoDSbmkZxNLM", "hRXwtTGDdNNJ": "AwCeIlUUeCRL", "lrbPUAOovLEz": "wXSYiOgqWKFJ", "DUsYhIbsPADY": "XcVzHrRkUCiS", "LGHoEoBVUoxO": "PHUzfLWWufQn"}, "ensemblId": "hIgPKFJCWPRb", "type": "regulatory_region"}, {"geneSymbol": "OKlxXDYMnFFt", "otherIds": {"XdVUXNnBbjKS": "rGoJAVLANJXX", "bPQjZwKnIQnz": "eHEpftwqoHIx", "MioDQyYoiHFE": "FfzGGjfwEjMr", "IEnQNgLFSPar": "YdJClrkMuJEe", "IuyBOqmWLaaJ": "tYDCdsjeUagP"}, "ensemblId": "OPfGbAyHBtDF", "type": "transcript"}], "phenotypes": {"nonStandardPhenotype": ["CiHNMsPdwddV", "npuehppduCad", "cuDmKdqHmBaM", "PdDMOhHAicCM", "tpxJsZzNTOaN"], "standardPhenotypes": [{"comment": "pOLYCzfmJyIF", "definition": "KIuiOVXxpoTO", "alternativeIds": "QaqnLrpgIozg", "name": "xvYOEEQdxYII", "namespace": "ZJfnbLnWsMxr", "synonyms": "UhnjmWhPNtrf", "matchScore": 1.6484631095616583e-308, "ontology": {"version": "RqJQGlaPqHec", "name": "lpwqNzHSwIdQ"}, "isAs": "lBnQhNdYwkdl", "id": "fRIIDIGAZVMg"}, {"comment": "MsjVJykUxVMR", "definition": "aUsfrwZsJjZA", "alternativeIds": "zggVxLTPwlvX", "name": "qyfjwityhIxk", "namespace": "WHipqyAnIohd", "synonyms": "pRqFtAMijCxL", "matchScore": 2.73169914051727e-309, "ontology": {"version": "YhUjvbqXSXdh", "name": "UAciYMHRDyiK"}, "isAs": "ITzPEWsKePrQ", "id": "thlharQmdhtg"}, {"comment": "BDmagGwUDXgz", "definition": "FExQwWvryhIk", "alternativeIds": "iwLEzzDEqfda", "name": "xAKgUjkjkybl", "namespace": "TNNrchLtCYUK", "synonyms": "vBUJxiPiunzc", "matchScore": 1.820503218334373e-308, "ontology": {"version": "ZcHDTfGJxzuU", "name": "YffrxzuxavwE"}, "isAs": "oXVkAVkPiPwE", "id": "eeWMtfJQLjSH"}, {"comment": "LkzIPFfoeSQr", "definition": "VhnZNKJorsUG", "alternativeIds": "jyVWvSBpOaKp", "name": "sdzIjUaviWlz", "namespace": "HfVkgNjDXRQc", "synonyms": "rwCWFpSpEePt", "matchScore": 2.145926128616064e-308, "ontology": {"version": "qcEOuqzXezsB", "name": "FYKVNuGZRzdV"}, "isAs": "gMVLaMOOlhIz", "id": "bXxJbzTCByDu"}, {"comment": "tsKtWdSjbPIs", "definition": "mTKLQwfWDerb", "alternativeIds": "DTapVyEsunOE", "name": "SmhKvxGBNUjb", "namespace": "gfgSWjhPVeGa", "synonyms": "LybbSatrUqfD", "matchScore": 1.3590956458958432e-308, "ontology": {"version": "GDhYeINqKoIk", "name": "oXAeyYORvExf"}, "isAs": "imIJjcgJtELC", "id": "cRdSPwDlfQXR"}]}, "penetrance": "complete", "deNovoQualityScore": 8.0433590640637e-309, "variantClassification": {"clinicalSignificance": "likely_pathogenic", "traitAssociation": "protective", "functionalEffect": "lethal_variant", "drugResponseClassification": "responsive", "tumorigenesisClassification": "modifier"}, "modeOfInheritance": "monoallelic_paternally_imprinted", "reportEventId": "gpfaKSRVnzGd", "genePanel": {"panelVersion": "sngSvxWjWYqD", "panelName": "BVFSgEMTSpcu"}, "tier": "TIER4", "groupOfVariants": 428009024, "variantConsequences": [{"id": "QPgculHwdqui", "name": "xZdMvUgXpCQU"}, {"id": "BeJIDJBxsazD", "name": "PCQkDQpTLUZa"}, {"id": "laoBvHFhIAmz", "name": "lPAqPFTPIeqT"}, {"id": "SMSSlnVIKaIt", "name": "GAbrGIpMXVQk"}, {"id": "iNNglXczVdEO", "name": "FMZgMnJJmnTX"}]};
build_v7_0.reports.ReportEvent.fromJSON(jsonData);
```

## Versioning

[Semantic Versioning 2.0.0](https://semver.org/)

## To do

- [ ] Useful methods for both projects (get)
- [ ] Tests
