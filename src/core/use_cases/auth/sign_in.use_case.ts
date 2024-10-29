// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AuthUserEntity } from "@/src/core/domain/entities/auth_user.entity";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class SignInUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(email: string, password: string): Promise<AuthUserEntity> {
    return this.authService.signIn(email, password);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { SignInUseCase };
