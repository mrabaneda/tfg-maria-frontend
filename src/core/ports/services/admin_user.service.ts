// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AdminUserEntity from "../../entities/admin_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAdminUserService {
  abstract get(): Promise<AdminUserEntity[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAdminUserService;
