// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserModel } from "../models/admin_user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserGridState {
  adminUserList: AdminUserModel[] | null;
  getAdminUsersError?: string;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserGridState };
