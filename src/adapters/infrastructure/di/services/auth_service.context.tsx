// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React from "react";
import { useContext } from "react";
import BaseAuthService from "@/src/core/ports/services/auth.service";
import { AuthService } from "@/src/application/services/auth.service";
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

const AuthServiceContext = React.createContext<AuthServiceContextValue>({} as AuthServiceContextValue);

const AuthServiceProvider: React.FC<AuthServiceProviderProps> = ({ children }) => {
  const { authRepository } = useAuthRepositoryContext();

  const AuthServiceContextValue: AuthServiceContextValue = { authService: new AuthService(authRepository) };

  return <AuthServiceContext.Provider value={AuthServiceContextValue}>{children}</AuthServiceContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthServiceContext, AuthServiceProvider };
