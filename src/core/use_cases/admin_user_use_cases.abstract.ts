// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AdminUser from "../entities/admin_user";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface BaseAdminUserUseCases {
    getAllAdminUsers(): Promise<AdminUser[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAdminUserUseCases;