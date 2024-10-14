// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserModel } from "../models/user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserGridState {
  userList: UserModel[] | null;
  isLoading: boolean;
  error: string | null;
  refreshGrid: number;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserGridState };
