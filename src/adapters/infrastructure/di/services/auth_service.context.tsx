// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC } from "react";
import { useContext } from "react";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { AuthService } from "@/src/core/application/services/auth.service";
import { useAuthRepositoryContext } from "../repositories/auth_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthServiceContextValue {
  authService: BaseAuthService;
}

interface AuthServiceProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuthServiceContext = () => useContext(AuthServiceContext);

const AuthServiceContext = createContext<AuthServiceContextValue>({} as AuthServiceContextValue);

const AuthServiceProvider: FC<AuthServiceProviderProps> = ({ children }) => {
  const { authRepository } = useAuthRepositoryContext();

  const authServiceContextValue: AuthServiceContextValue = { authService: new AuthService(authRepository) };

  return <AuthServiceContext.Provider value={authServiceContextValue}>{children}</AuthServiceContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthServiceContext, AuthServiceProvider };
