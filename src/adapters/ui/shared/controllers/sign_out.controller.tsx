// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { SignOutState } from "../states/sign_out.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type SignOutAction = { type: "SET_MODAL_VISIBLE"; isVisible: boolean } | { type: "SET_SIGNING_OUT"; isLoading: boolean };

const SignOutController = (state: SignOutState, action: SignOutAction): SignOutState => {
  switch (action.type) {
    case "SET_SIGNING_OUT": {
      return {
        ...state,
        isSigningOut: action.isLoading,
      };
    }
    case "SET_MODAL_VISIBLE": {
      return {
        ...state,
        isSignOutModalVisible: action.isVisible,
      };
    }

    default:
      throw new Error("Invalid SignOutAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { SignOutAction };

export { SignOutController };
