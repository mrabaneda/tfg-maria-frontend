// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { SignInUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_in_use_case.context";
import SignInForm from "./containers/sign_in_form";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignIn: React.FC = () => {
  return (
    <SignInUseCaseProvider>
      <SignInForm />
    </SignInUseCaseProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignIn;
