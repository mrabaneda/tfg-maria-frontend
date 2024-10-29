// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { LoginEntity } from "@/src/core/domain/entities/login.entity";
import { UserModel } from "../models/user.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserGridState {
  userList: UserModel[] | null;
  userPasswords: LoginEntity[] | null;
  isLoading: boolean;
  error: string | null;
  refreshGrid: number;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserGridState };
