// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserDto } from "../dtos/admin_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserFactory {
  static adminUserDtoToEntity(adminUserdto: AdminUserDto): AdminUserEntity {
    return new AdminUserEntity(
      adminUserdto.userId,
      adminUserdto.name,
      adminUserdto.email,
      adminUserdto.photoUrl,
      new Date(adminUserdto.createdAt),
      new Date(adminUserdto.updatedAt)
    );
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
