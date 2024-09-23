// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use-client";

import React from "react";
import { AuthRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/auth_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface RepositoryContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const RepositoryContextProvider: React.FC<RepositoryContextProps> = ({ children }) => {
  return <AuthRepositoryProvider>{children}</AuthRepositoryProvider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { RepositoryContextProvider };
