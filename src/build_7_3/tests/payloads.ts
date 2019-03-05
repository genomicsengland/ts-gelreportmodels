import jf from 'jsonfile';

export const referralFilledPayload = jf.readFileSync(__dirname +  '/payload/referralFilled.json');
export const referralNullPayload = jf.readFileSync(__dirname +  '/payload/referralNull.json');

export const cancerInterpretationRequestFilledPayload = jf.readFileSync(__dirname +  '/payload/cancerInterpretationRequestFilled.json');
export const cancerInterpretationRequestNullPayload = jf.readFileSync(__dirname +  '/payload/cancerInterpretationRequestNull.json');

export const rdInterpretationRequestFilledPayload = jf.readFileSync(__dirname +  '/payload/rdInterpretationRequestFilled.json');
export const rdInterpretationRequestNullPayload = jf.readFileSync(__dirname +  '/payload/rdInterpretationRequestNull.json');