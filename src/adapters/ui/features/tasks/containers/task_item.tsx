// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";
import { FC } from "react";
import { TrashIcon } from "../../../shared/components/icons/trash.icon";
import { EditIcon } from "../../../shared/components/icons/edit.icon";
import IconButton from "../../../shared/components/button/icon_button";
import { FrownIcon } from "../../../shared/components/icons/frown.icon";
import { CheckIcon } from "../../../shared/components/icons/check.icon";
import { MehIcon } from "../../../shared/components/icons/meh.icon";
import { SmileIcon } from "../../../shared/components/icons/smile.icon";
import { LaughIcon } from "../../../shared/components/icons/laugh.icon";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface TaskItemProps {
  itemTitle: string;
  itemUser: string;
  itemPhoto: string;
  itemDescription: string;
  itemStatus: boolean;
  loginFeedback: number | null;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const TaskItem: FC<TaskItemProps> = ({ itemTitle, itemUser, itemPhoto, itemDescription, itemStatus, loginFeedback }) => {
  return (
    <tr className="mb-[20px] border-[1px] border-[#E5E5E5] rounded-md py-3">
      <td className="text-center px-[20px] break-words select-none">
        <div className="flex w-full justify-center">{itemStatus ? <CheckIcon /> : ""}</div>
      </td>
      <td className="text-center px-[20px] min-w-[250px] break-words select-none py-2">
        {itemUser}
        <div className="flex w-full justify-center">
          <img
            className="select-none my-4 min-w-[50px] min-h-[50px] w-[50px] h-[50px] object-cover"
            width={120}
            height={120}
            src={itemPhoto}
            alt="User Avatar"
          />
        </div>
      </td>
      <td className="gap-3 text-center px-[20px] min-w-[250px]  break-words select-none">{itemTitle}</td>
      <td className="text-center px-[20px] min-w-[250px] break-words select-none py-2">{itemDescription}</td>
      <td className="text-center px-[20px] min-w-[250px] break-words select-none ">
        <div className="flex gap-1 justify-center">
          <FrownIcon color={loginFeedback === 1 ? "#f6a652" : "#ebebeb"} />
          <MehIcon color={loginFeedback === 2 ? "#87BFF2" : "#ebebeb"} />
          <SmileIcon color={loginFeedback === 3 ? "#fed576" : "#ebebeb"} />
          <LaughIcon color={loginFeedback === 4 ? "#A4D37A" : "#ebebeb"} />
        </div>
      </td>
      <td>
        <IconButton icon={<EditIcon color="#497B76" />} onClick={() => {}}></IconButton>
      </td>
      <td>
        <IconButton classNames="mr-5" icon={<TrashIcon color="#FF0000" />} onClick={() => {}}></IconButton>
      </td>
    </tr>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default TaskItem;
