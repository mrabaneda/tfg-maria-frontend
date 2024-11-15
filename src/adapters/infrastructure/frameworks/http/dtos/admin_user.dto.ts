// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserDto {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserDto };
