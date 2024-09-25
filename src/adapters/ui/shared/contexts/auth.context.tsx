// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { AuthState } from "../states/auth.state";
import React, { useContext, useReducer } from "react";
import AppUserViewModel from "../models/app_user.model";
import { AuthController } from "../controllers/auth.controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthValue {
  authState: AuthState;
  setAuthSuccess: (appUser: AppUserViewModel) => void;
  setAuthError: (error: string) => void;
  setSignOut: () => void;
}

interface AuthProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AuthContext = React.createContext<AuthValue>({} as AuthValue);

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(AuthController, {
    user: null,
    error: null,
    loading: false,
  } satisfies AuthState);

  const authValue: AuthValue = {
    authState: authState,
    setAuthSuccess: (appUser) => dispatchAuth({ type: "AUTH_SUCCESS", appUser: appUser }),
    setAuthError: (error) => dispatchAuth({ type: "AUTH_ERROR", error: error }),
    setSignOut: () => dispatchAuth({ type: "SIGN_OUT" }),
  };

  return <AuthContext.Provider value={authValue}> {children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext necesita ser usada dentro de AuthContextProvider");
  }

  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthContextProvider, AuthContext, useAuthContext };
