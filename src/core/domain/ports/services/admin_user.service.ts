// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../entities/admin_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAdminUserService {
  abstract getAdminUsers(): Promise<AdminUserEntity[]>;
  // abstract createAdminUser(createModel: AdminUserCreateModel): Promise<void>;
  // abstract deleteAdminUser(uid: UID): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseAdminUserService };
