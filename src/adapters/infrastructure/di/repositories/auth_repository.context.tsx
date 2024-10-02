// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { BaseAuthRepository } from "@/src/core/ports/repositories/auth_repository.abstract";
import { FirebaseAuthRepository } from "../../frameworks/firebase/repositories/firebase_auth_repository";

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

const AuthRepositoryContext = createContext<AuthRepositoryContextValue>({} as AuthRepositoryContextValue);

const AuthRepositoryProvider: FC<AuthRepositoryProviderProps> = ({ children }) => {
  const AuthRepositoryContextValue: AuthRepositoryContextValue = { authRepository: new FirebaseAuthRepository() };

  return <AuthRepositoryContext.Provider value={AuthRepositoryContextValue}>{children}</AuthRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthRepositoryContext, AuthRepositoryProvider };
