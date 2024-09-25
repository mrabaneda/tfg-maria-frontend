// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AuthState } from "../states/auth.state";
import AppUserViewModel from "../models/app_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type AuthAction = { type: "AUTH_SUCCESS"; appUser: AppUserViewModel } | { type: "AUTH_ERROR"; error: string } | { type: "SIGN_OUT" };

const AuthController = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.appUser,
        error: null,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AuthAction };

export { AuthController };
