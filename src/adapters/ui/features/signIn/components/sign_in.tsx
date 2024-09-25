// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import SignInForm from "../../../shared/containers/sign_in_form";
import { useAuthContext } from "../../../shared/contexts/auth.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignIn: React.FC = () => {
  const { authState } = useAuthContext();

  if (authState.user) {
    return (
      <div>
        <h1>Welcome, {authState.user.name}!</h1>
        <p>Email: {authState.user.email}</p>
      </div>
    );
  }
  return <SignInForm />;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignIn;
