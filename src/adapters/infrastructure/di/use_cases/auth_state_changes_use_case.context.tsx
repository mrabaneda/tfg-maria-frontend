// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React from "react";
import { useContext } from "react";
import AuthStateChanges from "@/src/application/use_cases/sign_in.use_case";
import { useAuthServiceContext } from "../services/auth_service.context";
import { AuthStateChangesUseCase } from "@/src/application/use_cases/auth_state_changes.use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthStateChangesUseCaseContextValue {
  authStateChangesUseCase: AuthStateChangesUseCase;
}

interface AuthStateChangesUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuthStateChangesUseCaseContext = () => useContext(AuthStateChangesUseCaseContext);

const AuthStateChangesUseCaseContext = React.createContext<AuthStateChangesUseCaseContextValue>({} as AuthStateChangesUseCaseContextValue);

const AuthStateChangesUseCaseProvider: React.FC<AuthStateChangesUseCaseProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const authStateChangesContextValue: AuthStateChangesUseCaseContextValue = { authStateChangesUseCase: new AuthStateChangesUseCase(authService) };

  return <AuthStateChangesUseCaseContext.Provider value={authStateChangesContextValue}>{children}</AuthStateChangesUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthStateChangesUseCaseContext, AuthStateChangesUseCaseProvider };
