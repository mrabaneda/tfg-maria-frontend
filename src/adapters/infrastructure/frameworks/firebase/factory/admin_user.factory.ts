// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserDto, AdminUserDtoScheme } from "../dtos/admin_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserFactory {
  static adminUserDtoToEntity(adminUserdto: AdminUserDto): AdminUserEntity {
    return new AdminUserEntity(
      adminUserdto[AdminUserDtoScheme.userId],
      adminUserdto[AdminUserDtoScheme.name],
      adminUserdto[AdminUserDtoScheme.email],
      adminUserdto[AdminUserDtoScheme.photoUrl],
      adminUserdto[AdminUserDtoScheme.createdAt],
      adminUserdto[AdminUserDtoScheme.updatedAt]
    );
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
