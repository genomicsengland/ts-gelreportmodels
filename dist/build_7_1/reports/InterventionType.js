"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * For each intervention studied in the clinical study, the general type of
 * intervention
 */
var InterventionType;
(function (InterventionType) {
    /** `drug`: Including placebo */
    InterventionType["drug"] = "drug";
    /** `device`: Including sham */
    InterventionType["device"] = "device";
    /** `procedure`: Surgery */
    InterventionType["procedure"] = "procedure";
    /** `biological`: Vaccine */
    InterventionType["biological"] = "biological";
    /** `radiation` */
    InterventionType["radiation"] = "radiation";
    /** `behavioral`: For example, psychotherapy, lifestyle counselling */
    InterventionType["behavioral"] = "behavioral";
    /** `genetic`: Including gene transfer, stem cell and recombinant DNA */
    InterventionType["genetic"] = "genetic";
    /** `dietary_supplement`: For example, vitamins, minerals */
    InterventionType["dietary_supplement"] = "dietary_supplement";
    /**
     * `combination_product`: Combining a drug and device, a biological
     * product and device; a drug and biological product; or a drug, biological
     * product, and device
     */
    InterventionType["combination_product"] = "combination_product";
    /** `diagnostic_test`: For example, imaging, in-vitro */
    InterventionType["diagnostic_test"] = "diagnostic_test";
    InterventionType["other"] = "other";
})(InterventionType = exports.InterventionType || (exports.InterventionType = {}));
;
//# sourceMappingURL=InterventionType.js.map