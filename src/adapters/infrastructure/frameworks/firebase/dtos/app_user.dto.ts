// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Scheme } from "@/src/core/domain/value_objects/scheme";
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

const AppUserDtoScheme: Scheme<AppUserDto> = {
  uid: "uid",
  displayName: "displayName",
  email: "email",
  photoUrl: "photoUrl",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AppUserDto };

export { AppUserDtoScheme };
