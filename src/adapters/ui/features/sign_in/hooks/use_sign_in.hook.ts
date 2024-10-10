// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { ChangeEventHandler, useReducer } from "react";
import { useSignInUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";
import { SignInController } from "../controllers/sign_in.controller";
import { SignInState } from "../states/sign_in.state";
import { useMounted } from "../../../shared/hooks/use_mounted";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useSignIn = () => {
  const [signInState, dispatch] = useReducer(SignInController, {
    email: "",
    password: "",
    isLoading: false,
  } satisfies SignInState);

  const isMounted = useMounted();

  const { signInUseCase } = useSignInUseCaseContext();

  const setEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (isMounted()) dispatch({ type: "SET_EMAIL", email: event.target.value });
  };

  const setPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (isMounted()) dispatch({ type: "SET_PASSWORD", password: event.target.value });
  };

  const handleSignIn = async () => {
    try {
      if (!isMounted()) return;

      const sanatizedEmail = signInState.email.trim();
      const sanatizedPassword = signInState.password.trim();

      if (!sanatizedEmail) {
        alert("Debe introducir un email");
        return;
      }

      if (!sanatizedPassword) {
        alert("Debe introducir una contraseña");
        return;
      }

      if (isMounted()) dispatch({ type: "SET_LOADING", isLoading: true });

      await signInUseCase.execute(sanatizedEmail, sanatizedPassword);

      if (isMounted()) dispatch({ type: "SET_LOADING", isLoading: false });
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_LOADING", isLoading: false });
      alert(error.message);
    }
  };

  return {
    signInState,
    setEmail,
    setPassword,
    handleSignIn,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useSignIn };
