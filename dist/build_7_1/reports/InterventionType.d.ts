/**
 * For each intervention studied in the clinical study, the general type of
 * intervention
 */
export declare enum InterventionType {
    /** `drug`: Including placebo */
    drug = "drug",
    /** `device`: Including sham */
    device = "device",
    /** `procedure`: Surgery */
    procedure = "procedure",
    /** `biological`: Vaccine */
    biological = "biological",
    /** `radiation` */
    radiation = "radiation",
    /** `behavioral`: For example, psychotherapy, lifestyle counselling */
    behavioral = "behavioral",
    /** `genetic`: Including gene transfer, stem cell and recombinant DNA */
    genetic = "genetic",
    /** `dietary_supplement`: For example, vitamins, minerals */
    dietary_supplement = "dietary_supplement",
    /**
     * `combination_product`: Combining a drug and device, a biological
     * product and device; a drug and biological product; or a drug, biological
     * product, and device
     */
    combination_product = "combination_product",
    /** `diagnostic_test`: For example, imaging, in-vitro */
    diagnostic_test = "diagnostic_test",
    other = "other"
}
