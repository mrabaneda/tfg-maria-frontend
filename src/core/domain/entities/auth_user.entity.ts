// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AuthUserEntity {
  readonly uid: UID;
  readonly name: string;
  readonly email: string;
  readonly photoUrl: string;
}
// --------------------------------
// Public Interface
// --------------------------------

export type { AuthUserEntity };
