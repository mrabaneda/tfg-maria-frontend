// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Scheme } from "@/src/core/value_objects/scheme";
import { UID } from "@/src/core/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AppUserDto {
  uid: UID;
  displayName: string;
  photoUrl: string | null;
  email: string;
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
