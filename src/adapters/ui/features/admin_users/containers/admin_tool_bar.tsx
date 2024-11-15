// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { FC } from "react";
import Button from "../../../shared/components/button/button";
import Modal from "../../../shared/components/dialog/modal";
import AdminUserCreateFormBody from "./admin_user_create_form_body";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";
import { useAdminUserDeleteContext } from "../contexts/admin_user_delete.context";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface ToolBarProps {}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminToolbar: FC<ToolBarProps> = () => {
  const {
    adminUserGridState: { isLoading },
  } = useAdminUserGridContext();

  const { adminUserCreateState, openCreateAdminForm, createFormSetVisible, createAdminUser } = useAdminUserCreateContext();

  const {
    adminUserDeleteState: { isDeleting },
  } = useAdminUserDeleteContext();

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[12px] select-none">
        <div className="text-[22px] font-bold">{"Usuarios administradores"}</div>
        <Button
          color="bg-[#68C0B8] hover:bg-[#4DAF99]"
          textColor="text-[#FFFFFF]"
          text={"Añadir administrador"}
          onClick={openCreateAdminForm}
          isDisabled={isLoading || adminUserCreateState.isCreating || isDeleting}
          isLoading={adminUserCreateState.isCreating}
        />
      </div>
      {adminUserCreateState.isCreateFormOpen && (
        <Modal
          title={"Crear nuevo administrador/a"}
          visible={adminUserCreateState.isCreateFormOpen}
          body={<AdminUserCreateFormBody />}
          confirmButtonText="Crear administrador/a"
          confirmButtonColor="bg-[#68C0B8] hover:bg-[#4DAF99]"
          isLoading={adminUserCreateState.isCreating}
          setVisible={createFormSetVisible}
          onSubmit={createAdminUser}
        />
      )}
    </>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminToolbar;
