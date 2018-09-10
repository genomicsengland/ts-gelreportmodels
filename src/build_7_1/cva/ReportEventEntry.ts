import { JsonObject, JsonProperty } from "json2typescript";
import { ReportEvent } from "../reports";
import { ReportEventQuestionnaireRD } from "./ReportEventQuestionnaireRD";
import { ReportEventQuestionnaireCancer } from "./ReportEventQuestionnaireCancer";
import { Comment } from './Comment';
import { ObservedVariant } from './ObservedVariant';
import { Property } from "../biodata";
import JSONHelper from "../../utils/JSONHelper";

@JsonObject
export class ReportEventEntry extends JSONHelper {
    @JsonProperty('reportModelVersion', String)
    reportModelVersion: string = '';

    @JsonProperty('id', String)
    id: string = '';

    @JsonProperty('version', Number)
    version: number = 0;  // int 

    @JsonProperty('latest', Boolean, true)
    latest?: boolean = undefined;

    @JsonProperty('caseId', String, true)
    caseId?: string = undefined;

    @JsonProperty('caseVersion', Number, true)
    caseVersion?: number = undefined  // int

    @JsonProperty('groupId', String)
    groupId: string = '';

    @JsonProperty('cohortId', String)
    cohortId: string = '';

    @JsonProperty('date', String)
    date: string = '';

    @JsonProperty('author', String)
    author: string = '';

    @JsonProperty('authorVersion', String, true)
    authorVersion?: string = undefined;

    @JsonProperty('type', String)
    type: string = '';   // ReportEventType

    @JsonProperty('program', String)
    program: string = ''; // Program

    @JsonProperty('validated', Boolean)
    validated: boolean = false;

    @JsonProperty('workspace', [String])
    workspace: Array<string> = [];

    @JsonProperty('reportEvent', ReportEvent, true)
    reportEvent?: ReportEvent = undefined;

    @JsonProperty('reportEventQuestionnaire', ReportEventQuestionnaireRD)
    reportEventQuestionnaire: ReportEventQuestionnaireRD = new ReportEventQuestionnaireRD;

    @JsonProperty('reportEventQuestionnaireCancer', ReportEventQuestionnaireCancer)
    reportEventQuestionnaireCancer: ReportEventQuestionnaireCancer = new ReportEventQuestionnaireCancer;

    @JsonProperty('observedVariants', [ObservedVariant])
    observedVariants: Array<ObservedVariant> = [];

    @JsonProperty('comments', [Comment])
    comments: Array<Comment> = [];

    @JsonProperty('additionalProperties', [Property])
    additionalProperties: Array<Property> = []; 
};
