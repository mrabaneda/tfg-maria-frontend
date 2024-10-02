// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import { UserIcon } from "../../../shared/components/icons/user.icon";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignInWelcome: FC = () => {
  return (
    <div className="w-full max-w-[350px] bg-white shadow h-[583px] flex flex-col align-center justify-center relative rounded-xl">
      <div className="flex align-center justify-center mb-[9px]">
        <UserIcon color="#619A8B" classNames="h-[60px] w-[60px]" />
      </div>
      <div className="flex justify-center text-[40px] text-[#619A8B] mb-[35px]">
        <h1 className="m-0">¡Bienvenid@!</h1>
      </div>
      <div className="flex justify-center text-[14px] text-[#619A8B]">
        <p className="m-0 max-w-[258px] mx-auto text-center ">Aquí podrás gestionar los usuarios de la aplicacion y las tareas</p>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInWelcome;
