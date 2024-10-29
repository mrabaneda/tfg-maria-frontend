// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Image from "next/image";
import { useSignIn } from "../hooks/use_sign_in.hook";
import logo from "../../../shared/assets/vale_logo.png";
import Button from "../../../shared/components/button/button";
import FormInputText from "../../../shared/components/input/form_input_text";

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
    <div className="w-full max-w-[593px] bg-white shadow h-[583px] flex flex-col align-center justify-center relative rounded-xl p-[37px]">
      <div className="flex w-full justify-center mb-[37px]">
        <Image src={logo} alt="Vale Logo" priority={true} />
      </div>
      <FormInputText
        id="email"
        value={email}
        onChange={setEmail}
        label="Email"
        name="email"
        placeholder="Introduzca su email"
        isDisabled={isLoading}
        style="mb-[20px]"
      ></FormInputText>
      {
        // TODO: be able to see passwd
      }
      <FormInputText
        id="password"
        value={password}
        onChange={setPassword}
        label="Password"
        name="password"
        placeholder="Introduzca su contraseña"
        isDisabled={isLoading}
        style="mb-[40px]"
        type="password"
      ></FormInputText>
      {
        // TODO: be able to REPEAT passwd
      }
      <Button
        text="Iniciar Sesión"
        isLoading={isLoading}
        isDisabled={isLoading}
        color="bg-[#68C0B8]"
        textColor="text-white"
        onClick={handleSignIn}
        classNames="py-[12px] mb-5 hover:bg-[#619A8B]"
      ></Button>
      <div className="flex w-full justify-center">
        <p className="text-[14px] text-[#6C6C6C] flex gap-[5px]">
          <span>¿Olvidaste tu contraseña?</span>
          <span className="text-[#68C0B8] cursor-pointer">Restablecer Contraseña</span>
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInForm;
