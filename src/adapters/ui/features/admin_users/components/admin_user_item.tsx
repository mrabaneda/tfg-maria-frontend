// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import IconButton from "../../../shared/components/button/icon_button";
import { TrashIcon } from "../../../shared/components/icons/trash.icon";
import Image from "next/image";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserItemProps {
  itemId: string;
  itemName: string;
  itemEmail: string;
  itemPhotoUrl: string;
  classNames?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserItem: FC<AdminUserItemProps> = ({ itemId, itemName, itemEmail, itemPhotoUrl, classNames = "" }) => {
  return (
    <tr className="mb-[20px] border-[1px] border-[#E5E5E5] rounded-md py-3">
      <td className="text-center px-[20px] max-w-[250px] break-words">
        <Image className="select-none my-4 min-w-[75px] min-h-[75px] w-[75px] h-[75px] object-cover" width={50} height={50} src={itemPhotoUrl} alt="" />
      </td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemName}</td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemEmail}</td>
      <td>
        <IconButton
          icon={<TrashIcon color="#FF0000" />}
          onClick={() => {
            console.log(itemId);
          }}
        ></IconButton>
      </td>
    </tr>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUserItem;
