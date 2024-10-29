// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../value_objects/types";
import { PreferencesTypeEnum } from "../enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface UserEntity {
  readonly uid: UID;
  readonly name: string;
  readonly email: string;
  readonly photoUrl: string;
  readonly preference: PreferencesTypeEnum;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { UserEntity };
