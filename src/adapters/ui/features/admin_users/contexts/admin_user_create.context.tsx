// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import { AdminUserCreateState } from "../states/admin_user_create.state";
import { useAdminUserCreate } from "../hooks/use_admin_user_create.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserCreateValue {
  adminUserCreateState: AdminUserCreateState;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openCreateAdminForm: () => void;
  createFormSetVisible: (isVisible: boolean) => void;
  createAdminUser: () => void;
}

interface AdminUserCreateProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserCreateContext = createContext<AdminUserCreateValue>({} as AdminUserCreateValue);

const AdminUserCreateContextProvider: FC<AdminUserCreateProps> = ({ children }) => {
  const {
    createState,
    createFormSetVisible,
    handleEmailChange,
    handleFileChange,
    handleNameChange,
    handlePasswordChange,
    openCreateForm,
    createAdminUser,
  } = useAdminUserCreate();

  const adminUserCreateValue: AdminUserCreateValue = {
    adminUserCreateState: createState,
    setName: handleNameChange,
    setEmail: handleEmailChange,
    setPassword: handlePasswordChange,
    setImage: handleFileChange,
    openCreateAdminForm: openCreateForm,
    createFormSetVisible: createFormSetVisible,
    createAdminUser: createAdminUser,
  };

  return <AdminUserCreateContext.Provider value={adminUserCreateValue}>{children}</AdminUserCreateContext.Provider>;
};

const useAdminUserCreateContext = () => {
  const context = useContext(AdminUserCreateContext);

  if (!context) {
    throw new Error("useAdminUserCreateContext debe ser usada dentro de AdminUserCreateProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserCreateContextProvider, useAdminUserCreateContext, AdminUserCreateContext };
