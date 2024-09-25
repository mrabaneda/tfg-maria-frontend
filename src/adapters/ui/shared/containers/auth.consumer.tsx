// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { useContext } from "react";
import { LoadingScreen } from "../components/loading_screen";
import { ErrorScreen } from "../components/error_screen";
import { AuthContext } from "../contexts/auth.context";

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
  const { authState } = useContext(AuthContext);

  return authState.loading ? (
    <LoadingScreen />
  ) : authState.error ? (
    <ErrorScreen message={authState.error} title="Error" />
  ) : (
    <>
      <main className="bg-white p-4">{children}</main>
    </>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthConsumer };
