// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AdminUserEntity from "@/src/core/entities/admin_user.entity";
import { AdminUserDto, AdminUserDtoScheme } from "../dtos/admin_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserFactory {
  static adminUserDtoToEntity(adminUserdto: AdminUserDto): AdminUserEntity {
    return {
      userId: adminUserdto[AdminUserDtoScheme.userId],
      email: adminUserdto[AdminUserDtoScheme.email],
      name: adminUserdto[AdminUserDtoScheme.name],
      createdAt: adminUserdto[AdminUserDtoScheme.createdAt],
      updatedAt: adminUserdto[AdminUserDtoScheme.updatedAt],
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
