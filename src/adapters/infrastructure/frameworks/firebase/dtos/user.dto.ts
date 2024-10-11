// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

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

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDto };
