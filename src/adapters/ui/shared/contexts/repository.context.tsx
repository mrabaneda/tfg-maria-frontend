// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { ReactNode, FC } from "react";
import { AuthRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/auth_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface RepositoryContextProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const RepositoryContextProvider: FC<RepositoryContextProps> = ({ children }) => {
  return <AuthRepositoryProvider>{children}</AuthRepositoryProvider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { RepositoryContextProvider };
