// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../domain/entities/admin_user.entity";
import { BaseAdminUserRepository } from "../../domain/ports/repositories/admin_user.repository";
import { BaseAdminUserService } from "../../domain/ports/services/admin_user.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AdminUserService implements BaseAdminUserService {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  getAdminUsers(): Promise<AdminUserEntity[]> {
    return this.adminUserRepository.get();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AdminUserService };
