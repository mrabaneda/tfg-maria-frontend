// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { UID } from "@/src/core/domain/value_objects/types";
import { LoadingScreen } from "../../../shared/components/loading_screen";
import TableHeader from "../../../shared/components/table_header";
import { useUserGridContext } from "../contexts/user_grid.context";
import UserItem from "./user_item";
import UserToolbar from "./user_tool_bar";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserGrid: React.FC = () => {
  const {
    userGridState: { userList, isLoading },
  } = useUserGridContext();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    // TODO: reorganize contexts and components
    <div className="p-[30px]">
      <UserToolbar />
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader title={""} />
            <TableHeader title={"Nombre"} />
            <TableHeader title={"Email"} />
          </tr>
        </thead>
        <tbody>
          {userList?.map((user, i) => (
            <UserItem key={i} itemId={user.uid as UID} itemName={user.name} itemEmail={user.email} itemPhotoUrl={user.photoUrl} />
          ))}
        </tbody>
      </table>
      {/* {adminUserDeleteState.isDeleteModalOpen && (
        <Modal
          title={"Borrar administrador/a"}
          visible={adminUserDeleteState.isDeleteModalOpen}
          body={`Estás seguro/a de eliminar al administrador/a? con nombre: ${adminUserDeleteState.adminName}`}
          confirmButtonText="Borrar administrador/a"
          isLoading={adminUserDeleteState.isDeleting}
          setVisible={deleteModalSetVisible}
          onSubmit={deleteAdminUser}
        />
      )} */}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserGrid;
