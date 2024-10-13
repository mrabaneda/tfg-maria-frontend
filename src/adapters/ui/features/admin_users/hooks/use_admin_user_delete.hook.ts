// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useReducer } from "react";
import { UID } from "@/src/core/domain/value_objects/types";
import { useDeleteAdminUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/admin/delete_admin_user.use_case.context";
import { AdminUserDeleteState } from "../states/admin_user_delete.state";
import { AdminUserDeleteController } from "../controllers/admin_user_delete.controller";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import { useMounted } from "../../../shared/hooks/use_mounted";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserDelete = () => {
  const [state, dispatch] = useReducer(AdminUserDeleteController, {
    isDeleteModalOpen: false,
    isDeleting: false,
    uid: null,
    adminName: null,
  } satisfies AdminUserDeleteState);

  const isMounted = useMounted();

  const { refreshGrid } = useAdminUserGridContext();

  const { deleteAdminUsersUseCase } = useDeleteAdminUsersUseCaseContext();

  const openDeleteModal = (uid: UID, adminName: string) => {
    if (isMounted()) dispatch({ type: "OPEN_DELETE_MODAL", uid: uid, adminName: adminName });
  };

  const deleteModalSetVisible = (isVisible: boolean) => {
    if (isMounted()) dispatch({ type: "DELETE_MODAL_SET_VISIBLE", isVisible: isVisible });
  };

  const deleteAdminUser = async () => {
    try {
      if (!isMounted()) return;

      if (isMounted()) dispatch({ type: "SET_IS_DELETING", isDeleting: true });

      if (!state.uid || !state.adminName) throw new Error("No se ha procesado correctamente el administrador a borrar.");

      await deleteAdminUsersUseCase.execute(state.uid);

      refreshGrid();

      if (isMounted()) dispatch({ type: "CLOSE_DELETE_MODAL" });

      alert("Se ha borrado el administrador/a correctamente.");
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_IS_DELETING", isDeleting: false });
      alert(error.message ?? "Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return {
    deleteState: state,
    openDeleteModal,
    deleteModalSetVisible,
    deleteAdminUser,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserDelete };
