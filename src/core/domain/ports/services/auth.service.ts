// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Token } from "../../value_objects/types";
import { AuthUserEntity } from "../../entities/auth_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

abstract class BaseAuthService {
  abstract signIn(email: string, password: string): Promise<AuthUserEntity>;
  abstract signOut(): Promise<void>;
  abstract getUserToken(): Promise<Token>;
  abstract onAuthStateChanges(cb: (user: AuthUserEntity | null) => void): () => void;
  abstract isAdmin(): Promise<boolean>;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { BaseAuthService };
