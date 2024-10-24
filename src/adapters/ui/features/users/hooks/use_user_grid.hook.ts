// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCallback, useEffect, useReducer } from "react";
import { UserGridController } from "../controllers/user_grid.controller";
import { UserGridState } from "../states/user_grid.state";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { useGetUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/user/get_users_use_case.context";
import { UserFactory } from "../factory/user.factory";
import { useGetLoginUserUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/login/get_login_user_use_case.context";
import { LoginEntity } from "@/src/core/domain/entities/login.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useUserGrid = () => {
  const [userGridState, dispatch] = useReducer(UserGridController, {
    userList: null,
    userPasswords: null,
    isLoading: false,
    refreshGrid: 0,
    error: null,
  } satisfies UserGridState);

  const isMounted = useMounted();

  const { getUsersUseCase } = useGetUsersUseCaseContext();

  const { getLoginUserUseCase } = useGetLoginUserUseCaseContext();

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

          let logins: LoginEntity[] = [];

          const loginPromises = users.map(async (user) => {
            try {
              const userLogin: LoginEntity = await getLoginUserUseCase.execute(user.uid);

              // Dado que userLogin es un objeto único, lo agregamos al array logins
              return userLogin;
            } catch (error) {
              console.error(`Error al obtener el login del usuario ${user.uid}:`, error);
              return null; // Puedes retornar null o algún valor por defecto en caso de error
            }
          });

          Promise.all(loginPromises)
            .then((resolvedLogins) => {
              logins = resolvedLogins.filter((login) => login !== null);

              if (isMounted()) {
                dispatch({ type: "SET_USER_PASSWORDS", userPasswords: logins });
              }
            })
            .catch((err) => {
              if (isMounted()) {
                dispatch({ type: "SET_GET_USER_GRID_ERROR", error: err.message });
                alert(`Hubo un error al obtener los passwords: ${err.message}`);
              }
            });
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
