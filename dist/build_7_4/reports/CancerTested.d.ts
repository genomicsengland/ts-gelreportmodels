/**
 * Was the variant validated with an orthogonal technology?
 */
export declare enum CancerTested {
    /**
     * No: not indicated for patient care at this time
     */
    not_indicated_for_patient_care = "not_indicated_for_patient_care",
    /**
     * No: no orthologous test available
     */
    no_orthologous_test_available = "no_orthologous_test_available",
    /**
     * Yes: test performed prior to receiving WGA (eg using standard-of-care
     * assay such as panel testing, or sanger sequencing)
     */
    test_performed_prior_to_wga = "test_performed_prior_to_wga",
    /**
     * Yes: technical validation performed/planned following receiving this WGA
     */
    technical_validation_following_wga = "technical_validation_following_wga"
}
