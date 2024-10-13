// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { AdminUserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/admin_user_repository.context";
import { GetAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/get_admin_users_use_case.context";
import { CreateAdminUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/create_admin_user_use_case.context";
import { AdminUserGridContextProvider } from "./contexts/admin_user_grid.context";
import AdminUserGrid from "./containers/admin_user_grid";
import { DeleteAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/delete_admin_user.use_case.context";
import { AdminUserDeleteContextProvider } from "./contexts/admin_user_delete.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    <AdminUserRepositoryProvider>
      <GetAdminUsersUseCaseProvider>
        <CreateAdminUserUseCaseProvider>
          <DeleteAdminUsersUseCaseProvider>
            <AdminUserGridContextProvider>
              <AdminUserDeleteContextProvider>
                <AdminUserGrid />
              </AdminUserDeleteContextProvider>
            </AdminUserGridContextProvider>
          </DeleteAdminUsersUseCaseProvider>
        </CreateAdminUserUseCaseProvider>
      </GetAdminUsersUseCaseProvider>
    </AdminUserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
