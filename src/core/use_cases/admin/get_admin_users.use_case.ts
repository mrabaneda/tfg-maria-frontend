// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserEntity } from "../../domain/entities/admin_user.entity";
import { BaseAdminUserRepository } from "../../domain/ports/repositories/admin_user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class GetAdminUsersUseCase {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  execute(): Promise<AdminUserEntity[]> {
    return this.adminUserRepository.get();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { GetAdminUsersUseCase };
