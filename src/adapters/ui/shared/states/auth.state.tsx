// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserViewModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

enum AuthStateEnum {
  authenticated = "Authenticated",
  anonymous = "Anonymous",
  authenticating = "Authenticating",
}

type AuthState =
  | { status: AuthStateEnum.authenticated; appUser: AppUserViewModel }
  | { status: AuthStateEnum.anonymous }
  | { status: AuthStateEnum.authenticating };

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthStateEnum };

export type { AuthState };
