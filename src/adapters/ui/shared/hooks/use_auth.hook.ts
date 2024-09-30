// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useEffect, useReducer } from "react";
import { AuthController } from "../controllers/auth.controller";
import { AuthStateEnum } from "../states/auth.state";
import { useMounted } from "./use_mounted";
import { useAuthStateChangesUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/auth_state_changes_use_case.context";
import { AppUserFactory } from "../factory/app_user.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuth = () => {
  const [authState, dispatch] = useReducer(AuthController, { status: AuthStateEnum.authenticating });

  const isMounted = useMounted();

  const { authStateChangesUseCase } = useAuthStateChangesUseCaseContext();

  useEffect(() => {
    const suscription = authStateChangesUseCase.execute((user) => {
      if (!user) {
        if (isMounted()) dispatch({ type: "Anonymous" });
        return;
      }

      dispatch({ type: "Authenticated", appUser: AppUserFactory.appUserToModel(user) });
    });

    return () => {
      suscription();
    };
  }, [isMounted, authStateChangesUseCase]);

  return { authState };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuth };
