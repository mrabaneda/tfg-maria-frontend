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
import { SignOutUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_out_use_case.context";
import { SignOutContextProvider } from "./sign_out.context";

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
          <SignOutUseCaseProvider>
            <AuthContextProvider>
              <SignOutContextProvider>
                <AuthConsumer>{children}</AuthConsumer>
              </SignOutContextProvider>
            </AuthContextProvider>
          </SignOutUseCaseProvider>
        </AuthStateChangesUseCaseProvider>
      </ServiceContextProvider>
    </RepositoryContextProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContext };
