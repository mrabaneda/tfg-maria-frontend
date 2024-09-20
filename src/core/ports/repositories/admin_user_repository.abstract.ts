// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AdminUserEntity from "../../entities/admin_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAdminUserRepository {
  abstract get(): Promise<AdminUserEntity[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAdminUserRepository;
