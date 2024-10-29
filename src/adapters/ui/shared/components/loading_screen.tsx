"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import Image from "next/image";
import logo from "../assets/vale_logo.png";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const LoadingScreen: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image className={"animate-pulse w-1/2 md:w-1/2 lg:w-1/4"} src={logo} alt="Cargando..." priority={true} />
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { LoadingScreen };
