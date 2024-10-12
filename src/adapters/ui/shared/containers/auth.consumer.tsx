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
import { useSignOut } from "../hooks/sign_out.hook";
import Modal from "../components/dialog/modal";
import { useSignOutContext } from "../contexts/sign_out.context";

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

  const { signOutState } = useSignOutContext();
  
  const { handleSignOut, closeSignOutModal } = useSignOut();

  return authState.status === AuthStateEnum.authenticating ? (
    <LoadingScreen />
  ) : authState.status === AuthStateEnum.authenticated ? (
    <div className="flex">
      <Sidebar />
      {signOutState.isSignOutModalVisible && (
        <Modal
          title={"Cerrar sesión"}
          visible={signOutState.isSignOutModalVisible}
          body={"¿Está seguro/a de que quiere cerrar sesión?"}
          confirmButtonText="Sí, cerrar sesión"
          confirmButtonColor="bg-red-600 hover:bg-red-700"
          isLoading={signOutState.isSigningOut}
          setVisible={closeSignOutModal}
          onSubmit={handleSignOut}
        />
      )}
      <main className="bg-white p-4 flex-grow">{children}</main>
    </div>
  ) : authState.status === AuthStateEnum.anonymous ? (
    <SignIn />
  ) : (
    <ErrorScreen />
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthConsumer };
