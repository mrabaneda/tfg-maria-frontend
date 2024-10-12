// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { AuthUserEntity } from "@/src/core/domain/entities/auth_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AuthStateChangesUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(cb: (user: AuthUserEntity | null) => void): () => void {
    return this.authService.onAuthStateChanges(cb);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthStateChangesUseCase };
