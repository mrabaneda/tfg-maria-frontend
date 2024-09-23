// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import UserEntity from "../../entities/user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseUserService {
  abstract get(): Promise<UserEntity[]>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseUserService;