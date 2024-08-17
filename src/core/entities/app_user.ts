// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AppUser {
    userId: UID;
    name: string;
    email: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export default AppUser;