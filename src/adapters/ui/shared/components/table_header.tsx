// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface TableHeaderProps {
  title: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TableHeader: FC<TableHeaderProps> = ({ title }) => {
  return <th className="select-none pb-[20px] px-[20px] text-center text-[#ACACAC] font-bold text-[16px]">{title}</th>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default TableHeader;
