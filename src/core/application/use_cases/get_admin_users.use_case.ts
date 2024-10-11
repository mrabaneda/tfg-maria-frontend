// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../domain/entities/admin_user.entity";
import { BaseAdminUserService } from "../../domain/ports/services/admin_user.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class GetAdminUsersUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  execute(): Promise<AdminUserEntity[]> {
    return this.adminUserService.getAdminUsers();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { GetAdminUsersUseCase };
