// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserCreateModel } from "../../domain/models/user_create.model";
import { BaseUserRepository } from "../../domain/ports/repositories/user.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class CreateUserUseCase {
  constructor(private readonly userRepository: BaseUserRepository) {}

  async execute(createModel: UserCreateModel): Promise<void> {
    return await this.userRepository.create(createModel);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { CreateUserUseCase };
