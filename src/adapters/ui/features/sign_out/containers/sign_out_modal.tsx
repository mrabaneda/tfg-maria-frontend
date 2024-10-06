// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { useSignOut } from "../hooks/sign_out.hook";
import Modal from "../../../shared/components/dialog/modal";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignOutModal: FC = () => {
  const {
    signOutState: { isSignOutModalVisible, isSigningOut },
    closeSignOutModal,
    handleSignOut,
  } = useSignOut();

  return (
    <Modal
      title={"Cerrar sesión"}
      visible={isSignOutModalVisible}
      body={"¿Está seguro/a de que quiere cerrar sesión?"}
      confirmButtonText="Sí, cerrar sesión"
      confirmButtonColor="bg-[#DD0000]"
      isLoading={isSigningOut}
      setVisible={closeSignOutModal}
      onSubmit={handleSignOut}
    />
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignOutModal;
