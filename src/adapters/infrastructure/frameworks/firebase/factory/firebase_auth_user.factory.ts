// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { User } from "firebase/auth";
import { AuthUserEntity } from "@/src/core/domain/entities/auth_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthUserFactory {
  static firebaseAuthUserToEntity(firebaseAuthUser: User): AuthUserEntity {
    return {
      uid: firebaseAuthUser.uid,
      name: firebaseAuthUser.displayName!,
      email: firebaseAuthUser.email!,
      photoUrl: firebaseAuthUser.photoURL!,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FirebaseAuthUserFactory };
