// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useGetAdminUsersUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/get_admin_users_use_case.context";
import { useEffect } from "react";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";
import { AdminUserFactory } from "../factory/admin_user.factory";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserGrid = () => {
  const { setAdminUserList, setGetAdminListError } = useAdminUserGridContext();

  const { getAdminUsersUseCase } = useGetAdminUsersUseCaseContext();

  useEffect(() => {
    let mounted = true;

    if (mounted) setAdminUserList(null);
    console.log("Fetching admin users...");
    getAdminUsersUseCase
      .execute()
      .then((adminUserList) => {
        console.log(`AQUI TENEMOS A LOS ADMINS: ${JSON.stringify(adminUserList)}`);

        if (mounted) setAdminUserList(adminUserList.map(AdminUserFactory.entityToModel));
      })
      .catch((err) => {
        if (mounted) {
          console.log(`EL ERROR ENTERO: ${JSON.stringify(err)}`);

          setGetAdminListError(err.message);
          alert(`Hubo un error inesperado: ${err.message}`);
        }
      });

    return () => {
      mounted = false;
    };
  }, [getAdminUsersUseCase, setAdminUserList, setGetAdminListError]);
  return {};
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserGrid };
