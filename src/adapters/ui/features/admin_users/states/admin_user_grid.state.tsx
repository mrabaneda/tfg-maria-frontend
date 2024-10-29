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
  error: string | null;
  refreshGrid: number;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserGridState };
