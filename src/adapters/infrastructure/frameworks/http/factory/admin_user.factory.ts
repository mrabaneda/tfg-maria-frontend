// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "@/src/core/domain/entities/admin_user.entity";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { AdminUserDto } from "../dtos/admin_user.dto";
import { AdminUserCreateDto, AdminUserCreateDtoScheme } from "../dtos/admin_user_create.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserFactory {
  static adminUserDtoToEntity(adminUserdto: AdminUserDto): AdminUserEntity {
    return {
      uid: adminUserdto.userId,
      name: adminUserdto.name,
      email: adminUserdto.email,
      photoUrl: adminUserdto.photoUrl,
    };
  }

  static adminUserCreateModelToFormData(adminUserCreateModel: AdminUserCreateModel): FormData {
    console.log({adminUserCreateModel});    
    const formData = new FormData();
    formData.append(AdminUserCreateDtoScheme.name, adminUserCreateModel.name);
    formData.append(AdminUserCreateDtoScheme.email, adminUserCreateModel.email);
    formData.append(AdminUserCreateDtoScheme.password, adminUserCreateModel.password);
    formData.append(AdminUserCreateDtoScheme.image, adminUserCreateModel.image);
    return formData;
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserFactory };
