// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useEffect, useReducer } from "react";
import { AuthController } from "../controllers/auth.controller";
import { AuthStateEnum } from "../states/auth.state";
import { useMounted } from "./use_mounted";
import { useAuthStateChangesUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/auth/auth_state_changes_use_case.context";
import { AppUserFactory } from "../factory/app_user.factory";
import { useIsAdminUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/auth/is_admin_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAuth = () => {
  const [authState, dispatch] = useReducer(AuthController, { status: AuthStateEnum.authenticating });

  const isMounted = useMounted();

  const { authStateChangesUseCase } = useAuthStateChangesUseCaseContext();

  const { isAdminUseCase } = useIsAdminUseCaseContext();

  useEffect(() => {
    const suscription = authStateChangesUseCase.execute((user) => {
      if (!user) {
        if (isMounted()) dispatch({ type: "Anonymous" });
        return;
      }

      isAdminUseCase
        .execute()
        .then((isAdmin) => {
          if (!isAdmin) {
            if (isMounted()) dispatch({ type: "Anonymous" });
          } else {
            if (isMounted()) dispatch({ type: "Authenticated", appUser: AppUserFactory.appUserToModel(user) });
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });

    return () => {
      suscription();
    };
  }, [isMounted, authStateChangesUseCase, isAdminUseCase]);

  return { authState };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAuth };
