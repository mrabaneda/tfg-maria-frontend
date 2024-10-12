// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class IsAdminUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(): Promise<boolean> {
    return this.authService.isAdmin();
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { IsAdminUseCase };
