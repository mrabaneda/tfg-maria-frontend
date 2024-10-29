// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAuthServiceContext } from "../../services/auth_service.context";
import { SignOutUseCase } from "@/src/core/use_cases/auth/sign_out.use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface SignOutUseCaseContextValue {
  signOutUseCase: SignOutUseCase;
}

interface SignOutUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignOutUseCaseContext = () => useContext(SignOutUseCaseContext);

const SignOutUseCaseContext = createContext<SignOutUseCaseContextValue>({} as SignOutUseCaseContextValue);

const SignOutUseCaseProvider: FC<SignOutUseCaseProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const signOutUseCaseContextValue: SignOutUseCaseContextValue = { signOutUseCase: new SignOutUseCase(authService) };

  return <SignOutUseCaseContext.Provider value={signOutUseCaseContextValue}>{children}</SignOutUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignOutUseCaseContext, SignOutUseCaseProvider };
