// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../domain/value_objects/types";
import { BaseUserRepository } from "../../domain/ports/repositories/user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class DeleteUserUseCase {
  constructor(private readonly userRepository: BaseUserRepository) {}

  execute(uid: UID): Promise<void> {
    return this.userRepository.delete(uid);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { DeleteUserUseCase };
