// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import User from "../entities/user";
import AdminUser from "../entities/admin_user";


// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface BaseUserUseCases {
    getAdminUser(): Promise<AdminUser>;
    getUsers(): Promise<User[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseUserUseCases;