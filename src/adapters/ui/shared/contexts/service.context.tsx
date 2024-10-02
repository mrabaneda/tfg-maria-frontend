// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { ReactNode, FC } from "react";
import { AuthServiceProvider } from "@/src/adapters/infrastructure/di/services/auth_service.context";

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
  return <AuthServiceProvider>{children}</AuthServiceProvider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { ServiceContextProvider };
