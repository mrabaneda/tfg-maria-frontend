// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppRoutes } from "../helpers/navigation";
import { useAuthContext } from "../contexts/auth.context";
import { AuthStateEnum } from "../states/auth.state";
import { HomeIcon } from "../components/icons/home.icon";
import { UserIcon } from "../components/icons/user.icon";
import { LogoutIcon } from "../components/icons/logout.icon";
import IconButton from "../components/button/icon_button";
import { useSignOut } from "../hooks/sign_out.hook";
import { useSignOutContext } from "../contexts/sign_out.context";
import { defaultUserAvatar } from "../helpers/constants";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Sidebar: FC = () => {
  const { authState } = useAuthContext();

  const {
    signOutState: { isSigningOut },
  } = useSignOutContext();

  const { openSignOutModal } = useSignOut();

  if (authState.status == AuthStateEnum.authenticated) {
    return (
      <div className="flex flex-col justify-between min-h-screen bg-[#FFE9A7] p-8 w-1/5 min-w-[250px]">
        <div className="header flex flex-col justify-center items-center">
          <Image
            className="max-w-28 w-full h-28 rounded-full mb-8 select-none"
            src={authState.appUser.photoUrl ?? defaultUserAvatar}
            alt="User avatar"
            width={120}
            height={120}
          />
          <p className="text-center text-lg font-normal text-black mb-4 select-none">{authState.appUser.name}</p>
          <p className="text-sm text-black select-none">Admin</p>
        </div>
        <div className="navigation flex flex-col gap-4">
          <Link href={"/"} className=" w-full">
            <div className="flex gap-[5px] items-center bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-[#68C0B8] w-full ">
              <HomeIcon />
              <p className="m-0 text-md text-black leading-none relative top-[2.4px] select-none">Inicio</p>
            </div>
          </Link>
          <Link href={AppRoutes.appUsers} className=" w-full">
            <div className="flex gap-[5px] items-center bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-[#68C0B8] w-full ">
              <UserIcon />
              <p className="m-0 text-md text-black leading-none relative top-[2.4px] select-none">Usuarios</p>
            </div>
          </Link>
          <Link href={AppRoutes.adminUsers} className=" w-full">
            <div className="flex gap-[5px] items-center bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-[#68C0B8] w-full ">
              <UserIcon />
              <p className="m-0 text-md text-black leading-none relative top-[2.4px] select-none">Administradores</p>
            </div>
          </Link>
        </div>
        <div className="logout text-center">
          <div className="flex items-center  text-teal-500 px-4 py-2 rounded-md">
            <div className="flex items-center gap-[15px]">
              <p className="m-0 text-md text-[#FF0000] leading-none relative select-none">Cerrar sesión</p>
              <IconButton icon={<LogoutIcon color="#FF0000" />} onClick={openSignOutModal} isDisabled={isSigningOut} />
            </div>
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
