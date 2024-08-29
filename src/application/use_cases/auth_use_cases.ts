// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import AppUser from "@/src/core/entities/app_user";
import BaseAuthUseCases from "@/src/core/use_cases/auth_use_cases.abstract";
import BaseAuthRepository from "@/src/core/repositories/auth_repository.abstract";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class AuthUseCases implements BaseAuthUseCases {
    constructor(private readonly authRepository: BaseAuthRepository) { }

    signIn(email: string, password: string): Promise<AppUser> {
        return this.authRepository.signIn(email, password);
    }

    signOut(): Promise<void> {
        return this.authRepository.signOut();
    }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default AuthUseCases;