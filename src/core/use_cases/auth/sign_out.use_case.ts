// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class SignOutUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(): Promise<void> {
    return this.authService.signOut();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { SignOutUseCase };
