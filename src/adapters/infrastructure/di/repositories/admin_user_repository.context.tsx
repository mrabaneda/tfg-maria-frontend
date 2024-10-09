// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, useContext } from "react";
import { BaseAdminUserRepository } from "@/src/core/domain/ports/repositories/admin_user.repository";
import { useAuthServiceContext } from "../services/auth_service.context";
import { HttpAdminUserRepository } from "../../frameworks/http/repositories/http_admin_user.repository";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserRepositoryContextValue {
  adminUserRepository: BaseAdminUserRepository;
}

interface AdminUserRepositoryProviderProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminRepositoryContext = () => useContext(AdminUserRepositoryContext);

const AdminUserRepositoryContext = createContext<AdminUserRepositoryContextValue>({} as AdminUserRepositoryContextValue);

const AdminUserRepositoryProvider: FC<AdminUserRepositoryProviderProps> = ({ children }) => {
  const { authService } = useAuthServiceContext();

  const adminUserRepositoryContextValue: AdminUserRepositoryContextValue = {
    adminUserRepository: new HttpAdminUserRepository(authService),
  };

  return <AdminUserRepositoryContext.Provider value={adminUserRepositoryContextValue}>{children}</AdminUserRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminRepositoryContext, AdminUserRepositoryProvider };
