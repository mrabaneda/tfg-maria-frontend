// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "../../domain/entities/user.entity";
import { BaseUserRepository } from "../../domain/ports/repositories/user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class GetUsersUseCase {
  constructor(private readonly userRepository: BaseUserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.userRepository.get();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { GetUsersUseCase };
