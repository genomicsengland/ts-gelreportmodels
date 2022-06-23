"use strict";
/**
 * Reports
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = exports.DemographicElegibilityCriteria = exports.Coordinates = exports.ConfirmationOutcome = exports.ConfirmationDecision = exports.ConfidenceInterval = exports.ClinicalUtility = exports.ClinicalSignificance = exports.ClinicalReport = exports.ChromosomalRearrangement = exports.CaseSolvedFamily = exports.CancerUsabilityPharmacogenomics = exports.CancerUsabilitySomatic = exports.CancerUsabilityGermline = exports.CancerTestedAdditional = exports.CancerTested = exports.CancerSomaticVariantLevelQuestions = exports.CancerInterpretationRequest = exports.CancerPharmacogenomicsVariantLevelQuestion = exports.CancerGermlineVariantLevelQuestions = exports.CancerExitQuestionnaire = exports.CancerCaseLevelQuestions = exports.CancerActionableVariants = exports.CancerActionabilityPharmacogenomics = exports.CancerActionabilitySomatic = exports.CancerActionability = exports.BreakPoint = exports.Assembly = exports.AmpVariantClassification = exports.AmpTier = exports.AmpEvidenceType = exports.AmpEvidence = exports.AmpClinicalOrExperimentalEvidenceLevel = exports.AmpClinicalOrExperimentalEvidenceCategory = exports.AmpClincialOrExperimentalEvidence = exports.AlleleOrigin = exports.AlleleFrequency = exports.AlgorithmBasedVariantClassification = exports.AgeRange = exports.AdditionalVariantsQuestions = exports.AdditionalAnalysisPanel = exports.ActivationStrength = exports.Actions = exports.Actionability = exports.AcmgVariantClassification = exports.AcmgEvidenceWeight = exports.AcmgEvidenceType = exports.AcmgEvidenceCategory = exports.AcmgEvidence = exports.ACMGClassification = void 0;
exports.StudyType = exports.StudyPhase = exports.StructuralVariantType = exports.StructuralVariantLevelQuestions = exports.StructuralVariant = exports.StandardPhenotype = exports.SmallVariant = exports.ShortTandemRepeatReferenceData = exports.ShortTandemRepeatLevelQuestions = exports.ShortTandemRepeat = exports.SegregationQuestion = exports.SegregationPattern = exports.RoleInCancer = exports.ReviewedParts = exports.ReportingQuestion = exports.ReportVersionControl = exports.ReportEvent = exports.Rearrangement = exports.RareDiseaseExitQuestionnaire = exports.Program = exports.PrognosisClassification = exports.Prognosis = exports.PrimaryPurpose = exports.PhenotypesSolved = exports.Phenotypes = exports.PhaseGenotype = exports.OtherFamilyHistory = exports.Orientation = exports.Ontology = exports.NumberOfCopies = exports.ModeOfInheritance = exports.InterpretationDataCancer = exports.InterpretationDataRd = exports.InterventionType = exports.Intervention = exports.InterpretedGenome = exports.InterpretationRequestsRD = exports.InterpretationFlags = exports.InterpretationFlag = exports.Indel = exports.Identifier = exports.GuidelineBasedVariantClassification = exports.GenomicEntityType = exports.GenomicEntity = exports.GenePanel = exports.FileType = exports.File = exports.FamilyLevelQuestions = exports.DrugResponseClassification = exports.DrugResponse = void 0;
exports.Zygosity = exports.VariantLevelQuestions = exports.VariantIdentifiers = exports.VariantGroupLevelQuestions = exports.VariantFunctionalEffect = exports.VariantCoordinates = exports.VariantConsequence = exports.VariantClassification = exports.VariantCall = exports.VariantAttributes = exports.UserComment = exports.User = exports.TumorigenesisClassification = exports.TypeOfAdditionalFinding = exports.TrialLocation = exports.Trial = exports.TraitAssociation = exports.TimeUnit = exports.Tier = exports.Therapy = exports.SupportingReadType = void 0;
var ACMGClassification_1 = require("./ACMGClassification");
Object.defineProperty(exports, "ACMGClassification", { enumerable: true, get: function () { return ACMGClassification_1.ACMGClassification; } });
var AcmgEvidence_1 = require("./AcmgEvidence");
Object.defineProperty(exports, "AcmgEvidence", { enumerable: true, get: function () { return AcmgEvidence_1.AcmgEvidence; } });
var AcmgEvidenceCategory_1 = require("./AcmgEvidenceCategory");
Object.defineProperty(exports, "AcmgEvidenceCategory", { enumerable: true, get: function () { return AcmgEvidenceCategory_1.AcmgEvidenceCategory; } });
var AcmgEvidenceType_1 = require("./AcmgEvidenceType");
Object.defineProperty(exports, "AcmgEvidenceType", { enumerable: true, get: function () { return AcmgEvidenceType_1.AcmgEvidenceType; } });
var AcmgEvidenceWeight_1 = require("./AcmgEvidenceWeight");
Object.defineProperty(exports, "AcmgEvidenceWeight", { enumerable: true, get: function () { return AcmgEvidenceWeight_1.AcmgEvidenceWeight; } });
var AcmgVariantClassification_1 = require("./AcmgVariantClassification");
Object.defineProperty(exports, "AcmgVariantClassification", { enumerable: true, get: function () { return AcmgVariantClassification_1.AcmgVariantClassification; } });
var Actionability_1 = require("./Actionability");
Object.defineProperty(exports, "Actionability", { enumerable: true, get: function () { return Actionability_1.Actionability; } });
var Actions_1 = require("./Actions");
Object.defineProperty(exports, "Actions", { enumerable: true, get: function () { return Actions_1.Actions; } });
var ActivationStrength_1 = require("./ActivationStrength");
Object.defineProperty(exports, "ActivationStrength", { enumerable: true, get: function () { return ActivationStrength_1.ActivationStrength; } });
var AdditionalAnalysisPanel_1 = require("./AdditionalAnalysisPanel");
Object.defineProperty(exports, "AdditionalAnalysisPanel", { enumerable: true, get: function () { return AdditionalAnalysisPanel_1.AdditionalAnalysisPanel; } });
var AdditionalVariantsQuestions_1 = require("./AdditionalVariantsQuestions");
Object.defineProperty(exports, "AdditionalVariantsQuestions", { enumerable: true, get: function () { return AdditionalVariantsQuestions_1.AdditionalVariantsQuestions; } });
var AgeRange_1 = require("./AgeRange");
Object.defineProperty(exports, "AgeRange", { enumerable: true, get: function () { return AgeRange_1.AgeRange; } });
var AlgorithmBasedVariantClassification_1 = require("./AlgorithmBasedVariantClassification");
Object.defineProperty(exports, "AlgorithmBasedVariantClassification", { enumerable: true, get: function () { return AlgorithmBasedVariantClassification_1.AlgorithmBasedVariantClassification; } });
var AlleleFrequency_1 = require("./AlleleFrequency");
Object.defineProperty(exports, "AlleleFrequency", { enumerable: true, get: function () { return AlleleFrequency_1.AlleleFrequency; } });
var AlleleOrigin_1 = require("./AlleleOrigin");
Object.defineProperty(exports, "AlleleOrigin", { enumerable: true, get: function () { return AlleleOrigin_1.AlleleOrigin; } });
var AmpClincialOrExperimentalEvidence_1 = require("./AmpClincialOrExperimentalEvidence");
Object.defineProperty(exports, "AmpClincialOrExperimentalEvidence", { enumerable: true, get: function () { return AmpClincialOrExperimentalEvidence_1.AmpClincialOrExperimentalEvidence; } });
var AmpClinicalOrExperimentalEvidenceCategory_1 = require("./AmpClinicalOrExperimentalEvidenceCategory");
Object.defineProperty(exports, "AmpClinicalOrExperimentalEvidenceCategory", { enumerable: true, get: function () { return AmpClinicalOrExperimentalEvidenceCategory_1.AmpClinicalOrExperimentalEvidenceCategory; } });
var AmpClinicalOrExperimentalEvidenceLevel_1 = require("./AmpClinicalOrExperimentalEvidenceLevel");
Object.defineProperty(exports, "AmpClinicalOrExperimentalEvidenceLevel", { enumerable: true, get: function () { return AmpClinicalOrExperimentalEvidenceLevel_1.AmpClinicalOrExperimentalEvidenceLevel; } });
var AmpEvidence_1 = require("./AmpEvidence");
Object.defineProperty(exports, "AmpEvidence", { enumerable: true, get: function () { return AmpEvidence_1.AmpEvidence; } });
var AmpEvidenceType_1 = require("./AmpEvidenceType");
Object.defineProperty(exports, "AmpEvidenceType", { enumerable: true, get: function () { return AmpEvidenceType_1.AmpEvidenceType; } });
var AmpTier_1 = require("./AmpTier");
Object.defineProperty(exports, "AmpTier", { enumerable: true, get: function () { return AmpTier_1.AmpTier; } });
var AmpVariantClassification_1 = require("./AmpVariantClassification");
Object.defineProperty(exports, "AmpVariantClassification", { enumerable: true, get: function () { return AmpVariantClassification_1.AmpVariantClassification; } });
var Assembly_1 = require("./Assembly");
Object.defineProperty(exports, "Assembly", { enumerable: true, get: function () { return Assembly_1.Assembly; } });
var BreakPoint_1 = require("./BreakPoint");
Object.defineProperty(exports, "BreakPoint", { enumerable: true, get: function () { return BreakPoint_1.BreakPoint; } });
var CancerActionability_1 = require("./CancerActionability");
Object.defineProperty(exports, "CancerActionability", { enumerable: true, get: function () { return CancerActionability_1.CancerActionability; } });
var CancerActionabilitySomatic_1 = require("./CancerActionabilitySomatic");
Object.defineProperty(exports, "CancerActionabilitySomatic", { enumerable: true, get: function () { return CancerActionabilitySomatic_1.CancerActionabilitySomatic; } });
var CancerActionabilityPharmacogenomics_1 = require("./CancerActionabilityPharmacogenomics");
Object.defineProperty(exports, "CancerActionabilityPharmacogenomics", { enumerable: true, get: function () { return CancerActionabilityPharmacogenomics_1.CancerActionabilityPharmacogenomics; } });
var CancerActionableVariants_1 = require("./CancerActionableVariants");
Object.defineProperty(exports, "CancerActionableVariants", { enumerable: true, get: function () { return CancerActionableVariants_1.CancerActionableVariants; } });
var CancerCaseLevelQuestions_1 = require("./CancerCaseLevelQuestions");
Object.defineProperty(exports, "CancerCaseLevelQuestions", { enumerable: true, get: function () { return CancerCaseLevelQuestions_1.CancerCaseLevelQuestions; } });
var CancerExitQuestionnaire_1 = require("./CancerExitQuestionnaire");
Object.defineProperty(exports, "CancerExitQuestionnaire", { enumerable: true, get: function () { return CancerExitQuestionnaire_1.CancerExitQuestionnaire; } });
var CancerGermlineVariantLevelQuestions_1 = require("./CancerGermlineVariantLevelQuestions");
Object.defineProperty(exports, "CancerGermlineVariantLevelQuestions", { enumerable: true, get: function () { return CancerGermlineVariantLevelQuestions_1.CancerGermlineVariantLevelQuestions; } });
var CancerPharmacogenomicsVariantLevelQuestion_1 = require("./CancerPharmacogenomicsVariantLevelQuestion");
Object.defineProperty(exports, "CancerPharmacogenomicsVariantLevelQuestion", { enumerable: true, get: function () { return CancerPharmacogenomicsVariantLevelQuestion_1.CancerPharmacogenomicsVariantLevelQuestion; } });
var CancerInterpretationRequest_1 = require("./CancerInterpretationRequest");
Object.defineProperty(exports, "CancerInterpretationRequest", { enumerable: true, get: function () { return CancerInterpretationRequest_1.CancerInterpretationRequest; } });
var CancerSomaticVariantLevelQuestions_1 = require("./CancerSomaticVariantLevelQuestions");
Object.defineProperty(exports, "CancerSomaticVariantLevelQuestions", { enumerable: true, get: function () { return CancerSomaticVariantLevelQuestions_1.CancerSomaticVariantLevelQuestions; } });
var CancerTested_1 = require("./CancerTested");
Object.defineProperty(exports, "CancerTested", { enumerable: true, get: function () { return CancerTested_1.CancerTested; } });
var CancerTestedAdditional_1 = require("./CancerTestedAdditional");
Object.defineProperty(exports, "CancerTestedAdditional", { enumerable: true, get: function () { return CancerTestedAdditional_1.CancerTestedAdditional; } });
var CancerUsabilityGermline_1 = require("./CancerUsabilityGermline");
Object.defineProperty(exports, "CancerUsabilityGermline", { enumerable: true, get: function () { return CancerUsabilityGermline_1.CancerUsabilityGermline; } });
var CancerUsabilitySomatic_1 = require("./CancerUsabilitySomatic");
Object.defineProperty(exports, "CancerUsabilitySomatic", { enumerable: true, get: function () { return CancerUsabilitySomatic_1.CancerUsabilitySomatic; } });
var CancerUsabilityPharmacogenomics_1 = require("./CancerUsabilityPharmacogenomics");
Object.defineProperty(exports, "CancerUsabilityPharmacogenomics", { enumerable: true, get: function () { return CancerUsabilityPharmacogenomics_1.CancerUsabilityPharmacogenomics; } });
var CaseSolvedFamily_1 = require("./CaseSolvedFamily");
Object.defineProperty(exports, "CaseSolvedFamily", { enumerable: true, get: function () { return CaseSolvedFamily_1.CaseSolvedFamily; } });
var ChromosomalRearrangement_1 = require("./ChromosomalRearrangement");
Object.defineProperty(exports, "ChromosomalRearrangement", { enumerable: true, get: function () { return ChromosomalRearrangement_1.ChromosomalRearrangement; } });
var ClinicalReport_1 = require("./ClinicalReport");
Object.defineProperty(exports, "ClinicalReport", { enumerable: true, get: function () { return ClinicalReport_1.ClinicalReport; } });
var ClinicalSignificance_1 = require("./ClinicalSignificance");
Object.defineProperty(exports, "ClinicalSignificance", { enumerable: true, get: function () { return ClinicalSignificance_1.ClinicalSignificance; } });
var ClinicalUtility_1 = require("./ClinicalUtility");
Object.defineProperty(exports, "ClinicalUtility", { enumerable: true, get: function () { return ClinicalUtility_1.ClinicalUtility; } });
var ConfidenceInterval_1 = require("./ConfidenceInterval");
Object.defineProperty(exports, "ConfidenceInterval", { enumerable: true, get: function () { return ConfidenceInterval_1.ConfidenceInterval; } });
var ConfirmationDecision_1 = require("./ConfirmationDecision");
Object.defineProperty(exports, "ConfirmationDecision", { enumerable: true, get: function () { return ConfirmationDecision_1.ConfirmationDecision; } });
var ConfirmationOutcome_1 = require("./ConfirmationOutcome");
Object.defineProperty(exports, "ConfirmationOutcome", { enumerable: true, get: function () { return ConfirmationOutcome_1.ConfirmationOutcome; } });
var Coordinates_1 = require("./Coordinates");
Object.defineProperty(exports, "Coordinates", { enumerable: true, get: function () { return Coordinates_1.Coordinates; } });
var DemographicElegibilityCriteria_1 = require("./DemographicElegibilityCriteria");
Object.defineProperty(exports, "DemographicElegibilityCriteria", { enumerable: true, get: function () { return DemographicElegibilityCriteria_1.DemographicElegibilityCriteria; } });
var Domain_1 = require("./Domain");
Object.defineProperty(exports, "Domain", { enumerable: true, get: function () { return Domain_1.Domain; } });
var DrugResponse_1 = require("./DrugResponse");
Object.defineProperty(exports, "DrugResponse", { enumerable: true, get: function () { return DrugResponse_1.DrugResponse; } });
var DrugResponseClassification_1 = require("./DrugResponseClassification");
Object.defineProperty(exports, "DrugResponseClassification", { enumerable: true, get: function () { return DrugResponseClassification_1.DrugResponseClassification; } });
var FamilyLevelQuestions_1 = require("./FamilyLevelQuestions");
Object.defineProperty(exports, "FamilyLevelQuestions", { enumerable: true, get: function () { return FamilyLevelQuestions_1.FamilyLevelQuestions; } });
var File_1 = require("./File");
Object.defineProperty(exports, "File", { enumerable: true, get: function () { return File_1.File; } });
var FileType_1 = require("./FileType");
Object.defineProperty(exports, "FileType", { enumerable: true, get: function () { return FileType_1.FileType; } });
var GenePanel_1 = require("./GenePanel");
Object.defineProperty(exports, "GenePanel", { enumerable: true, get: function () { return GenePanel_1.GenePanel; } });
var GenomicEntity_1 = require("./GenomicEntity");
Object.defineProperty(exports, "GenomicEntity", { enumerable: true, get: function () { return GenomicEntity_1.GenomicEntity; } });
var GenomicEntityType_1 = require("./GenomicEntityType");
Object.defineProperty(exports, "GenomicEntityType", { enumerable: true, get: function () { return GenomicEntityType_1.GenomicEntityType; } });
var GuidelineBasedVariantClassification_1 = require("./GuidelineBasedVariantClassification");
Object.defineProperty(exports, "GuidelineBasedVariantClassification", { enumerable: true, get: function () { return GuidelineBasedVariantClassification_1.GuidelineBasedVariantClassification; } });
var Identifier_1 = require("./Identifier");
Object.defineProperty(exports, "Identifier", { enumerable: true, get: function () { return Identifier_1.Identifier; } });
var Indel_1 = require("./Indel");
Object.defineProperty(exports, "Indel", { enumerable: true, get: function () { return Indel_1.Indel; } });
var InterpretationFlag_1 = require("./InterpretationFlag");
Object.defineProperty(exports, "InterpretationFlag", { enumerable: true, get: function () { return InterpretationFlag_1.InterpretationFlag; } });
var InterpretationFlags_1 = require("./InterpretationFlags");
Object.defineProperty(exports, "InterpretationFlags", { enumerable: true, get: function () { return InterpretationFlags_1.InterpretationFlags; } });
var InterpretationRequestsRD_1 = require("./InterpretationRequestsRD");
Object.defineProperty(exports, "InterpretationRequestsRD", { enumerable: true, get: function () { return InterpretationRequestsRD_1.InterpretationRequestsRD; } });
var InterpretedGenome_1 = require("./InterpretedGenome");
Object.defineProperty(exports, "InterpretedGenome", { enumerable: true, get: function () { return InterpretedGenome_1.InterpretedGenome; } });
var Intervention_1 = require("./Intervention");
Object.defineProperty(exports, "Intervention", { enumerable: true, get: function () { return Intervention_1.Intervention; } });
var InterventionType_1 = require("./InterventionType");
Object.defineProperty(exports, "InterventionType", { enumerable: true, get: function () { return InterventionType_1.InterventionType; } });
var MDTDelivery_1 = require("./MDTDelivery");
Object.defineProperty(exports, "InterpretationDataRd", { enumerable: true, get: function () { return MDTDelivery_1.InterpretationDataRd; } });
Object.defineProperty(exports, "InterpretationDataCancer", { enumerable: true, get: function () { return MDTDelivery_1.InterpretationDataCancer; } });
var ModeOfInheritance_1 = require("./ModeOfInheritance");
Object.defineProperty(exports, "ModeOfInheritance", { enumerable: true, get: function () { return ModeOfInheritance_1.ModeOfInheritance; } });
var NumberOfCopies_1 = require("./NumberOfCopies");
Object.defineProperty(exports, "NumberOfCopies", { enumerable: true, get: function () { return NumberOfCopies_1.NumberOfCopies; } });
var Ontology_1 = require("./Ontology");
Object.defineProperty(exports, "Ontology", { enumerable: true, get: function () { return Ontology_1.Ontology; } });
var Orientation_1 = require("./Orientation");
Object.defineProperty(exports, "Orientation", { enumerable: true, get: function () { return Orientation_1.Orientation; } });
var OtherFamilyHistory_1 = require("./OtherFamilyHistory");
Object.defineProperty(exports, "OtherFamilyHistory", { enumerable: true, get: function () { return OtherFamilyHistory_1.OtherFamilyHistory; } });
var PhaseGenotype_1 = require("./PhaseGenotype");
Object.defineProperty(exports, "PhaseGenotype", { enumerable: true, get: function () { return PhaseGenotype_1.PhaseGenotype; } });
var Phenotypes_1 = require("./Phenotypes");
Object.defineProperty(exports, "Phenotypes", { enumerable: true, get: function () { return Phenotypes_1.Phenotypes; } });
var PhenotypesSolved_1 = require("./PhenotypesSolved");
Object.defineProperty(exports, "PhenotypesSolved", { enumerable: true, get: function () { return PhenotypesSolved_1.PhenotypesSolved; } });
var PrimaryPurpose_1 = require("./PrimaryPurpose");
Object.defineProperty(exports, "PrimaryPurpose", { enumerable: true, get: function () { return PrimaryPurpose_1.PrimaryPurpose; } });
var Prognosis_1 = require("./Prognosis");
Object.defineProperty(exports, "Prognosis", { enumerable: true, get: function () { return Prognosis_1.Prognosis; } });
var PrognosisClassification_1 = require("./PrognosisClassification");
Object.defineProperty(exports, "PrognosisClassification", { enumerable: true, get: function () { return PrognosisClassification_1.PrognosisClassification; } });
var Program_1 = require("./Program");
Object.defineProperty(exports, "Program", { enumerable: true, get: function () { return Program_1.Program; } });
var RareDiseaseExitQuestionnaire_1 = require("./RareDiseaseExitQuestionnaire");
Object.defineProperty(exports, "RareDiseaseExitQuestionnaire", { enumerable: true, get: function () { return RareDiseaseExitQuestionnaire_1.RareDiseaseExitQuestionnaire; } });
var Rearrangement_1 = require("./Rearrangement");
Object.defineProperty(exports, "Rearrangement", { enumerable: true, get: function () { return Rearrangement_1.Rearrangement; } });
var ReportEvent_1 = require("./ReportEvent");
Object.defineProperty(exports, "ReportEvent", { enumerable: true, get: function () { return ReportEvent_1.ReportEvent; } });
var ReportVersionControl_1 = require("./ReportVersionControl");
Object.defineProperty(exports, "ReportVersionControl", { enumerable: true, get: function () { return ReportVersionControl_1.ReportVersionControl; } });
var ReportingQuestion_1 = require("./ReportingQuestion");
Object.defineProperty(exports, "ReportingQuestion", { enumerable: true, get: function () { return ReportingQuestion_1.ReportingQuestion; } });
var ReviewedParts_1 = require("./ReviewedParts");
Object.defineProperty(exports, "ReviewedParts", { enumerable: true, get: function () { return ReviewedParts_1.ReviewedParts; } });
var RoleInCancer_1 = require("./RoleInCancer");
Object.defineProperty(exports, "RoleInCancer", { enumerable: true, get: function () { return RoleInCancer_1.RoleInCancer; } });
var SegregationPattern_1 = require("./SegregationPattern");
Object.defineProperty(exports, "SegregationPattern", { enumerable: true, get: function () { return SegregationPattern_1.SegregationPattern; } });
var SegregationQuestion_1 = require("./SegregationQuestion");
Object.defineProperty(exports, "SegregationQuestion", { enumerable: true, get: function () { return SegregationQuestion_1.SegregationQuestion; } });
var ShortTandemRepeat_1 = require("./ShortTandemRepeat");
Object.defineProperty(exports, "ShortTandemRepeat", { enumerable: true, get: function () { return ShortTandemRepeat_1.ShortTandemRepeat; } });
var ShortTandemRepeatLevelQuestions_1 = require("./ShortTandemRepeatLevelQuestions");
Object.defineProperty(exports, "ShortTandemRepeatLevelQuestions", { enumerable: true, get: function () { return ShortTandemRepeatLevelQuestions_1.ShortTandemRepeatLevelQuestions; } });
var ShortTandemRepeatReferenceData_1 = require("./ShortTandemRepeatReferenceData");
Object.defineProperty(exports, "ShortTandemRepeatReferenceData", { enumerable: true, get: function () { return ShortTandemRepeatReferenceData_1.ShortTandemRepeatReferenceData; } });
var SmallVariant_1 = require("./SmallVariant");
Object.defineProperty(exports, "SmallVariant", { enumerable: true, get: function () { return SmallVariant_1.SmallVariant; } });
var StandardPhenotype_1 = require("./StandardPhenotype");
Object.defineProperty(exports, "StandardPhenotype", { enumerable: true, get: function () { return StandardPhenotype_1.StandardPhenotype; } });
var StructuralVariant_1 = require("./StructuralVariant");
Object.defineProperty(exports, "StructuralVariant", { enumerable: true, get: function () { return StructuralVariant_1.StructuralVariant; } });
var StructuralVariantLevelQuestions_1 = require("./StructuralVariantLevelQuestions");
Object.defineProperty(exports, "StructuralVariantLevelQuestions", { enumerable: true, get: function () { return StructuralVariantLevelQuestions_1.StructuralVariantLevelQuestions; } });
var StructuralVariantType_1 = require("./StructuralVariantType");
Object.defineProperty(exports, "StructuralVariantType", { enumerable: true, get: function () { return StructuralVariantType_1.StructuralVariantType; } });
var StudyPhase_1 = require("./StudyPhase");
Object.defineProperty(exports, "StudyPhase", { enumerable: true, get: function () { return StudyPhase_1.StudyPhase; } });
var StudyType_1 = require("./StudyType");
Object.defineProperty(exports, "StudyType", { enumerable: true, get: function () { return StudyType_1.StudyType; } });
var SupportingReadType_1 = require("./SupportingReadType");
Object.defineProperty(exports, "SupportingReadType", { enumerable: true, get: function () { return SupportingReadType_1.SupportingReadType; } });
var Therapy_1 = require("./Therapy");
Object.defineProperty(exports, "Therapy", { enumerable: true, get: function () { return Therapy_1.Therapy; } });
var Tier_1 = require("./Tier");
Object.defineProperty(exports, "Tier", { enumerable: true, get: function () { return Tier_1.Tier; } });
var TimeUnit_1 = require("./TimeUnit");
Object.defineProperty(exports, "TimeUnit", { enumerable: true, get: function () { return TimeUnit_1.TimeUnit; } });
var TraitAssociation_1 = require("./TraitAssociation");
Object.defineProperty(exports, "TraitAssociation", { enumerable: true, get: function () { return TraitAssociation_1.TraitAssociation; } });
var Trial_1 = require("./Trial");
Object.defineProperty(exports, "Trial", { enumerable: true, get: function () { return Trial_1.Trial; } });
var TrialLocation_1 = require("./TrialLocation");
Object.defineProperty(exports, "TrialLocation", { enumerable: true, get: function () { return TrialLocation_1.TrialLocation; } });
var TypeOfAdditionalFinding_1 = require("./TypeOfAdditionalFinding");
Object.defineProperty(exports, "TypeOfAdditionalFinding", { enumerable: true, get: function () { return TypeOfAdditionalFinding_1.TypeOfAdditionalFinding; } });
var TumorigenesisClassification_1 = require("./TumorigenesisClassification");
Object.defineProperty(exports, "TumorigenesisClassification", { enumerable: true, get: function () { return TumorigenesisClassification_1.TumorigenesisClassification; } });
var User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var UserComment_1 = require("./UserComment");
Object.defineProperty(exports, "UserComment", { enumerable: true, get: function () { return UserComment_1.UserComment; } });
var VariantAttributes_1 = require("./VariantAttributes");
Object.defineProperty(exports, "VariantAttributes", { enumerable: true, get: function () { return VariantAttributes_1.VariantAttributes; } });
var VariantCall_1 = require("./VariantCall");
Object.defineProperty(exports, "VariantCall", { enumerable: true, get: function () { return VariantCall_1.VariantCall; } });
var VariantClassification_1 = require("./VariantClassification");
Object.defineProperty(exports, "VariantClassification", { enumerable: true, get: function () { return VariantClassification_1.VariantClassification; } });
var VariantConsequence_1 = require("./VariantConsequence");
Object.defineProperty(exports, "VariantConsequence", { enumerable: true, get: function () { return VariantConsequence_1.VariantConsequence; } });
var VariantCoordinates_1 = require("./VariantCoordinates");
Object.defineProperty(exports, "VariantCoordinates", { enumerable: true, get: function () { return VariantCoordinates_1.VariantCoordinates; } });
var VariantFunctionalEffect_1 = require("./VariantFunctionalEffect");
Object.defineProperty(exports, "VariantFunctionalEffect", { enumerable: true, get: function () { return VariantFunctionalEffect_1.VariantFunctionalEffect; } });
var VariantGroupLevelQuestions_1 = require("./VariantGroupLevelQuestions");
Object.defineProperty(exports, "VariantGroupLevelQuestions", { enumerable: true, get: function () { return VariantGroupLevelQuestions_1.VariantGroupLevelQuestions; } });
var VariantIdentifiers_1 = require("./VariantIdentifiers");
Object.defineProperty(exports, "VariantIdentifiers", { enumerable: true, get: function () { return VariantIdentifiers_1.VariantIdentifiers; } });
var VariantLevelQuestions_1 = require("./VariantLevelQuestions");
Object.defineProperty(exports, "VariantLevelQuestions", { enumerable: true, get: function () { return VariantLevelQuestions_1.VariantLevelQuestions; } });
var Zygosity_1 = require("./Zygosity");
Object.defineProperty(exports, "Zygosity", { enumerable: true, get: function () { return Zygosity_1.Zygosity; } });
//# sourceMappingURL=index.js.map