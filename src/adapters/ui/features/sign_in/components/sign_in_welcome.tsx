// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const SignInWelcome: FC = () => {
  return (
    <div className="w-full max-w-[350px] bg-white shadow h-[583px] flex flex-col align-center justify-center relative rounded-xl">
      <div className="flex align-center justify-center mb-[9px]">
        {/* TODO: Llamarlo como icono */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 10C30 4.47715 25.5228 0 20 0C14.4772 0 10 4.47715 10 10C10 15.5228 14.4772 20 20 20H18C8.05887 20 0 28.0589 0 38C0 39.1046 0.89543 40 2 40H38C39.1046 40 40 39.1046 40 38C40 28.0589 31.9411 20 22 20H20C22.6522 20 25.1957 18.9464 27.0711 17.0711C28.9464 15.1957 30 12.6522 30 10ZM18 24C11.0392 23.9982 5.13439 29.1106 4.14 36H35.86C34.8656 29.1106 28.9608 23.9982 22 24H18ZM14 10C14 13.3137 16.6863 16 20 16C21.5913 16 23.1174 15.3679 24.2426 14.2426C25.3679 13.1174 26 11.5913 26 10C26 6.68629 23.3137 4 20 4C16.6863 4 14 6.68629 14 10Z"
            fill="#68C0B8"
          />
        </svg>
      </div>
      <div className="flex justify-center text-[40px] text-[#68C0B8] mb-[35px]">
        <h1 className="m-0">¡Bienvenid@!</h1>
      </div>
      <div className="flex justify-center text-[14px] text-[#68C0B8]">
        <p className="m-0 max-w-[258px] mx-auto text-center ">Aquí podrás gestionar los usuarios de la aplicacion y las tareas</p>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInWelcome;
