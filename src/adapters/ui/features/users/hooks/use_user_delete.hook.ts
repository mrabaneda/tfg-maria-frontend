// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useReducer } from "react";
import { UID } from "@/src/core/domain/value_objects/types";
import { UserDeleteController } from "../controllers/user_delete.controller";
import { UserDeleteState } from "../states/user_delete.state";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { useDeleteUserUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/user/delete_user.use_case.context";
import { useUserGridContext } from "../contexts/user_grid.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useUserDelete = () => {
  const [state, dispatch] = useReducer(UserDeleteController, {
    isDeleteModalOpen: false,
    isDeleting: false,
    uid: null,
    userName: null,
  } satisfies UserDeleteState);

  const isMounted = useMounted();

  const { refreshGrid } = useUserGridContext();

  const { deleteAdminUserUseCase } = useDeleteUserUseCaseContext();

  const openDeleteModal = (uid: UID, userName: string) => {
    if (isMounted()) dispatch({ type: "OPEN_DELETE_MODAL", uid: uid, userName: userName });
  };

  const deleteModalSetVisible = (isVisible: boolean) => {
    if (isMounted()) dispatch({ type: "DELETE_MODAL_SET_VISIBLE", isVisible: isVisible });
  };

  const deleteUser = async () => {
    try {
      if (!isMounted()) return;

      if (isMounted()) dispatch({ type: "SET_IS_DELETING", isDeleting: true });

      if (!state.uid || !state.userName) throw new Error("No se ha procesado correctamente el usuario a borrar.");

      await deleteAdminUserUseCase.execute(state.uid);

      refreshGrid();

      if (isMounted()) dispatch({ type: "CLOSE_DELETE_MODAL" });

      alert("Se ha borrado el usuario/a correctamente.");
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_IS_DELETING", isDeleting: false });
      alert(error.message ?? "Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return {
    deleteState: state,
    openDeleteModal,
    deleteModalSetVisible,
    deleteUser,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useUserDelete };
