// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import { UserIcon } from "../../../shared/components/icons/user.icon";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface HomeMenuItemProps {
  title: string;
  //   isLoading?: boolean;
  //   isDisabled?: boolean;
  color?: string;
  classNames?: string;
  onClick?: () => void;
}

const HomeMenuItem: FC<HomeMenuItemProps> = ({ title, color, classNames = "", onClick }) => {
  return (
    <div className="bg-[#BBE3DC] p-[20px] rounded-md shadow max-w-[300px] w-full">
      <UserIcon classNames="mb-[38px] max-w-[34px]" />
      <p className="text-[14px] text-[#6C6C6C]">{title}</p>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default HomeMenuItem;
