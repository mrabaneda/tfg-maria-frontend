// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AppUserEntity {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string | null;
}

// --------------------------------
// Public Interface
// --------------------------------

export type { AppUserEntity };
