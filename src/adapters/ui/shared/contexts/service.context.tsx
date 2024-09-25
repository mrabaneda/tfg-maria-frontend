// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React from "react";
import { AuthServiceProvider } from "@/src/adapters/infrastructure/di/services/auth_service.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ServiceContextProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const ServiceContextProvider: React.FC<ServiceContextProviderProps> = ({ children }) => {
  return <AuthServiceProvider>{children}</AuthServiceProvider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { ServiceContextProvider };
