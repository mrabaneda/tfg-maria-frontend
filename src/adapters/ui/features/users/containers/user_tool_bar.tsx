// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Button from "../../../shared/components/button/button";
import Modal from "../../../shared/components/dialog/modal";
import { useUserGridContext } from "../contexts/user_grid.context";
import { useUserCreateContext } from "../contexts/user_create.context";
import UserCreateFormBody from "./user_create_form_body";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ToolBarProps {}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserToolbar: FC<ToolBarProps> = () => {
  const {
    userGridState: { isLoading },
  } = useUserGridContext();

  const { userCreateState, openCreateUserForm, createFormSetVisible, createUser } = useUserCreateContext();

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[12px] select-none">
        <div className="text-[22px] font-bold">{"Usuarios de la APP"}</div>
        <Button
          color="bg-[#68C0B8] hover:bg-[#4DAF99]"
          textColor="text-[#FFFFFF]"
          text={"Añadir usuario"}
          onClick={openCreateUserForm}
          isDisabled={userCreateState.isCreating || isLoading}
          isLoading={userCreateState.isCreating}
        />
      </div>
      {userCreateState.isCreateFormOpen && (
        <Modal
          title={"Crear nuevo Usuario/a"}
          visible={userCreateState.isCreateFormOpen}
          body={<UserCreateFormBody />}
          confirmButtonText="Crear usuario/a"
          confirmButtonColor="bg-[#68C0B8] hover:bg-[#4DAF99]"
          isLoading={userCreateState.isCreating}
          setVisible={createFormSetVisible}
          onSubmit={createUser}
        />
      )}
    </>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserToolbar;
