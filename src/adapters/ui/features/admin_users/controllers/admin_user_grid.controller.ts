// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserModel } from "../models/admin_user.model";
import { AdminUserGridState } from "../states/admin_user_grid.state";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

type AdminUserGridAction =
  | { type: "SET_ADMIN_GRID_LIST"; adminUserList: AdminUserModel[] | null }
  | { type: "SET_IS_LOADING"; isLoading: boolean }
  | { type: "SET_GET_ADMIN_GRID_ERROR"; error?: string };

const AdminUserGridController = (state: AdminUserGridState, action: AdminUserGridAction): AdminUserGridState => {
  switch (action.type) {
    case "SET_ADMIN_GRID_LIST":
      return { ...state, adminUserList: action.adminUserList };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "SET_GET_ADMIN_GRID_ERROR":
      return { ...state, getAdminUsersError: action.error, adminUserList: [] };
    default:
      throw new Error("Invalid AdminUserGridAction value");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserGridAction };

export { AdminUserGridController };
