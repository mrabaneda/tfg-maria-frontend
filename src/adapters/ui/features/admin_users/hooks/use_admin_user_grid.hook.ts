// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCallback, useEffect, useReducer } from "react";
import { useGetAdminUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/admin/get_admin_users_use_case.context";
import { AdminUserFactory } from "../factory/admin_user.factory";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { AdminUserGridController } from "../controllers/admin_user_grid.controller";
import { AdminUserGridState } from "../states/admin_user_grid.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserGrid = () => {
  const [adminUserGridState, dispatch] = useReducer(AdminUserGridController, {
    adminUserList: null,
    isLoading: false,
    error: null,
    refreshGrid: 0,
  } satisfies AdminUserGridState);

  const isMounted = useMounted();

  const { getAdminUsersUseCase } = useGetAdminUsersUseCaseContext();

  const refreshGrid = useCallback(() => {
    if (isMounted()) dispatch({ type: "REFRESH_GRID" });
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted()) return;

    if (isMounted()) dispatch({ type: "SET_IS_LOADING", isLoading: true });

    getAdminUsersUseCase
      .execute()
      .then((adminUserList) => {
        if (isMounted()) {
          const adminUsers = adminUserList.map(AdminUserFactory.entityToModel);
          dispatch({ type: "SET_ADMIN_GRID_LIST", adminUserList: adminUsers });
        }
      })
      .catch((err) => {
        if (isMounted()) {
          dispatch({ type: "SET_GET_ADMIN_GRID_ERROR", error: err.message });
          alert(`Hubo un error inesperado: ${err.message}`);
        }
      });
  }, [isMounted, getAdminUsersUseCase, adminUserGridState.refreshGrid]);

  return { adminUserGridState, refreshGrid };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserGrid };
