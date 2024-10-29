// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserDeleteState {
  uid: UID | null;
  adminName: string | null;
  isDeleting: boolean;
  isDeleteModalOpen: boolean;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserDeleteState };
