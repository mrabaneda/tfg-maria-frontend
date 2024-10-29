// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { createContext, FC } from "react";
import { useContext } from "react";
import { FirebaseAuthService } from "../../frameworks/firebase/services/firebase_auth.service";

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
  const authServiceContextValue: AuthServiceContextValue = { authService: new FirebaseAuthService() };

  return <AuthServiceContext.Provider value={authServiceContextValue}>{children}</AuthServiceContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuthServiceContext, AuthServiceProvider };
