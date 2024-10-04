// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import SignInUseCase from "@/src/core/application/use_cases/sign_in.use_case";
import { useAuthServiceContext } from "../services/auth_service.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface SignInUseCaseContextValue {
  signInUseCase: SignInUseCase;
}

interface SignInUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignInUseCaseContext = () => useContext(SignInUseCaseContext);

const SignInUseCaseContext = createContext<SignInUseCaseContextValue>({} as SignInUseCaseContextValue);

const SignInUseCaseProvider: FC<SignInUseCaseProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const SignInUseCaseContextValue: SignInUseCaseContextValue = { signInUseCase: new SignInUseCase(authService) };

  return <SignInUseCaseContext.Provider value={SignInUseCaseContextValue}>{children}</SignInUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignInUseCaseContext, SignInUseCaseProvider };
