// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { AdminUserDto } from "../dtos/admin_user.dto";
import { AdminUserCreateDto } from "../dtos/admin_user_create.dto";

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

  static adminUserEntityToModel(adminUserCreateModel: AdminUserCreateModel): AdminUserCreateDto {
    return {
      email: adminUserCreateModel.email,
      name: adminUserCreateModel.name,
      password: adminUserCreateModel.password,
      photoUrl: adminUserCreateModel.photoUrl,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
