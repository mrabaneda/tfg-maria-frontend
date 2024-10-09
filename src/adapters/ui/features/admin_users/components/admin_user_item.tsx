// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import IconButton from "../../../shared/components/button/icon_button";
import { TrashIcon } from "../../../shared/components/icons/trash.icon";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserItemProps {
  itemId: string;
  itemName: string;
  itemEmail: string;
  itemPhotoUrl: string;
  itemCreatedDate: Date;
  classNames?: string;
}

// ------------------------------------------------------->
// Helpers
// -------------------------------------------------------

const AdminUserItem: FC<AdminUserItemProps> = ({ itemId, itemName, itemEmail, itemPhotoUrl, itemCreatedDate, classNames = "" }) => {
  return (
    <tr className="mb-[20px] border-[1px] border-[#E5E5E5] rounded-md py-3">
      <td className="text-center px-[20px] max-w-[250px] break-words">
        <img className="select-none my-4 min-w-[75px] min-h-[75px] w-[75px] h-[75px] object-cover" src={itemPhotoUrl} alt="" />
      </td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemName}</td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemEmail}</td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemCreatedDate.toLocaleDateString("es-ES")}</td>
      <td>{<IconButton icon={<TrashIcon color="#FF0000" />}></IconButton>} </td>
    </tr>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUserItem;
