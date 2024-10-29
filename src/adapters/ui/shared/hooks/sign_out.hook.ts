// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useMounted } from "./use_mounted";
import { useSignOutUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/auth/sign_out_use_case.context";
import { useSignOutContext } from "../contexts/sign_out.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignOut = () => {
  const {
    signOutState: { isSigningOut },
    setSignOutLoading,
    setSignOutModalVisible,
  } = useSignOutContext();

  const isMounted = useMounted();

  const { signOutUseCase } = useSignOutUseCaseContext();

  const closeSignOutModal = () => {
    setSignOutModalVisible(false);
    setSignOutLoading(false);
  };

  const openSignOutModal = () => setSignOutModalVisible(true);

  const handleSignOut = async () => {
    try {
      if (isSigningOut) return;
      if (!isMounted()) return;

      if (isMounted()) setSignOutLoading(true);

      await signOutUseCase.execute();

      if (isMounted()) {
        setSignOutLoading(false);
        setSignOutModalVisible(false);
      }
    } catch (error: any) {
      if (isMounted()) setSignOutModalVisible(false);
      alert(`Se ha producido un error inesperado, por favor, inténtelo de nuevo más adelante. ${error.message}`);
    }
  };

  return {
    closeSignOutModal,
    openSignOutModal,
    handleSignOut,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignOut };
