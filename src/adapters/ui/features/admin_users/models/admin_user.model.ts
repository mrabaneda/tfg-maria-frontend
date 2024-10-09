// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserModel {
  userId: UID;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  createdAt: Date;
}

const AdminUserModelSchema: { [K in keyof AdminUserModel]: K } = {
  userId: "userId",
  name: "name",
  email: "email",
  photoUrl: "photoUrl",
  createdAt: "createdAt",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserModel };

export { AdminUserModelSchema };
