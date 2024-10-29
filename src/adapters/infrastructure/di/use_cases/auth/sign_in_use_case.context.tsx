// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAuthServiceContext } from "../../services/auth_service.context";
import { SignInUseCase } from "@/src/core/use_cases/auth/sign_in.use_case";

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

  const signInUseCaseContextValue: SignInUseCaseContextValue = { signInUseCase: new SignInUseCase(authService) };

  return <SignInUseCaseContext.Provider value={signInUseCaseContextValue}>{children}</SignInUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignInUseCaseContext, SignInUseCaseProvider };
