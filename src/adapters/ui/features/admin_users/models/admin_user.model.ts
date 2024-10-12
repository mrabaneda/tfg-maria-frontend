// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserModel {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string;
}

const AdminUserModelSchema: { [K in keyof AdminUserModel]: K } = {
  userId: "userId",
  name: "name",
  email: "email",
  photoUrl: "photoUrl",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserModel };

export { AdminUserModelSchema };
