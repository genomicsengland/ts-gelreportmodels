"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Was the variant validated with an orthogonal technology?
 */
var CancerTested;
(function (CancerTested) {
    /**
     * No: not indicated for patient care at this time
     */
    CancerTested["not_indicated_for_patient_care"] = "not_indicated_for_patient_care";
    /**
     * No: no orthologous test available
     */
    CancerTested["no_orthologous_test_available"] = "no_orthologous_test_available";
    /**
     * Yes: test performed prior to receiving WGA (eg using standard-of-care
     * assay such as panel testing, or sanger sequencing)
     */
    CancerTested["test_performed_prior_to_wga"] = "test_performed_prior_to_wga";
    /**
     * Yes: technical validation performed/planned following receiving this WGA
     */
    CancerTested["technical_validation_following_wga"] = "technical_validation_following_wga";
})(CancerTested = exports.CancerTested || (exports.CancerTested = {}));
;
//# sourceMappingURL=CancerTested.js.map