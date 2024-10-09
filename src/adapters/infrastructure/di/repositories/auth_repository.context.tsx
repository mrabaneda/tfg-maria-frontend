// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { BaseAuthRepository } from "@/src/core/domain/ports/repositories/auth_repository";
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
  const authRepositoryContextValue: AuthRepositoryContextValue = { authRepository: new FirebaseAuthRepository() };

  return <AuthRepositoryContext.Provider value={authRepositoryContextValue}>{children}</AuthRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthRepositoryContext, AuthRepositoryProvider };
