"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React from "react";
import { AuthContextProvider } from "./auth.context";
import { AuthConsumer } from "../containers/auth.consumer";
import { AuthUseCasesProvider } from "@/src/infrastructure/di/use_cases/auth_use_cases.context";
import { AuthRepositoryProvider } from "@/src/infrastructure/di/repositories/auth_repository.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AuthContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AppContext: React.FC<AuthContextProps> = ({ children }) => {
  return (
    <AuthRepositoryProvider>
      <AuthUseCasesProvider>
        <AuthContextProvider>
          <AuthConsumer>{children}</AuthConsumer>
        </AuthContextProvider>
      </AuthUseCasesProvider>
    </AuthRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContext };