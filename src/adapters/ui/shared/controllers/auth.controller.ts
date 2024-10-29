// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AuthState, AuthStateEnum } from "../states/auth.state";
import { AppUserViewModel } from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type AuthAction = { type: "Authenticated"; appUser: AppUserViewModel } | { type: "Authenticating" } | { type: "Anonymous" };

const AuthController = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "Authenticated":
      return { status: AuthStateEnum.authenticated, appUser: action.appUser };
    case "Authenticating":
      return { status: AuthStateEnum.authenticating };
    case "Anonymous":
      return { status: AuthStateEnum.anonymous };
    default:
      return state;
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AuthAction };

export { AuthController };
