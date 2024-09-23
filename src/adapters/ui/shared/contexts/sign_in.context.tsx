// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use-client";

import React, { useContext, useReducer } from "react";
import { SignInState } from "../states/sign_in.state";
import { SignInController } from "../controllers/sign_in.controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface SignInValue {
  signInState: SignInState;
  setUserEmail: (userEmail: string) => void;
  setUserPassWord: (userPassword: string) => void;
  setSignInError: (error?: string) => void;
  setSigningIn: () => void;
}

interface SignInProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignInContext = React.createContext<SignInValue>({} as SignInValue);

const SignInContextProvider: React.FC<SignInProps> = ({ children }) => {
  const [singInState, dispatchSignIn] = useReducer(SignInController, {
    email: null,
    password: null,
    signingIn: false,
    signInError: undefined,
  } satisfies SignInState);

  const signInValue: SignInValue = {
    signInState: singInState,
    setUserEmail: (userEmail) => dispatchSignIn({ type: "SET_EMAIL", userEmail: userEmail }),
    setUserPassWord: (userPassword) => dispatchSignIn({ type: "SET_PASSWORD", userPassword }),
    setSignInError: (error) => dispatchSignIn({ type: "SIGN_IN_ERROR", error: error }),
    setSigningIn: () => dispatchSignIn({ type: "SIGNING_IN" }),
  };

  return <SignInContext.Provider value={signInValue}> {children}</SignInContext.Provider>;
};

const useSignInContext = () => {
  const context = useContext(SignInContext);

  if (!context) {
    throw new Error("useSignInContext necesita ser usada dentro de SignInProvider");
  }

  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { SignInContextProvider, useSignInContext, SignInContext };
