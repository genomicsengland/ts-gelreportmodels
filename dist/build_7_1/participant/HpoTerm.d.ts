import { HpoTermModifiers } from "./HpoTermModifiers";
/**
 * This defines an HPO term and its modifiers (possibly multiple). If HPO term
 * presence is unknown we don't have a entry on the list
 */
export declare class HpoTerm {
    /**
     * Identifier of the HPO term
     */
    term: string;
    /**
     * This is whether the term is present in the participant (default is
     * unknown) yes=term is present in participant, no=term is not present
     */
    termPresence?: string;
    /**
     * hpoBuildNumber
     */
    hpoBuildNumber?: string;
    /**
     * Modifier associated with the HPO term
     */
    modifiers?: HpoTermModifiers;
    /**
     * Age of onset in months
     */
    ageOfOnset?: string;
}
