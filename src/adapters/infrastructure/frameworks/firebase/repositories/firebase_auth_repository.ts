// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Token } from "@/src/core/domain/value_objects/types";
import { BaseAuthRepository } from "@/src/core/domain/ports/repositories/auth_repository";
import { AppUserEntity } from "@/src/core/domain/entities/app_user.entity";
import { firebaseAuthInstance } from "../services/firebase.service";
import { FirebaseAuthUserFactory } from "../factory/firebase_auth_user.factory";
import { UnauthorizedException } from "@/src/core/exceptions/errors";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthRepository implements BaseAuthRepository {
  async signIn(email: string, password: string): Promise<AppUserEntity> {
    const firebaseAuthUser = await signInWithEmailAndPassword(firebaseAuthInstance, email, password);
    return FirebaseAuthUserFactory.firebaseAuthUserToEntity(firebaseAuthUser.user);
  }

  async signOut(): Promise<void> {
    await firebaseAuthInstance.signOut();
  }

  async getUserToken(): Promise<Token> {
    const user = firebaseAuthInstance.currentUser;
    if (!user) throw new UnauthorizedException();
    return await user.getIdToken();
  }

  onAuthStateChanges(cb: (user: AppUserEntity | null) => void): () => void {
    return onAuthStateChanged(firebaseAuthInstance, (user) => {
      return cb(user ? FirebaseAuthUserFactory.firebaseAuthUserToEntity(user) : null);
    });
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FirebaseAuthRepository };
