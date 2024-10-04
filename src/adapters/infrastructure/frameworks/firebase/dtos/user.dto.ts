// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Scheme } from "@/src/core/domain/value_objects/scheme";
import { UID } from "@/src/core/domain/value_objects/types";
import { PreferencesTypeEnum } from "@/src/core/domain/value_objects/preferences_type_enum_value";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserDto {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  preferences: PreferencesTypeEnum;
}

const UserDtoScheme: Scheme<UserDto> = {
  uid: "uid",
  name: "name",
  email: "email",
  photoUrl: "photoUrl",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  preferences: "preferences",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDto };

export { UserDtoScheme };
