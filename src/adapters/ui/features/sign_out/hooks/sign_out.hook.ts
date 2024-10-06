// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCallback, useReducer } from "react";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { SignOutController } from "../controllers/sign_out.controller";
import { SignOutState } from "../states/sign_out.state";
import { useSignOutUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/sign_out_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignOut = () => {
  const [signOutState, dispatch] = useReducer(SignOutController, {
    isSigningOut: false,
    isSignOutModalVisible: false,
  } satisfies SignOutState);

  const isMounted = useMounted();

  const { signOutUseCase } = useSignOutUseCaseContext();

  const closeSignOutModal = useCallback(() => {
    if (!signOutState.isSignOutModalVisible) return;
    if (signOutState.isSigningOut) return;
    if (isMounted()) {
      dispatch({ type: "SET_SIGNING_OUT", isLoading: false });
      dispatch({ type: "SET_MODAL_VISIBLE", isVisible: false });
    }
  }, [signOutState, isMounted]);

  const openSignOutModal = useCallback(() => {
    console.log(`SIGNOUTSTATE: ${signOutState.isSignOutModalVisible} ,,, ${signOutState.isSigningOut}`);

    if (isMounted()) {
      dispatch({ type: "SET_MODAL_VISIBLE", isVisible: true });
      dispatch({ type: "SET_SIGNING_OUT", isLoading: false });
      console.log(`EN TEORIA HE ABIERTO EL MODAL`);
    }
  }, [signOutState, isMounted]);

  const handleSignOut = async () => {
    try {
      if (signOutState.isSigningOut) return;
      if (!isMounted()) return;

      if (isMounted()) dispatch({ type: "SET_SIGNING_OUT", isLoading: true });

      await signOutUseCase.execute();

      if (isMounted()) {
        dispatch({ type: "SET_SIGNING_OUT", isLoading: false });
        dispatch({ type: "SET_MODAL_VISIBLE", isVisible: false });
      }
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_MODAL_VISIBLE", isVisible: false });
      alert(`Se ha producido un error inesperado, por favor, inténtelo de nuevo más adelante. ${error.message}`);
    }
  };

  return {
    signOutState,
    closeSignOutModal,
    openSignOutModal,
    handleSignOut,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignOut };
