"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Referral_1 = require("../Referral");
var payloads_1 = require("../../tests/payloads");
test("Parse referral payload (null filled)", function () {
    Referral_1.Referral.fromJSON(payloads_1.referralFilledPayload);
});
test("Parse referral payload (null)", function () {
    Referral_1.Referral.fromJSON(payloads_1.referralNullPayload);
});
//# sourceMappingURL=referral.js.map