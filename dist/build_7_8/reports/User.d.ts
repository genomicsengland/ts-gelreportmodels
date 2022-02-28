export declare class User {
    /**
     *Azure Active Directory immutable user OID
     */
    userid?: string;
    /**
     * User email address
     */
    email: string;
    /**
     * Username
     */
    username: string;
    role?: string;
    groups?: Array<string>;
}
