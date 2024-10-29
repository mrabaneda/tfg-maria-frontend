// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserModel {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string;
}

const AdminUserModelSchema: { [K in keyof AdminUserModel]: K } = {
  uid: "uid",
  name: "name",
  email: "email",
  photoUrl: "photoUrl",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserModel };

export { AdminUserModelSchema };
