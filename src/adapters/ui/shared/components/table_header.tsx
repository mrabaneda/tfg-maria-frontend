// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface TableHeaderProps {
  titles: string[];
}

// ------------------------------------------------------->
// Helpers
// -------------------------------------------------------

const TableHeader: FC<TableHeaderProps> = ({ titles }) => {
  return  (
    titles.map((title) =>
        <th className="select-none pb-[20px] px-[20px] text-center text-[#ACACAC] font-bold text-[16px]">{title}</th>
    ));
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default TableHeader;
