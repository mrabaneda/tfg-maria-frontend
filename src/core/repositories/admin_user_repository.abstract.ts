// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AdminUser from "../entities/admin_user";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface BaseAdminUserRepository {
    getAllAdminUsers(): Promise<AdminUser[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAdminUserRepository;