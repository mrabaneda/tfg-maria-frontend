// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext, useReducer } from "react";
import { AdminUserGridState } from "../states/admin_user_grid.state";
import { AdminUserModel } from "../models/admin_user.model";
import { AdminUserGridController } from "../controllers/admin_user_grid.controller";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface AdminUserGridValue {
  adminUserGridState: AdminUserGridState;
  setAdminUserList: (adminUserList: AdminUserModel[] | null) => void;
  setGetAdminListError: (error: string) => void;
}

interface AdminUserGridProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserGridContext = createContext<AdminUserGridValue>({} as AdminUserGridValue);

const AdminUserGridContextProvider: FC<AdminUserGridProps> = ({ children }) => {
  const [adminUserGridState, dispatch] = useReducer(AdminUserGridController, {
    adminUserList: null,
    getAdminUsersError: undefined,
  } satisfies AdminUserGridState);

  const AdminUserGridValue: AdminUserGridValue = {
    adminUserGridState: adminUserGridState,
    setAdminUserList: (adminUserList: AdminUserModel[] | null) => dispatch({ type: "SET_ADMIN_GRID_LIST", adminUserList: adminUserList }),
    setGetAdminListError: (error: string) => dispatch({ type: "SET_GET_ADMIN_GRID_ERROR", error: error }),
  };

  return <AdminUserGridContext.Provider value={AdminUserGridValue}>{children}</AdminUserGridContext.Provider>;
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
