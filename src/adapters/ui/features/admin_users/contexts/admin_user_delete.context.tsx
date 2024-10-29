// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { UID } from "@/src/core/domain/value_objects/types";
import { createContext, FC, ReactNode, useContext } from "react";
import { AdminUserDeleteState } from "../states/admin_user_delete.state";
import { useAdminUserDelete } from "../hooks/use_admin_user_delete.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserDeleteValue {
  adminUserDeleteState: AdminUserDeleteState;
  openDeleteModal: (uid: UID, adminName: string) => void;
  deleteModalSetVisible: (isVisible: boolean) => void;
  deleteAdminUser: () => void;
}

interface AdminUserDeleteProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserDeleteContext = createContext<AdminUserDeleteValue>({} as AdminUserDeleteValue);

const AdminUserDeleteContextProvider: FC<AdminUserDeleteProps> = ({ children }) => {
  const { deleteState, openDeleteModal, deleteModalSetVisible, deleteAdminUser } = useAdminUserDelete();

  const adminUserDeleteValue: AdminUserDeleteValue = {
    adminUserDeleteState: deleteState,
    openDeleteModal: openDeleteModal,
    deleteModalSetVisible: deleteModalSetVisible,
    deleteAdminUser: deleteAdminUser,
  };

  return <AdminUserDeleteContext.Provider value={adminUserDeleteValue}>{children}</AdminUserDeleteContext.Provider>;
};

const useAdminUserDeleteContext = () => {
  const context = useContext(AdminUserDeleteContext);

  if (!context) {
    throw new Error("useAdminUserDeleteContext debe ser usada dentro de AdminUserCreateProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserDeleteContextProvider, useAdminUserDeleteContext, AdminUserDeleteContext };
