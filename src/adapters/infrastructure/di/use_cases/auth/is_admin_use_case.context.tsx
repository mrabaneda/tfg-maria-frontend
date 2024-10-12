// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { useAuthServiceContext } from "../../services/auth_service.context";
import { IsAdminUseCase } from "@/src/core/use_cases/auth/is_admin.use_case";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface IsAdminUseCaseContextValue {
  isAdminUseCase: IsAdminUseCase;
}

interface IsAdminUseCaseProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useIsAdminUseCaseContext = () => useContext(IsAdminUseCaseContext);

const IsAdminUseCaseContext = createContext<IsAdminUseCaseContextValue>({} as IsAdminUseCaseContextValue);

const IsAdminUseCaseProvider: FC<IsAdminUseCaseProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const signOutUseCaseContextValue: IsAdminUseCaseContextValue = { isAdminUseCase: new IsAdminUseCase(authService) };

  return <IsAdminUseCaseContext.Provider value={signOutUseCaseContextValue}>{children}</IsAdminUseCaseContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useIsAdminUseCaseContext, IsAdminUseCaseProvider };
