// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import Button from "./button/button";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ToolBarProps {
  title: string;
  buttonText: string;
  onClick?: () => void;
}

// ------------------------------------------------------->
// Helpers
// -------------------------------------------------------

const Toolbar: FC<ToolBarProps> = ({ title, buttonText, onClick }) => {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[12px] select-none">
      <div className="text-[22px] font-bold">
        {title}
      </div>
      <div className="">
        <Button color="bg-[#68C0B8]" textColor="text-[#FFFFFF]" text={buttonText} ></Button>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Toolbar;
