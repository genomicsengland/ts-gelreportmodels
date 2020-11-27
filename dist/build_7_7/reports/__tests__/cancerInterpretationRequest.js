"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CancerInterpretationRequest_1 = require("../CancerInterpretationRequest");
var payloads_1 = require("../../tests/payloads");
test("Parse CancerInterpretationRequest payload (null filled)", function () {
    CancerInterpretationRequest_1.CancerInterpretationRequest.fromJSON(payloads_1.cancerInterpretationRequestFilledPayload);
});
test("Parse CancerInterpretationRequest payload (null)", function () {
    CancerInterpretationRequest_1.CancerInterpretationRequest.fromJSON(payloads_1.cancerInterpretationRequestNullPayload);
});
//# sourceMappingURL=cancerInterpretationRequest.js.map