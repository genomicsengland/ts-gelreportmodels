"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InterpretationRequestsRD_1 = require("../InterpretationRequestsRD");
var payloads_1 = require("../../tests/payloads");
test("Parse CancerInterpretationRequest payload (null filled)", function() {
  InterpretationRequestsRD_1.InterpretationRequestsRD.fromJSON(
    payloads_1.rdInterpretationRequestFilledPayload
  );
});
test("Parse CancerInterpretationRequest payload (null)", function() {
  InterpretationRequestsRD_1.InterpretationRequestsRD.fromJSON(
    payloads_1.rdInterpretationRequestNullPayload
  );
});
//# sourceMappingURL=rdInterpretationRequest.js.map
