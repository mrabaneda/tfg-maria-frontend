// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import User from "../entities/user";
import AdminUser from "../entities/admin_user";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface BaseUserRepository {
    getAllUsers(): Promise<User[]>;
    getAllAdminUsers(): Promise<AdminUser[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseUserRepository;