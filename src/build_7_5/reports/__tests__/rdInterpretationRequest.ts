import { InterpretationRequestsRD } from "../InterpretationRequestsRD";
import {
  rdInterpretationRequestFilledPayload,
  rdInterpretationRequestNullPayload
} from "../../tests/payloads";

test("Parse CancerInterpretationRequest payload (null filled)", () => {
  InterpretationRequestsRD.fromJSON(rdInterpretationRequestFilledPayload);
});

test("Parse CancerInterpretationRequest payload (null)", () => {
  InterpretationRequestsRD.fromJSON(rdInterpretationRequestNullPayload);
});
