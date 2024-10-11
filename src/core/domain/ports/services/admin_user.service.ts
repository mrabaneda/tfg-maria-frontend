// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../entities/admin_user.entity";
import { AdminUserCreateModel } from "../../models/admin_user_create.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAdminUserService {
  abstract getAdminUsers(): Promise<AdminUserEntity[]>;
  abstract createAdminUser(createModel: AdminUserCreateModel): Promise<void>;
  // abstract deleteAdminUser(uid: UID): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseAdminUserService };
