// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../entities/admin_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAdminUserRepository {
  abstract get(): Promise<AdminUserEntity[]>;
  //   abstract create(createModel: AdminUserCreateModel): Promise<void>;
  //   abstract delete(uid: UID): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseAdminUserRepository };
