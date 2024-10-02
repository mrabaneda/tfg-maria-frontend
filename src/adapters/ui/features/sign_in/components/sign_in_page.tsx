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
    <div className="w-full min-h-screen relative flex justify-center align-center">
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Image className="object-cover w-full h-full" src={signInBackground} alt="Sign in background" />
      </div>
      <div className="flex min-h-screen w-full flex-col md:flex-row items-center justify-center md:gap-[167px] gap-[30px] h-full py-[100px] px-5 relative z-1">
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
