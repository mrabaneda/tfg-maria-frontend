// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { SignInUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/auth/sign_in_use_case.context";
import SignInPage from "./components/sign_in_page";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignIn: React.FC = () => {
  return (
    <SignInUseCaseProvider>
      <SignInPage />
    </SignInUseCaseProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignIn;
