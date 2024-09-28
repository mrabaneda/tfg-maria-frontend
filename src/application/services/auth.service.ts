// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Token } from "@/src/core/value_objects/types";
import { BaseAuthRepository } from "@/src/core/ports/repositories/auth_repository.abstract";
import { AppUserEntity } from "@/src/core/entities/app_user.entity";
import { BaseAuthService } from "@/src/core/ports/services/auth.service";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AuthService implements BaseAuthService {
  constructor(private readonly authRepository: BaseAuthRepository) {}

  signIn(email: string, password: string): Promise<AppUserEntity> {
    return this.authRepository.signIn(email, password);
  }

  signOut(): Promise<void> {
    return this.authRepository.signOut();
  }

  getUserToken(): Promise<Token> {
    return this.authRepository.getUserToken();
  }

  onAuthStateChanges(cb: (user: AppUserEntity | null) => void): () => void {
    return this.authRepository.onAuthStateChanges(cb);
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthService };
