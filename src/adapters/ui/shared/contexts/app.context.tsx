// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { AuthServiceProvider } from "@/src/adapters/infrastructure/di/services/auth_service.context";
import { AuthStateChangesUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/auth/auth_state_changes_use_case.context";
import { SignOutUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/auth/sign_out_use_case.context";
import { IsAdminUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/auth/is_admin_use_case.context";
import { AuthContextProvider } from "./auth.context";
import { AuthConsumer } from "../containers/auth.consumer";
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
    <AuthServiceProvider>
      <AuthStateChangesUseCaseProvider>
        <IsAdminUseCaseProvider>
          <SignOutUseCaseProvider>
            <AuthContextProvider>
              <SignOutContextProvider>
                <AuthConsumer>{children}</AuthConsumer>
              </SignOutContextProvider>
            </AuthContextProvider>
          </SignOutUseCaseProvider>
        </IsAdminUseCaseProvider>
      </AuthStateChangesUseCaseProvider>
    </AuthServiceProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AppContext };
