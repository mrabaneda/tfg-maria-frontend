// --------------------------------
// Requirements
// --------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AppUserViewModel {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string | null;
}

// --------------------------------
// Public Interface
// --------------------------------

export type { AppUserViewModel };
