// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { BaseAdminUserRepository } from "@/src/core/domain/ports/repositories/admin_user.repository";
import { createContext, FC, useContext } from "react";
import { HttpAdminUserRepository } from "../../frameworks/http/repositories/http_admin_user.repository";
import { useAuthServiceContext } from "../services/auth_service.context";

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

const AuthRepositoryProvider: FC<AdminUserRepositoryProviderProps> = ({ children }) => {
  const authServiceContext = useAuthServiceContext();

  const adminUserRepositoryContextValue: AdminUserRepositoryContextValue = {
    adminUserRepository: new HttpAdminUserRepository(authServiceContext.authService),
  };

  return <AdminUserRepositoryContext.Provider value={adminUserRepositoryContextValue}>{children}</AdminUserRepositoryContext.Provider>;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminRepositoryContext, AuthRepositoryProvider };
