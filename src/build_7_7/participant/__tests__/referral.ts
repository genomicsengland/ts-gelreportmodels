import { Referral } from "../Referral";
import {
  referralFilledPayload,
  referralNullPayload
} from "../../tests/payloads";

test("Parse referral payload (null filled)", () => {
  Referral.fromJSON(referralFilledPayload);
});

test("Parse referral payload (null)", () => {
  Referral.fromJSON(referralNullPayload);
});
