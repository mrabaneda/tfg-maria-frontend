// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../value_objects/types";
import { UserEntity } from "../../entities/user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseUserRepository {
  abstract get(): Promise<UserEntity[]>;
  abstract delete(uid: UID): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseUserRepository };
