// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AuthState {
    error: string | null;
    loading: boolean;
    user: AppUserModel | null;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AuthState };