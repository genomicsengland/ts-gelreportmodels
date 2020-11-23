import { HpoTermModifiers } from "./HpoTermModifiers";
import { JsonObject, JsonProperty } from "json2typescript";

/**
 * This defines an HPO term and its modifiers (possibly multiple). If HPO term
 * presence is unknown we don't have a entry on the list
 */
@JsonObject
export class HpoTerm {
  /**
   * Identifier of the HPO term
   */
  @JsonProperty("term", String)
  term: string = "";

  /**
   * This is whether the term is present in the participant (default is
   * unknown) yes=term is present in participant, no=term is not present
   */
  @JsonProperty("termPresence", String, true)
  termPresence?: string = undefined; // TernaryOption

  /**
   * hpoBuildNumber
   */
  @JsonProperty("termPresence", String, true)
  hpoBuildNumber?: string = undefined;

  /**
   * Modifier associated with the HPO term
   */
  @JsonProperty("modifiers", [HpoTermModifiers], true)
  modifiers?: Array<HpoTermModifiers> = undefined;

  /**
   * Age of onset in months
   */
  @JsonProperty("ageOfOnset", String, true)
  ageOfOnset?: string = undefined; // AgeOfOnset
}
