// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../value_objects/types";
import { UserEntity } from "../../entities/user.entity";
import { UserCreateModel } from "../../models/user_create.model";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseUserRepository {
  abstract get(): Promise<UserEntity[]>;
  abstract delete(uid: UID): Promise<void>;
  abstract create(createModel: UserCreateModel): Promise<void>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseUserRepository };
