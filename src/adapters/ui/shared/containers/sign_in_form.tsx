import React, { useState } from "react";
import { useSignInContext } from "../contexts/sign_in.context";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserEmail, setUserPassWord, setSigningIn } = useSignInContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUserEmail(email);
    setUserPassWord(password);

    setSigningIn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
