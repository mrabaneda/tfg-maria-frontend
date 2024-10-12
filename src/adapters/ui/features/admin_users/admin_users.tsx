// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { GetAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/get_admin_users_use_case.context";
import { AdminUserGridContextProvider } from "./contexts/admin_user_grid.context";
import AdminUserGrid from "./containers/admin_user_grid";
import { AdminUserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/admin_user_repository.context";
import { CreateAdminUserUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/admin/create_admin_user_use_case.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    <AdminUserRepositoryProvider>
      <GetAdminUsersUseCaseProvider>
        <CreateAdminUserUseCaseProvider>
          <AdminUserGridContextProvider>
            <AdminUserGrid />
          </AdminUserGridContextProvider>
        </CreateAdminUserUseCaseProvider>
      </GetAdminUsersUseCaseProvider>
    </AdminUserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
