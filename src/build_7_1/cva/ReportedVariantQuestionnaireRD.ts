import { JsonObject, JsonProperty } from "json2typescript";
import { VariantCoordinates } from "../reports";
import { ReportEventQuestionnaireRD } from "./ReportEventQuestionnaireRD";

@JsonObject
export class ReportedVariantQuestionnaireRD {
    @JsonProperty('variantCoordinates', VariantCoordinates)
    variantCoordinates: VariantCoordinates = new VariantCoordinates;

    @JsonProperty('reportEvent', ReportEventQuestionnaireRD)
    reportEvent: ReportEventQuestionnaireRD = new ReportEventQuestionnaireRD;
};
