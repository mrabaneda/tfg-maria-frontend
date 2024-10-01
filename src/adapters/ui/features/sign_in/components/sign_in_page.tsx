// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Image from "next/image";
import signInBackground from "../assets/sign_in_background.png";
import SignInWelcome from "./sign_in_welcome";
import SignInForm from "../containers/sign_in_form";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignInPage: FC = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Image className="object-cover w-full h-full" src={signInBackground} alt="Sign in background" />
      </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[167px] h-full px-5">
            <SignInWelcome />
            <SignInForm />
        </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInPage;
