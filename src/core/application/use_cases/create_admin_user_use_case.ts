// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserCreateModel } from "../../domain/models/admin_user_create.model";
import { BaseAdminUserService } from "../../domain/ports/services/admin_user.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class CreateAdminUserUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  execute(createModel: AdminUserCreateModel): Promise<void> {
    return this.adminUserService.createAdminUser(createModel);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { CreateAdminUserUseCase };
