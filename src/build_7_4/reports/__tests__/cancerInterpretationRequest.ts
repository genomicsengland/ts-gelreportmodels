import { CancerInterpretationRequest } from "../CancerInterpretationRequest";
import {
  cancerInterpretationRequestFilledPayload,
  cancerInterpretationRequestNullPayload
} from "../../tests/payloads";

test("Parse CancerInterpretationRequest payload (null filled)", () => {
  CancerInterpretationRequest.fromJSON(
    cancerInterpretationRequestFilledPayload
  );
});

test("Parse CancerInterpretationRequest payload (null)", () => {
  CancerInterpretationRequest.fromJSON(cancerInterpretationRequestNullPayload);
});
