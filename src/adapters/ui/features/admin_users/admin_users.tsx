// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { GetAdminUsersUseCaseProvider } from "@/src/adapters/infrastructure/di/use_cases/get_admin_users_use_case.context";
import { AdminUserGridContextProvider } from "./contexts/admin_user_grid.context";
import AdminUserGrid from "./containers/admin_user_grid";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUsers: React.FC = () => {
  return (
    <GetAdminUsersUseCaseProvider>
      <AdminUserGridContextProvider>
        <AdminUserGrid />
      </AdminUserGridContextProvider>
    </GetAdminUsersUseCaseProvider>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AdminUsers;
