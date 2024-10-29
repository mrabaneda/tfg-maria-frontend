// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AppUserDto {
  uid: UID;
  displayName: string;
  email: string;
  photoUrl: string | null;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AppUserDto };
