// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { AdminUserServiceProvider } from "@/src/adapters/infrastructure/di/services/admin_user_service.context";
import { GetAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/get_admin_users_use_case.context";
import { AdminUserRepositoryProvider } from "@/src/adapters/infrastructure/di/repositories/admin_user_repository.context";
import { AdminUserGridContextProvider } from "./contexts/admin_user_grid.context";
import AdminUserGrid from "./containers/admin_user_grid";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    // TODO: review, por qué no coge los del shared?
    <AdminUserRepositoryProvider>
      <AdminUserServiceProvider>
        <GetAdminUsersUseCaseProvider>
          <AdminUserGridContextProvider>
            <AdminUserGrid />
          </AdminUserGridContextProvider>
        </GetAdminUsersUseCaseProvider>
      </AdminUserServiceProvider>
    </AdminUserRepositoryProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
