// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserDeleteState {
  uid: UID | null;
  userName: string | null;
  isDeleting: boolean;
  isDeleteModalOpen: boolean;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDeleteState };
