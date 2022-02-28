import { User } from "./User";
export declare class UserComment {
    /**
     * Comment text
     */
    comment?: string;
    /**
     * User who created comment
     */
    user?: User;
    /**
     * Date and time comment was created (ISO 8601 datetime with seconds and timezone e.g. 2020-11-23T15:52:36+00:00)
     */
    timestamp?: string;
}
