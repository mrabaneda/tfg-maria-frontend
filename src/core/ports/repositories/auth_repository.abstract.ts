// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Token } from "../../value_objects/types";
import AppUserEntity from "../../entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAuthRepository {
  abstract signIn(email: string, password: string): Promise<AppUserEntity>;
  abstract signOut(): Promise<void>;
  abstract getUserToken(): Promise<Token>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAuthRepository;
