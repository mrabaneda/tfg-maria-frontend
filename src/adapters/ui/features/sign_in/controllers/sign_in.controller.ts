// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { SignInState } from "../states/sign_in.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type SignInAction = { type: "SET_EMAIL"; email: string } | { type: "SET_PASSWORD"; password: string } | { type: "SET_LOADING"; isLoading: boolean };

const SignInController = (state: SignInState, action: SignInAction): SignInState => {
  switch (action.type) {
    case "SET_EMAIL": {
      return {
        ...state,
        email: action.email,
      };
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        password: action.password,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { SignInAction };

export { SignInController };
