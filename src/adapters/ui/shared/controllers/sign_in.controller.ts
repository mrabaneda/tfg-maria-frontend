// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { SignInState } from "../states/sign_in.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type SignInAction =
  | { type: "SET_EMAIL"; userEmail: string }
  | { type: "SET_PASSWORD"; userPassword: string }
  | { type: "SIGN_IN_ERROR"; error?: string }
  | { type: "SIGNING_IN" };

const SignInController = (state: SignInState, action: SignInAction): SignInState => {
  switch (action.type) {
    case "SET_EMAIL": {
      return {
        ...state,
        email: action.userEmail,
        signInError: action.userEmail.trim().length === 0 ? "Rellene este campo" : undefined,
      };
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        email: action.userPassword,
        signInError: action.userPassword.trim().length === 0 ? "Rellene este campo" : undefined,
      };
    }
    case "SIGN_IN_ERROR": {
      return {
        ...state,
        signInError: action.error,
        signingIn: false,
      };
    }
    case "SIGNING_IN": {
      return {
        ...state,
        signingIn: true,
        signInError: undefined,
      };
    }
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { SignInAction };

export { SignInController };
