// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AppUserEntity {
  userId: UID;
  name: string;
  email: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export default AppUserEntity;
