// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Token } from "@/src/core/domain/value_objects/types";
import { BaseAuthService } from "@/src/core/domain/ports/services/auth.service";
import { AuthUserEntity } from "@/src/core/domain/entities/auth_user.entity";
import { firebaseAuthInstance } from "./firebase.service";
import { FirebaseAuthUserFactory } from "../factory/firebase_auth_user.factory";
import { UnauthorizedException } from "@/src/core/exceptions/errors";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthService implements BaseAuthService {
  async isAdmin(): Promise<boolean> {
    const user = firebaseAuthInstance.currentUser;
    if (!user) throw new UnauthorizedException();
    const decodedIdToken = await user.getIdTokenResult(true);
    return decodedIdToken.claims.admin === true;
  }

  async signIn(email: string, password: string): Promise<AuthUserEntity> {
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

  onAuthStateChanges(cb: (user: AuthUserEntity | null) => void): () => void {
    return onAuthStateChanged(firebaseAuthInstance, (user) => {
      return cb(user ? FirebaseAuthUserFactory.firebaseAuthUserToEntity(user) : null);
    });
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FirebaseAuthService };
