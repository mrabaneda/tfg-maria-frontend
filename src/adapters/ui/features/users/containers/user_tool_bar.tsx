// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Button from "../../../shared/components/button/button";
import Modal from "../../../shared/components/dialog/modal";
import { useUserGridContext } from "../contexts/user_grid.context";

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

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[12px] select-none">
        <div className="text-[22px] font-bold">{"Usuarios administradores"}</div>
        <Button
          color="bg-[#68C0B8] hover:bg-[#4DAF99]"
          textColor="text-[#FFFFFF]"
          text={"Añadir administrador"}
          onClick={() => {
            console.log("open modal jiji");
          }}
          isDisabled={isLoading}
          isLoading={isLoading}
        />
      </div>
      {/* {userCreateState.isCreateFormOpen && (
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
      )} */}
    </>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserToolbar;
