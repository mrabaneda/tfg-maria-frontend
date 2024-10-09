// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "../../entities/user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseUserRepository {
  abstract get(): Promise<UserEntity[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseUserRepository };