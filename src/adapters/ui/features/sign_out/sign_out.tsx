// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { SignOutUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/sign_out_use_case.context";
import SignOutModal from "./containers/sign_out_modal";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignOut: FC = () => {
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
