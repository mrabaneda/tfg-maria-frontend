// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import Modal from "../../../shared/components/dialog/modal";
import { LoadingScreen } from "../../../shared/components/loading_screen";
import TableHeader from "../../../shared/components/table_header";
import Toolbar from "../../../shared/components/tool_bar";
import { defaultUserAvatar } from "../../../shared/helpers/constants";
import AdminUserItem from "../components/admin_user_item";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import { useAdminUserCreate } from "../hooks/use_admin_user_create.hook";
import AdminUserCreateFormBody from "./admin_user_create_form";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGrid: React.FC = () => {
  const {
    adminUserGridState: { adminUserList, isLoading },
  } = useAdminUserGridContext();

  const { openCreateForm, closeCreateForm, createAdminUser } = useAdminUserCreate();

  const {
    adminUserCreateState: { isCreatingFormOpen, isCreating },
  } = useAdminUserCreateContext();

  // TODO: paint error screen (if not, unnecesary state error)
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="p-[30px]">
      <div>
        <Toolbar title={"Lista de Usuarios Administradores"} buttonText={"Añadir administrador"} isDisabled={isCreating} onClick={openCreateForm} />
      </div>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            {["", "Nombre", "Email", "Fecha de creación"].map((title, index) => (
              <TableHeader key={index} title={title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {adminUserList?.map((adminUser) => (
            <AdminUserItem
              key={adminUser.userId}
              itemId={adminUser.userId}
              itemName={adminUser.name ?? ""}
              itemEmail={adminUser.email ?? ""}
              itemPhotoUrl={adminUser.photoUrl ?? defaultUserAvatar}
              itemCreatedDate={adminUser.createdAt}
            ></AdminUserItem>
          ))}
        </tbody>
      </table>
      {isCreatingFormOpen && (
        <Modal
          title={"Crear nuevo administrador/a"}
          visible={isCreatingFormOpen}
          body={<AdminUserCreateFormBody />}
          confirmButtonText="Crear administrador/a"
          confirmButtonColor="bg-[#68C0B8] hover:bg-[#4DAF99]"
          isLoading={isCreating}
          setVisible={closeCreateForm}
          onSubmit={createAdminUser}
        />
      )}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUserGrid;
