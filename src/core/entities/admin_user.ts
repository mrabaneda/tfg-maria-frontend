// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AdminUser {
    userId: UID;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

// --------------------------------
// Public Interface
// --------------------------------

export default AdminUser;