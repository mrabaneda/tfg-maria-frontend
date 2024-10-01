// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { useAuthContext } from "../contexts/auth.context";
import { ErrorScreen } from "../components/error_screen";
import { LoadingScreen } from "../components/loading_screen";
import { AuthStateEnum } from "../states/auth.state";
import SignIn from "../../features/sign_in/sign_in";
import { Sidebar } from "./sidebar";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface AuthConsumerProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AuthConsumer: React.FC<AuthConsumerProps> = ({ children }) => {
  const { authState } = useAuthContext();

  return authState.status === AuthStateEnum.authenticating ? (
    <LoadingScreen />
  ) : authState.status === AuthStateEnum.authenticated ? (
    <div className="flex h-screen">
      <Sidebar />
      <main className="bg-white p-4 flex-grow">{children}</main>
    </div>
  ) : authState.status === AuthStateEnum.anonymous ? (
    <SignIn></SignIn>
  ) : (
    <ErrorScreen />
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthConsumer };
