// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserEntity } from "../../entities/app_user.entity";
import { Token } from "../../value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAuthService {
  abstract signIn(email: string, password: string): Promise<AppUserEntity>;
  abstract signOut(): Promise<void>;
  abstract getUserToken(): Promise<Token>;
  abstract onAuthStateChanges(cb: (user: AppUserEntity | null) => void): () => void;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseAuthService };
