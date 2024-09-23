// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useEffect } from "react";
import { useSignInContext } from "../contexts/sign_in.context";
import { useSignInUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignIn = () => {
  const { signInState, setSignInError } = useSignInContext();

  const { signInUseCase } = useSignInUseCaseContext();

  useEffect(() => {
    let mounted = true;

    if (signInState.email && signInState.password) {
      signInUseCase
        .execute(signInState.email, signInState.password)
        .then((appUser) => {
          if (mounted) {
            // TODO: manejar login exitoso
          }
        })
        .catch((err) => {
          if (mounted) setSignInError(err.message);
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
