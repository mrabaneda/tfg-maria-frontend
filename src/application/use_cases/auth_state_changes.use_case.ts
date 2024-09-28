// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { BaseAuthService } from "@/src/core/ports/services/auth.service";
import { AppUserEntity } from "@/src/core/entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AuthStateChangesUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(cb: (user: AppUserEntity | null) => void): () => void {
    return this.authService.onAuthStateChanges(cb);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthStateChangesUseCase };
