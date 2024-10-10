// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useEffect, useReducer } from "react";
import { useGetAdminUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/get_admin_users_use_case.context";
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
    getAdminUsersError: undefined,
  } satisfies AdminUserGridState);

  const isMounted = useMounted();

  const { getAdminUsersUseCase } = useGetAdminUsersUseCaseContext();

  useEffect(() => {
    if (adminUserGridState.isLoading) return;
    if (!isMounted()) return;
    if (isMounted()) dispatch({ type: "SET_IS_LOADING", isLoading: true });

    getAdminUsersUseCase
      .execute()
      .then((adminUserList) => {
        if (isMounted()) {
          dispatch({ type: "SET_ADMIN_GRID_LIST", adminUserList: adminUserList.map(AdminUserFactory.entityToModel) });
          dispatch({ type: "SET_IS_LOADING", isLoading: false });
        }
      })
      .catch((err) => {
        if (isMounted()) {
          dispatch({ type: "SET_GET_ADMIN_GRID_ERROR", error: err.message });
          alert(`Hubo un error inesperado: ${err.message}`);
        }
      });
  }, [isMounted, getAdminUsersUseCase]);

  return { adminUserGridState };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserGrid };
