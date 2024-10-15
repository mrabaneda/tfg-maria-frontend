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
import { useUserDeleteContext } from "../contexts/user_delete.context";
import Modal from "../../../shared/components/dialog/modal";
import { UserCreateContextProvider } from "../contexts/user_create.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserGrid: React.FC = () => {
  const {
    userGridState: { userList, isLoading },
  } = useUserGridContext();

  const { userDeleteState, deleteModalSetVisible, deleteUser } = useUserDeleteContext();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    // TODO: reorganize contexts and components
    <div className="p-[30px]">
      <UserCreateContextProvider>
        <UserToolbar />
      </UserCreateContextProvider>
      <table className="mt-[20px] w-full">
        <thead>
          <tr>
            <TableHeader title={""} />
            <TableHeader title={"Nombre"} />
            <TableHeader title={"Email"} />
            <TableHeader title={"Preferencia"} />
          </tr>
        </thead>
        <tbody>
          {userList?.map((user, i) => (
            <UserItem
              key={i}
              itemId={user.uid as UID}
              itemName={user.name}
              itemEmail={user.email}
              itemPhotoUrl={user.photoUrl}
              itemPreference={user.preference}
            />
          ))}
        </tbody>
      </table>
      {userDeleteState.isDeleteModalOpen && (
        <Modal
          title={"Borrar usuario/a"}
          visible={userDeleteState.isDeleteModalOpen}
          body={`Estás seguro/a de eliminar al usuario/a? con nombre: ${userDeleteState.userName}`}
          confirmButtonText="Borrar usuario/a"
          confirmButtonColor="bg-red-600 hover:bg-red-700"
          isLoading={userDeleteState.isDeleting}
          setVisible={deleteModalSetVisible}
          onSubmit={deleteUser}
        />
      )}
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default UserGrid;
