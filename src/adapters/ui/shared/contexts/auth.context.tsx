// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React, { useContext } from "react";
import { AuthState } from "../states/auth.state";
import { useAuth } from "../hooks/use_auth.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthContextValue {
  authState: AuthState;
}

interface AuthContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AuthContext = React.createContext<AuthContextValue>({} as AuthContextValue);

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const { authState } = useAuth();

  const authContextValue: AuthContextValue = {
    authState: authState,
  };

  return <AuthContext.Provider value={authContextValue}> {children}</AuthContext.Provider>;
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
