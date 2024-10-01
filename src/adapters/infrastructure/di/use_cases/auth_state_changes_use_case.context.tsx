// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
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

const AuthStateChangesUseCaseContext = createContext<AuthStateChangesUseCaseContextValue>({} as AuthStateChangesUseCaseContextValue);

const AuthStateChangesUseCaseProvider: FC<AuthStateChangesUseCaseProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const authStateChangesContextValue: AuthStateChangesUseCaseContextValue = { authStateChangesUseCase: new AuthStateChangesUseCase(authService) };

  return <AuthStateChangesUseCaseContext.Provider value={authStateChangesContextValue}>{children}</AuthStateChangesUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthStateChangesUseCaseContext, AuthStateChangesUseCaseProvider };
