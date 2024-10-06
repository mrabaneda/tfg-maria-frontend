// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import userAvatar from "../assets/user_avatar.jpg";
import Image from "next/image";
import { useAuthContext } from "../contexts/auth.context";
import { AuthStateEnum } from "../states/auth.state";
import { HomeIcon } from "../components/icons/home.icon";
import { UserIcon } from "../components/icons/user.icon";
import { LogoutIcon } from "../components/icons/logout.icon";
import IconButton from "../components/button/icon_button";
import { useSignOut } from "../../features/sign_out/hooks/sign_out.hook";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Sidebar: FC = () => {
  const { authState } = useAuthContext();
  
  const {
    signOutState: { isSigningOut },
    openSignOutModal,
  } = useSignOut();

  if (authState.status == AuthStateEnum.authenticated) {
    return (
      <div className="flex flex-col justify-between h-screen bg-[#FFE9A7] p-8 w-1/5">
        <div className="header flex flex-col justify-center items-center">
          <Image className="max-w-28 w-full h-28 rounded-full mb-8" src={userAvatar} alt="User avatar" />
          <p className="text-center text-lg font-normal text-black mb-4">{authState.appUser.name}</p>
          <p className="text-sm text-black">Admin</p>
        </div>
        <div className="navigation flex flex-col gap-4">
          <div className="flex items-center bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-[#68C0B8] ">
            <a className="flex items-center gap-[5px]" href="">
              <HomeIcon />
              <p className="m-0 text-md text-black leading-none relative top-[2.4px]">Inicio</p>
            </a>
          </div>
          <div className="flex items-center bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-[#68C0B8] group">
            <a className="flex items-center gap-[5px]" href="">
              <UserIcon />
              <p className="m-0 text-md text-black leading-none relative group-hover:text-white">Usuarios</p>
            </a>
          </div>
        </div>
        <div className="logout text-center">
          <div className="flex items-center  text-teal-500 px-4 py-2 rounded-md">
            <a className="flex items-center gap-[5px]" href="">
              <p className="m-0 text-md text-[#FF0000] leading-none relative">Cerrar sesión</p>
              <IconButton icon={<LogoutIcon color="#FF0000" />} onClick={openSignOutModal} isDisabled={isSigningOut} />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { Sidebar };
