// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { combineClasses } from "../../../shared/helpers/utils";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface HomeMenuItemProps {
  itemId: string;
  itemText: string;
  itemPath: string;
  itemClassNames?: string;
  itemIcon: ReactNode;
  color?: string;
  isDisabled?: boolean;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const HomeMenuItem: FC<HomeMenuItemProps> = ({ itemId, itemText, itemPath, itemClassNames = "", color, itemIcon, isDisabled = false }) => {
  return (
    <Link key={itemId} href={itemPath} className={itemClassNames ?? "text-sm mb-2 hover:underline hover:text-green-600"}>
      <div
        className={combineClasses(
          !isDisabled ? color ?? "bg-[#BBE3DC]" : "bg-gray-400",
          "p-[20px] rounded-md shadow max-w-[300px] min-w-[300px] w-full"
        )}
      >
        <div className="mb-[30px] [&>svg]:w-[35px] [&>svg]:h-[35px]">{itemIcon}</div>
        <p className="text-[14px] text-[#6C6C6C]">{itemText}</p>
      </div>
    </Link>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default HomeMenuItem;
