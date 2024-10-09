// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { ReactNode, FC } from "react";
import { AuthRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/auth_repository.context";
import { AdminUserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/admin_user_repository.context";

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
  return (
    <AdminUserRepositoryProvider>
      <AuthRepositoryProvider>{children}</AuthRepositoryProvider>
    </AdminUserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { RepositoryContextProvider };
