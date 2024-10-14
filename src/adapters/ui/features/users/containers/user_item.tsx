// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import { UID } from "@/src/core/domain/value_objects/types";
import { TrashIcon } from "../../../shared/components/icons/trash.icon";
import Image from "next/image";
import IconButton from "../../../shared/components/button/icon_button";
import { useUserDeleteContext } from "../contexts/user_delete.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserItemProps {
  itemId: UID;
  itemName: string;
  itemEmail: string;
  itemPhotoUrl: string;
  itemPreference: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserItem: FC<UserItemProps> = ({ itemId, itemName, itemEmail, itemPhotoUrl, itemPreference }) => {
  const { openDeleteModal } = useUserDeleteContext();

  const handleDeleteClick = () => {
    openDeleteModal(itemId, itemName);
  };
  return (
    <tr className="mb-[20px] border-[1px] border-[#E5E5E5] rounded-md py-3">
      <td className="text-center px-[20px] max-w-[250px] break-words">
        <Image
          className="select-none my-4 min-w-[75px] min-h-[75px] w-[75px] h-[75px] object-cover"
          width={120}
          height={120}
          src={itemPhotoUrl}
          alt="User Avatar"
        />
      </td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemName}</td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemEmail}</td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">{itemPreference}</td>
      <td>
        <IconButton icon={<TrashIcon color="#FF0000" />} onClick={handleDeleteClick}></IconButton>
      </td>
    </tr>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserItem;
