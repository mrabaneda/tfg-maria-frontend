// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { useSignIn } from "../hooks/use_sign_in.hook";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignInForm: FC = () => {
  const {
    signInState: { email, isLoading, password },
    setEmail,
    setPassword,
    handleSignIn,
  } = useSignIn();

  return (
    <div className="w-full max-w-[350px] bg-white shadow h-[583px] flex flex-col align-center justify-center relative rounded-xl">
      <div>
        <label>Email: </label>
        <input type="email" id="email" name="email" defaultValue={email} onChange={setEmail} required disabled={isLoading} />
      </div>
      <br />
      <div>
        <label>Password: </label>
        <input type="password" id="password" name="password" defaultValue={password} onChange={setPassword} required disabled={isLoading} />
      </div>
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInForm;
