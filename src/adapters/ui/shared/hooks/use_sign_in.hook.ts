// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useEffect } from "react";
import { useAuthContext } from "../contexts/auth.context";
import { AppUserFactory } from "../factory/app_user.factory";
import { useSignInContext } from "../contexts/sign_in.context";
import { useSignInUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignIn = () => {
  const { signInState, setSignInError } = useSignInContext();
  const { signInUseCase } = useSignInUseCaseContext();
  const { setAuthSuccess, setAuthError } = useAuthContext();

  useEffect(() => {
    let mounted = true;

    if (signInState.email && signInState.password) {
      signInUseCase
        .execute(signInState.email, signInState.password)
        .then((appUser) => {
          if (mounted) {
            console.log(`EL USER EMAIL: ${appUser.email}`);
            setAuthSuccess(AppUserFactory.appUserToModel(appUser));
            console.log(`EL USER DE FIREBASE AMIGO: ${JSON.stringify(appUser)}`);
          }
        })
        .catch((err) => {
          if (mounted) {
            setSignInError(err.message);
            setAuthError(err.message);
          }
        });
    }

    return () => {
      mounted = false;
    };
  }, [signInState.email, signInState.password, signInUseCase, setSignInError]);

  return { signInState };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignIn };
