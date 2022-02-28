/** It is a representation of the zygosity */
export declare enum Zygosity {
    /** reference_homozygous: 0/0, 0|0 */
    reference_homozygous = "reference_homozygous",
    /** heterozygous: 0/1, 1/0, 1|0, 0|1 */
    heterozygous = "heterozygous",
    /** alternate_homozygous: 1/1, 1|1 */
    alternate_homozygous = "alternate_homozygous",
    /** missing: ./., .|. */
    missing = "missing",
    /** half_missing_reference: ./0, 0/., 0|., .|0 */
    half_missing_reference = "half_missing_reference",
    /** half_missing_alternate: ./1, 1/., 1|., .|1 */
    half_missing_alternate = "half_missing_alternate",
    /** alternate_hemizigous: 1 */
    alternate_hemizigous = "alternate_hemizigous",
    /** reference_hemizigous: 0 */
    reference_hemizigous = "reference_hemizigous",
    /** unk: Anything unexpected */
    unk = "unk",
    na = "na"
}
