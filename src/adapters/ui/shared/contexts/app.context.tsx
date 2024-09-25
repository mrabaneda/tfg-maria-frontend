// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import React from "react";
import { AuthContextProvider } from "./auth.context";
import { ServiceContextProvider } from "./service.context";
import { AuthConsumer } from "../containers/auth.consumer";
import { RepositoryContextProvider } from "./repository.context";
import { SignInUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";
import { SignInContextProvider } from "./sign_in.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AppContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  return (
    <RepositoryContextProvider>
      <ServiceContextProvider>
        <SignInUseCaseProvider>
          <AuthContextProvider>
            <SignInContextProvider>
              <AuthConsumer>{children}</AuthConsumer>
            </SignInContextProvider>
          </AuthContextProvider>
        </SignInUseCaseProvider>
      </ServiceContextProvider>
    </RepositoryContextProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContext };
