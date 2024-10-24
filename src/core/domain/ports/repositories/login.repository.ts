// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../../value_objects/types";
import { LoginEntity } from "../../entities/login.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseLoginRepository {
  abstract getOneOrFail(uid: UID): Promise<LoginEntity>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseLoginRepository };
