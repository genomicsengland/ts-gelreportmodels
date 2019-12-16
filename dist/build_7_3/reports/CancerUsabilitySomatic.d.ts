/**
 * Variant usability for somatic variants
 */
export declare enum CancerUsabilitySomatic {
  /**
   * Already actioned (i.e. prior to receiving this WGA)
   */
  already_actioned = "already_actioned",
  /**
   * actioned as a result of receiving this WGA
   */
  actioned_result_of_this_wga = "actioned_result_of_this_wga",
  /**
   * not yet actioned, but potentially actionable in the future
   */
  not_yet_actioned = "not_yet_actioned"
}
