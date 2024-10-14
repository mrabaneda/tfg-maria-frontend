// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCallback, useEffect, useReducer } from "react";
import { UserGridController } from "../controllers/user_grid.controller";
import { UserGridState } from "../states/user_grid.state";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { useGetUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/user/get_users_use_case.context";
import { UserFactory } from "../factory/user.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useUserGrid = () => {
  const [userGridState, dispatch] = useReducer(UserGridController, {
    userList: null,
    isLoading: false,
    refreshGrid: 0,
    error: null,
  } satisfies UserGridState);

  const isMounted = useMounted();

  const { getUsersUseCase } = useGetUsersUseCaseContext();

  const refreshGrid = useCallback(() => {
    if (isMounted()) dispatch({ type: "REFRESH_GRID" });
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted()) return;

    if (isMounted()) dispatch({ type: "SET_IS_LOADING", isLoading: true });

    getUsersUseCase
      .execute()
      .then((userList) => {
        if (isMounted()) {
          const users = userList.map(UserFactory.entityToModel);
          dispatch({ type: "SET_USER_GRID_LIST", userList: users });
        }
      })
      .catch((err) => {
        if (isMounted()) {
          dispatch({ type: "SET_GET_USER_GRID_ERROR", error: err.message });
          alert(`Hubo un error inesperado: ${err.message}`);
        }
      });
  }, [isMounted, getUsersUseCase, userGridState.refreshGrid]);

  return { userGridState, refreshGrid };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useUserGrid };
