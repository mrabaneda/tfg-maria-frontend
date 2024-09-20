// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Token } from "../../value_objects/types";
import AppUser from "../../entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAuthService {
  abstract signIn(email: string, password: string): Promise<AppUser>;
  abstract signOut(): Promise<void>;
  abstract getUserToken(): Promise<Token>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default BaseAuthService;
