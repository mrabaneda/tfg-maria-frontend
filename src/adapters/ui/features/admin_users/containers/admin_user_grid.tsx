// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { LoadingScreen } from "../../../shared/components/loading_screen";
import TableHeader from "../../../shared/components/table_header";
import AdminUserItem from "./admin_user_item";
import { AdminUserCreateContextProvider } from "../contexts/admin_user_create.context";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import AdminToolbar from "./admin_tool_bar";
import { useAdminUserDeleteContext } from "../contexts/admin_user_delete.context";
import Modal from "../../../shared/components/dialog/modal";
import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGrid: React.FC = () => {
  const {
    adminUserGridState: { adminUserList, isLoading },
  } = useAdminUserGridContext();

  const { adminUserDeleteState, deleteModalSetVisible, deleteAdminUser } = useAdminUserDeleteContext();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    // TODO: reorganize contexts and components
    <div className="p-[30px]">
      <AdminUserCreateContextProvider>
        <AdminToolbar />
      </AdminUserCreateContextProvider>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader title={""} />
            <TableHeader title={"Nombre"} />
            <TableHeader title={"Email"} />
          </tr>
        </thead>
        <tbody>
          {adminUserList?.map((adminUser, i) => (
            <AdminUserItem
              key={i}
              itemId={adminUser.uid as UID}
              itemName={adminUser.name}
              itemEmail={adminUser.email}
              itemPhotoUrl={adminUser.photoUrl}
            />
          ))}
        </tbody>
      </table>
      {adminUserDeleteState.isDeleteModalOpen && (
        <Modal
          title={"Borrar administrador/a"}
          visible={adminUserDeleteState.isDeleteModalOpen}
          body={`Estás seguro/a de eliminar al administrador/a? con nombre: ${adminUserDeleteState.adminName}`}
          confirmButtonText="Borrar administrador/a"
          confirmButtonColor="bg-red-600 hover:bg-red-700"
          isLoading={adminUserDeleteState.isDeleting}
          setVisible={deleteModalSetVisible}
          onSubmit={deleteAdminUser}
        />
      )}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUserGrid;
