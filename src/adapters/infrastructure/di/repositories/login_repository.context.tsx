// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { BaseLoginRepository } from "@/src/core/domain/ports/repositories/login.repository";
import { useAuthServiceContext } from "../services/auth_service.context";
import { HttpLoginRepository } from "../../frameworks/http/repositories/http_login.repository";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface LoginRepositoryContextValue {
  loginRepository: BaseLoginRepository;
}

interface LoginRepositoryProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useLoginRepositoryContext = () => useContext(LoginRepositoryContext);

const LoginRepositoryContext = createContext<LoginRepositoryContextValue>({} as LoginRepositoryContextValue);

const LoginRepositoryProvider: FC<LoginRepositoryProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const loginRepositoryContextValue: LoginRepositoryContextValue = {
    loginRepository: new HttpLoginRepository(authService),
  };

  return <LoginRepositoryContext.Provider value={loginRepositoryContextValue}>{children}</LoginRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useLoginRepositoryContext, LoginRepositoryProvider };
