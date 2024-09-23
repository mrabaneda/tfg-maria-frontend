// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUser from "@/src/core/entities/app_user.entity";
import BaseAuthService from "@/src/core/ports/services/auth.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class SignInUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  execute(email: string, password: string): Promise<AppUser> {
    return this.authService.signIn(email, password);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default SignInUseCase;
