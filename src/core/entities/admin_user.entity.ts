// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AdminUserEntity {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// --------------------------------
// Public Interface
// --------------------------------

export type { AdminUserEntity };
