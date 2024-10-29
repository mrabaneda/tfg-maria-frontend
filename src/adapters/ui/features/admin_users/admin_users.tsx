// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { AdminUserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/admin_user_repository.context";
import { GetAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/get_admin_users_use_case.context";
import { CreateAdminUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/create_admin_user_use_case.context";
import { AdminUserGridContextProvider } from "./contexts/admin_user_grid.context";
import { AdminUserDeleteContextProvider } from "./contexts/admin_user_delete.context";
import { DeleteAdminUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/delete_admin_user.use_case.context";
import AdminUserGrid from "./containers/admin_user_grid";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    <AdminUserRepositoryProvider>
      <GetAdminUsersUseCaseProvider>
        <CreateAdminUserUseCaseProvider>
          <DeleteAdminUserUseCaseProvider>
            <AdminUserGridContextProvider>
              <AdminUserDeleteContextProvider>
                <AdminUserGrid />
              </AdminUserDeleteContextProvider>
            </AdminUserGridContextProvider>
          </DeleteAdminUserUseCaseProvider>
        </CreateAdminUserUseCaseProvider>
      </GetAdminUsersUseCaseProvider>
    </AdminUserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
