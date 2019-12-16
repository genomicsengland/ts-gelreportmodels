import { Technology } from "./Technology";
import JSONHelper from "../../utils/JSONHelper";
export declare class ClinicalIndicationTest extends JSONHelper {
  clinicalIndicationTestTypeId: string;
  clinicalIndicationTestTypeCode: string;
  testTypeId: string;
  testTypeName: string;
  technology: Technology;
}
