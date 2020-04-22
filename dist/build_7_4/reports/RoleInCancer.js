"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The role of a given genomic feature in cancer
 */
var RoleInCancer;
(function (RoleInCancer) {
    /**
     * `NCIT_C16936`: oncogene. A gene that is a mutated (changed) form of a
     * gene involved in normal cell growth. Oncogenes may cause the growth of
     * cancer cells. Mutations in genes that become oncogenes can be inherited
     * or caused by being exposed to substances in the environment that cause
     * cancer. http://purl.obolibrary.org/obo/NCIT_C16936
     */
    RoleInCancer["oncogene"] = "oncogene";
    /**
     * `NCIT_C17362`: tumor_suppressor_gene. A type of gene that makes a
     * protein called a tumor suppressor protein that helps control cell
     * growth. Mutations (changes in DNA) in antioncogenes may lead to cancer.
     * http://purl.obolibrary.org/obo/NCIT_C17362
     */
    RoleInCancer["tumor_suppressor_gene"] = "tumor_suppressor_gene";
    RoleInCancer["both"] = "both";
})(RoleInCancer = exports.RoleInCancer || (exports.RoleInCancer = {}));
//# sourceMappingURL=RoleInCancer.js.map