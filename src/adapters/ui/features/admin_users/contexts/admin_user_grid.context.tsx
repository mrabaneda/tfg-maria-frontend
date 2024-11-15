// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import { AdminUserGridState } from "../states/admin_user_grid.state";
import { useAdminUserGrid } from "../hooks/use_admin_user_grid.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserGridValue {
  adminUserGridState: AdminUserGridState;
  refreshGrid: () => void;
}

interface AdminUserGridProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGridContext = createContext<AdminUserGridValue>({} as AdminUserGridValue);

const AdminUserGridContextProvider: FC<AdminUserGridProps> = ({ children }) => {
  const { adminUserGridState, refreshGrid } = useAdminUserGrid();

  const adminUserGridValue: AdminUserGridValue = {
    adminUserGridState: adminUserGridState,
    refreshGrid: refreshGrid,
  };

  return <AdminUserGridContext.Provider value={adminUserGridValue}>{children}</AdminUserGridContext.Provider>;
};

const useAdminUserGridContext = () => {
  const context = useContext(AdminUserGridContext);

  if (!context) {
    throw new Error("useAdminUserGridContext debe ser usada dentro de AdminUserGridProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserGridContextProvider, useAdminUserGridContext, AdminUserGridContext };
