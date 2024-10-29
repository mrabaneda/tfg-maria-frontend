// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserDto {
  uid: UID;
  name: string;
  preference: PreferencesTypeEnum;
  email: string;
  photoUrl: string;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserDto };
