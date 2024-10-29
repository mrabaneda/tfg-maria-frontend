// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../domain/value_objects/types";
import { LoginEntity } from "../../domain/entities/login.entity";
import { BaseLoginRepository } from "../../domain/ports/repositories/login.repository";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class GetLoginUserUseCase {
  constructor(private readonly loginRepository: BaseLoginRepository) {}

  execute(uid: UID): Promise<LoginEntity> {
    return this.loginRepository.getOneOrFail(uid);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { GetLoginUserUseCase };
