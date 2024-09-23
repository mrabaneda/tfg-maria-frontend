// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use-client";

import React from "react";
import { AuthRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/auth_repository.context";
import { RepositoryContextProvider } from "./repository.context";
import { ServiceContextProvider } from "./service.context";
import { SignInUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AppContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  return (
    <RepositoryContextProvider>
        <ServiceContextProvider>
            <SignInUseCaseProvider>
                
            </SignInUseCaseProvider>
        </ServiceContextProvider>
    </RepositoryContextProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContextProvider };
