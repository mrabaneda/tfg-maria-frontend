// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "../../domain/entities/user.entity";
import { BaseUserRepository } from "../../domain/ports/repositories/user_repository";
import { BaseUserService } from "../../domain/ports/services/user.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserService implements BaseUserService {
  constructor(private readonly userRepository: BaseUserRepository) {}

  getUsers(): Promise<UserEntity[]> {
    return this.userRepository.get();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserService };
