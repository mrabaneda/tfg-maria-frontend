// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { ReactNode, FC } from "react";
import { AuthServiceProvider } from "@/src/adapters/infrastructure/di/services/auth_service.context";
import { AdminUserServiceProvider } from "@/src/adapters/infrastructure/di/services/admin_user_service.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ServiceContextProviderProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const ServiceContextProvider: FC<ServiceContextProviderProps> = ({ children }) => {
  return (
    <AdminUserServiceProvider>
      <AuthServiceProvider>{children}</AuthServiceProvider>
    </AdminUserServiceProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { ServiceContextProvider };
