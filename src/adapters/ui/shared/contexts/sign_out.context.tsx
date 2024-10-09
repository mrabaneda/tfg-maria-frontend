// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, Reducer, useContext, useReducer } from "react";
import { SignOutState } from "../states/sign_out.state";
import { SignOutController } from "../controllers/sign_out.controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface SignOutValue {
  signOutState: SignOutState;
  setSignOutModalVisible: (isvisible: boolean) => void;
  setSignOutLoading: (isLoading: boolean) => void;
}

interface SignOutProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignOutContext = createContext<SignOutValue>({} as SignOutValue);

const SignOutContextProvider: FC<SignOutProps> = ({ children }) => {
  const [signOutState, dispatch] = useReducer(SignOutController, {
    isSigningOut: false,
    isSignOutModalVisible: false,
  } satisfies SignOutState);

  const SignOutValue: SignOutValue = {
    signOutState: signOutState,
    setSignOutModalVisible: (isvisible: boolean) => dispatch({ type: "SET_MODAL_VISIBLE", isVisible: isvisible }),
    setSignOutLoading: (isLoading: boolean) => dispatch({ type: "SET_SIGNING_OUT", isLoading: isLoading }),
  };

  return <SignOutContext.Provider value={SignOutValue}>{children}</SignOutContext.Provider>;
};

const useSignOutContext = () => {
  const context = useContext(SignOutContext);

  if (!context) {
    throw new Error("useSignOutContext debe ser usada dentro de SignOutProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { SignOutContextProvider, useSignOutContext, SignOutContext };
