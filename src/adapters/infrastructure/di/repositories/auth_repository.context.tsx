// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React from "react";
import { useContext } from "react";
import BaseAuthRepository from "@/src/core/ports/repositories/auth_repository.abstract";
import FirebaseAuthRepository from "../../frameworks/firebase/repositories/firebase_auth_repository";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthRepositoryContextValue {
  authRepository: BaseAuthRepository;
}

interface AuthRepositoryProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuthRepositoryContext = () => useContext(AuthRepositoryContext);

const AuthRepositoryContext = React.createContext<AuthRepositoryContextValue>({} as AuthRepositoryContextValue);

const AuthRepositoryProvider: React.FC<AuthRepositoryProviderProps> = ({ children }) => {
  const AuthRepositoryContextValue: AuthRepositoryContextValue = { authRepository: new FirebaseAuthRepository() };

  return <AuthRepositoryContext.Provider value={AuthRepositoryContextValue}>{children}</AuthRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthRepositoryContext, AuthRepositoryProvider };
