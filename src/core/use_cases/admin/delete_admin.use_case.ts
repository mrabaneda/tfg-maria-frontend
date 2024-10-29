// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../domain/value_objects/types";
import { BaseAdminUserRepository } from "../../domain/ports/repositories/admin_user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class DeleteAdminUserUseCase {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  execute(uid: UID): Promise<void> {
    return this.adminUserRepository.delete(uid);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { DeleteAdminUserUseCase };
