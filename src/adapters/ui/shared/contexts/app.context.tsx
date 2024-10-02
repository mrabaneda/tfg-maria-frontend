// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { AuthContextProvider } from "./auth.context";
import { ServiceContextProvider } from "./service.context";
import { AuthConsumer } from "../containers/auth.consumer";
import { RepositoryContextProvider } from "./repository.context";
import { AuthStateChangesUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/auth_state_changes_use_case.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AppContextProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AppContext: FC<AppContextProps> = ({ children }) => {
  return (
    <RepositoryContextProvider>
      <ServiceContextProvider>
        <AuthStateChangesUseCaseProvider>
          <AuthContextProvider>
            <AuthConsumer>{children}</AuthConsumer>
          </AuthContextProvider>
        </AuthStateChangesUseCaseProvider>
      </ServiceContextProvider>
    </RepositoryContextProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContext };
