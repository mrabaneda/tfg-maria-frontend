// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { SignOutUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_out_use_case.context";
import SignOutModal from "./containers/sign_out_modal";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignOut: React.FC = () => {
  return (
    <SignOutUseCaseProvider>
      <SignOutModal />
    </SignOutUseCaseProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignOut;
