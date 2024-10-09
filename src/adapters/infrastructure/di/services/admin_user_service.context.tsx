// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { BaseAdminUserService } from "@/src/core/domain/ports/services/admin_user.service";
import { createContext, FC, useContext } from "react";
import { useAdminRepositoryContext } from "../repositories/admin_user_repository.context";
import { AdminUserService } from "@/src/core/application/services/admin_user.service";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserServiceContextValue {
  adminUserService: BaseAdminUserService;
}

interface AdminUserServiceProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserServiceContext = () => useContext(AdminUserServiceContext);

const AdminUserServiceContext = createContext<AdminUserServiceContextValue>({} as AdminUserServiceContextValue);

const AdminUserServiceProvider: FC<AdminUserServiceProviderProps> = ({ children }) => {
  const { adminUserRepository } = useAdminRepositoryContext();

  const adminUserServiceContextValue: AdminUserServiceContextValue = { adminUserService: new AdminUserService(adminUserRepository) };

  return <AdminUserServiceContext.Provider value={adminUserServiceContextValue}>{children}</AdminUserServiceContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserServiceContext, AdminUserServiceProvider };
