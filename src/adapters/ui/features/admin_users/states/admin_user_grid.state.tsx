// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserModel } from "../models/admin_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserGridState {
  adminUserList: AdminUserModel[] | null;
  isLoading: boolean;
  getAdminUsersError?: string;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserGridState };
