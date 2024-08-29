// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUser from "../entities/app_user";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface BaseAuthUseCases {
    signIn(email: string, password: string): Promise<AppUser>;
    signOut(): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAuthUseCases;