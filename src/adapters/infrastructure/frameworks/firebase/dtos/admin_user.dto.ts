// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/value_objects/types";
import { Scheme } from "@/src/core/value_objects/scheme";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserDto {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserDtoScheme: Scheme<AdminUserDto> = {
  userId: "userId",
  name: "name",
  email: "email",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  photoUrl: "photoUrl",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserDto };

export { AdminUserDtoScheme };
