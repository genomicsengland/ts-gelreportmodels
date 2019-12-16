"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsonfile_1 = __importDefault(require("jsonfile"));
exports.referralFilledPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/referralFilled.json"
);
exports.referralNullPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/referralNull.json"
);
exports.cancerInterpretationRequestFilledPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/cancerInterpretationRequestFilled.json"
);
exports.cancerInterpretationRequestNullPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/cancerInterpretationRequestNull.json"
);
exports.rdInterpretationRequestFilledPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/rdInterpretationRequestFilled.json"
);
exports.rdInterpretationRequestNullPayload = jsonfile_1.default.readFileSync(
  __dirname + "/payload/rdInterpretationRequestNull.json"
);
//# sourceMappingURL=payloads.js.map
