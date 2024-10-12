// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AdminUserCreateModel } from "../../domain/models/admin_user_create.model";
import { BaseAdminUserRepository } from "../../domain/ports/repositories/admin_user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class CreateAdminUserUseCase {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  async execute(createModel: AdminUserCreateModel): Promise<void> {
    return await this.adminUserRepository.create(createModel);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { CreateAdminUserUseCase };
