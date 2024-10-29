// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import { UID } from "@/src/core/domain/value_objects/types";
import { LoginEntity } from "@/src/core/domain/entities/login.entity";
import { TrashIcon } from "../../../shared/components/icons/trash.icon";
import Image from "next/image";
import IconButton from "../../../shared/components/button/icon_button";
import { useUserDeleteContext } from "../contexts/user_delete.context";
import { entityPreferenceToViewModel } from "../helpers/utils";
import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserItemProps {
  itemId: UID;
  itemName: string;
  itemPhotoUrl: string;
  itemPreference: string;
  loginPasswords: LoginEntity | null;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserItem: FC<UserItemProps> = async ({ itemId, itemName, itemPhotoUrl, itemPreference, loginPasswords }) => {
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
      <td className="flex gap-3 text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">
        {loginPasswords !== null &&
          loginPasswords.passwordModel.map((password, i) => (
            <Image
              key={i}
              className="select-none my-4 min-w-[60px] min-h-[60px] w-[60px] h-[60px] object-cover hover:transition hover:scale-150 cursor-pointer"
              width={60}
              height={60}
              src={password.photoUrl}
              alt={`Image ${i}`}
            />
          ))}
      </td>
      <td className="text-center px-[20px] min-w-[250px] max-w-[250px] break-words select-none">
        {entityPreferenceToViewModel(itemPreference as PreferencesTypeEnum)}
      </td>
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
