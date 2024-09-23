// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUserViewModel from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AuthState {
  error: string | null;
  loading: boolean;
  user: AppUserViewModel | null;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AuthState };
